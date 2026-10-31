import { DatabaseSync } from 'node:sqlite';
import { createHash } from 'node:crypto';
import { triage } from '../../agents/support/agent.mjs';
export class IntakeError extends Error { constructor(message, status) { super(message); this.status = status; } }
export class IntakeStore {
  constructor(path = ':memory:') {
    this.db = new DatabaseSync(path);
    this.db.exec('PRAGMA busy_timeout=3000; CREATE TABLE IF NOT EXISTS tickets (event_id TEXT PRIMARY KEY, fingerprint TEXT NOT NULL, result TEXT NOT NULL) STRICT; PRAGMA user_version=1;');
  }
  accept(input) {
    if (!input || typeof input !== 'object' || Array.isArray(input) || Object.keys(input).sort().join(',') !== 'event_id,text' || typeof input.event_id !== 'string' || !/^[A-Za-z0-9_-]{1,80}$/.test(input.event_id)) throw new IntakeError('Expected event_id and text only', 400);
    let decision;
    try { decision = triage(input.text); } catch { throw new IntakeError('Invalid text', 400); }
    const fingerprint = createHash('sha256').update(input.text).digest('hex');
    this.db.exec('BEGIN IMMEDIATE');
    try {
      const existing = this.db.prepare('SELECT fingerprint,result FROM tickets WHERE event_id=?').get(input.event_id);
      if (existing && existing.fingerprint !== fingerprint) throw new IntakeError('Idempotency key reused with different text', 409);
      const result = existing ? JSON.parse(existing.result) : { event_id: input.event_id, ...decision };
      if (!existing) this.db.prepare('INSERT INTO tickets VALUES (?,?,?)').run(input.event_id, fingerprint, JSON.stringify(result));
      this.db.exec('COMMIT');
      return { duplicate: Boolean(existing), result };
    } catch (error) { this.db.exec('ROLLBACK'); throw error; }
  }
  close() { this.db.close(); }
}
