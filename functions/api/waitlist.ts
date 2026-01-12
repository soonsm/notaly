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

const isValidEmail = (value: string): boolean => {
  const trimmed = value.trim();
  if (trimmed.length === 0) {
    return false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(trimmed);
};

const jsonResponse = (data: Record<string, unknown>, status = 200): Response => {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store'
    }
  });
};

export const onRequest = async ({
  request,
  env
}: {
  request: Request;
  env: Env;
}): Promise<Response> => {
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', {
      status: 405,
      headers: { Allow: 'POST' }
    });
  }

  if (!env.notaly) {
    return jsonResponse({ error: 'D1 binding "notaly" is not configured.' }, 500);
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return jsonResponse({ error: 'Invalid JSON payload.' }, 400);
  }

  const body = payload as { email?: unknown; source?: unknown; locale?: unknown };
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  if (!isValidEmail(email)) {
    return jsonResponse({ error: 'Invalid email.' }, 400);
  }

  const source = typeof body.source === 'string' && body.source.trim().length > 0
    ? body.source.trim()
    : null;
  const locale = typeof body.locale === 'string' && body.locale.trim().length > 0
    ? body.locale.trim()
    : null;
  const createdAt = toKstTimestamp();

  const result = await env.notaly
    .prepare(
      'INSERT OR IGNORE INTO waitlist (email, created_at, source, locale) VALUES (?1, ?2, ?3, ?4)'
    )
    .bind(email, createdAt, source, locale)
    .run();

  const inserted = (result.meta?.changes ?? 0) > 0;
  return jsonResponse({ status: inserted ? 'created' : 'exists' }, inserted ? 201 : 200);
};
