import { createServer } from 'node:http';
import { timingSafeEqual } from 'node:crypto';
import { pathToFileURL } from 'node:url';
import { mkdirSync } from 'node:fs';
import { IntakeStore } from './automations/intake/store.mjs';
export function createApp({ token, store }) {
  if (typeof token !== 'string' || Buffer.byteLength(token) < 32) throw new Error('API_TOKEN must be at least 32 bytes');
  const expected = Buffer.from(`Bearer ${token}`);
  const server = createServer(async (req, res) => {
    const send = (status, body) => { res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' }); res.end(JSON.stringify(body)); };
    if (req.method === 'GET' && (req.url === '/health' || req.url === '/')) return send(200, { service: 'support-triage', status: 'ok', mode: 'deterministic', endpoint: 'POST /intake' });
    if (req.method !== 'POST' || req.url !== '/intake') return send(404, { error: 'Not found' });
    const actual = Buffer.from(req.headers.authorization ?? '');
    if (actual.length !== expected.length || !timingSafeEqual(actual, expected)) return send(401, { error: 'Unauthorized' });
    if (req.headers['content-type']?.split(';')[0].trim().toLowerCase() !== 'application/json') return send(415, { error: 'Expected application/json' });
    try {
      const chunks = []; let size = 0;
      for await (const chunk of req) {
        size += chunk.length;
        if (size > 16384) { send(413, { error: 'Payload too large' }); req.resume(); return; }
        chunks.push(chunk);
      }
      let input;
      try { input = JSON.parse(new TextDecoder('utf-8', { fatal: true }).decode(Buffer.concat(chunks))); } catch { return send(400, { error: 'Invalid JSON or UTF-8' }); }
      const output = store.accept(input);
      send(output.duplicate ? 200 : 201, output);
    } catch (error) { send(error.status ?? 500, { error: error.status ? error.message : 'Internal error' }); }
  });
  server.requestTimeout = 10000; server.headersTimeout = 10000;
  return server;
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const token = process.env.API_TOKEN;
  if (!token || Buffer.byteLength(token) < 32) throw new Error('Set API_TOKEN (>=32 bytes)');
  const directory = process.env.DATA_DIR ?? '.local/data';
  mkdirSync(directory, { recursive: true });
  const store = new IntakeStore(`${directory}/tickets.sqlite`);
  const server = createApp({ token, store });
  server.listen(Number(process.env.PORT ?? 7860), '0.0.0.0', () => console.log('support-triage listening'));
  for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, () => server.close(() => { store.close(); process.exit(0); }));
}
