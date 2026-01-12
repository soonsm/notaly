const LATEST_MAC_URL = 'https://downloads.notaly.dev/updates/latest-mac.yml';
const DMG_BASE_URL = 'https://downloads.notaly.dev/updates';

type D1ResultMeta = {
  changes?: number;
};

type D1Result = {
  meta?: D1ResultMeta;
};

type D1PreparedStatementLike = {
  bind: (...values: unknown[]) => D1PreparedStatementLike;
  run: () => Promise<D1Result>;
};

type D1DatabaseLike = {
  prepare: (query: string) => D1PreparedStatementLike;
};

type Env = {
  notaly?: D1DatabaseLike;
};

const KST_OFFSET_MS = 9 * 60 * 60 * 1000;

const toKstTimestamp = (date = new Date()): string => {
  const kst = new Date(date.getTime() + KST_OFFSET_MS);
  const pad = (value: number) => value.toString().padStart(2, '0');

  return `${kst.getUTCFullYear()}-${pad(kst.getUTCMonth() + 1)}-${pad(
    kst.getUTCDate()
  )} ${pad(kst.getUTCHours())}:${pad(kst.getUTCMinutes())}:${pad(kst.getUTCSeconds())}`;
};

const normalizeYamlValue = (value: string): string => {
  let trimmed = value.trim();
  const commentIndex = trimmed.indexOf(' #');
  if (commentIndex !== -1) {
    trimmed = trimmed.slice(0, commentIndex).trim();
  }

  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    trimmed = trimmed.slice(1, -1);
  }

  return trimmed;
};

const extractVersion = (yml: string): string | null => {
  const lines = yml.split(/\r?\n/);

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.length === 0) {
      continue;
    }

    const versionMatch = trimmed.match(/^version:\s*(.+)$/);
    if (versionMatch?.[1]) {
      return normalizeYamlValue(versionMatch[1]);
    }
  }

  return null;
};

const recordDownload = async (db: D1DatabaseLike, version: string): Promise<void> => {
  const timestamp = toKstTimestamp();
  await db
    .prepare(
      `INSERT INTO download_counts (version, platform, count, last_download_at)
       VALUES (?1, ?2, 1, ?3)
       ON CONFLICT(version, platform)
       DO UPDATE SET count = count + 1, last_download_at = excluded.last_download_at`
    )
    .bind(version, 'macos', timestamp)
    .run();
};

export const onRequest = async ({
  request,
  env
}: {
  request: Request;
  env: Env;
}): Promise<Response> => {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    return new Response('Method Not Allowed', {
      status: 405,
      headers: { Allow: 'GET, HEAD' }
    });
  }

  const latestResponse = await fetch(LATEST_MAC_URL, {
    headers: { 'cache-control': 'no-cache' }
  });
  if (!latestResponse.ok) {
    return new Response('latest-mac.yml not found.', { status: 404 });
  }

  const latestYaml = await latestResponse.text();
  const version = extractVersion(latestYaml);
  if (!version) {
    return new Response('Could not parse latest-mac.yml.', { status: 502 });
  }

  if (request.method === 'GET' && env.notaly) {
    try {
      await recordDownload(env.notaly, version);
    } catch {
      // Continue redirect even if stats update fails.
    }
  }

  const dmgUrl = `${DMG_BASE_URL}/Notaly-${version}.dmg`;
  return new Response(null, {
    status: 302,
    headers: {
      location: dmgUrl,
      'cache-control': 'no-store'
    }
  });
};
