// A bounded, deterministic tool-using baseline; no language model is invoked.
const articles = [
  { id: 'KB-ACCESS', pattern: /\b(connexion|password|passe|login)\b/u, queue: 'access', answer: 'Utilisez la procédure de réinitialisation depuis la page de connexion. Ne transmettez jamais votre mot de passe.' },
  { id: 'KB-INVOICE', pattern: /\b(facture|invoice|facturation)\b/u, queue: 'billing', answer: 'Consultez la rubrique Facturation de votre espace. Une contestation nécessite une revue humaine.' },
];
const normalize = text => text.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase();
export function lookupKnowledge(text) {
  return articles.filter(article => article.pattern.test(normalize(text)));
}
export function triage(text) {
  if (typeof text !== 'string' || !text.trim() || text.length > 4000) throw new TypeError('text must contain 1..4000 characters');
  const normalized = normalize(text);
  const trace = ['validate'];
  // User text never changes policy, tool permissions or executable instructions.
  if (/\b(ignore|ignorez|instructions|prompt|secret|token|systeme|system)\b/u.test(normalized)) {
    return { queue: 'review', status: 'needs_review', sources: [], draft: null, reason: 'policy_sensitive', trace: [...trace, 'policy_guard', 'abstain'] };
  }
  const matches = lookupKnowledge(text);
  trace.push('lookup_knowledge');
  if (matches.length !== 1) return { queue: 'review', status: 'needs_review', sources: [], draft: null, reason: matches.length ? 'ambiguous' : 'no_evidence', trace: [...trace, 'abstain'] };
  const article = matches[0];
  return { queue: article.queue, status: 'draft', sources: [article.id], draft: article.answer, reason: 'single_match', trace: [...trace, 'route', 'draft_for_human'] };
}
