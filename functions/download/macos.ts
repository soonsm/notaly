const LATEST_MAC_URL = 'https://downloads.notaly.dev/updates/latest-mac.yml';
const DMG_BASE_URL = 'https://downloads.notaly.dev/updates';

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

export const onRequest = async ({ request }: { request: Request }): Promise<Response> => {
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

  const dmgUrl = `${DMG_BASE_URL}/Notaly-${version}.dmg`;
  return new Response(null, {
    status: 302,
    headers: {
      location: dmgUrl,
      'cache-control': 'no-store'
    }
  });
};
