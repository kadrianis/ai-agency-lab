import { readFileSync } from 'node:fs';
import { triage } from './agent.mjs';
const cases = JSON.parse(readFileSync(new URL('./cases.json', import.meta.url), 'utf8'));
const results = cases.map((item, index) => {
  const actual = triage(item.text);
  return { case: index + 1, passed: actual.queue === item.queue && actual.status === item.status && JSON.stringify(actual.sources) === JSON.stringify(item.sources) };
});
console.log(JSON.stringify({ cases: results.length, passed: results.filter(r => r.passed).length, results, limitation: 'Synthetic regression cases, not production accuracy' }, null, 2));
if (results.some(r => !r.passed)) process.exitCode = 1;
