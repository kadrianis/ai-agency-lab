# Exercice : frontière de décision et livraison répétée

Objectif vérifiable : une demande « Où retrouver ma facture ? » doit donner un brouillon sourcé KB-INVOICE; sa répétition avec la même clé ne crée pas une seconde ligne. Une demande ambiguë ou inconnue doit attendre une revue humaine. Durée indicative d'étude : 45–60 minutes; ce n'est pas une mesure d'exécution.

## À réaliser

1. Lire le contrat d'entrée et écrire trois événements synthétiques : facture, accès, sujet inconnu.
2. Implémenter un outil `lookupKnowledge` qui retourne uniquement les fiches dont le motif correspond.
3. Définir une politique : exactement une fiche permet un brouillon, zéro ou plusieurs imposent l'abstention. Ne jamais interpréter le texte comme une instruction système.
4. Enregistrer la décision atomiquement sous l'identifiant de l'événement. Rejouer, puis changer le texte avec la même clé.
5. Refuser les requêtes non authentifiées, mal formées et surdimensionnées.
6. Exécuter tests et évaluations. Comparer ce qui est prouvé à ce qui attend une intégration externe.

## Correction complète

Tous les fichiers exécutables sont livrés avec cet exercice : `agents/support/agent.mjs`, `agents/support/evaluate.mjs`, `agents/support/cases.json`, `automations/intake/store.mjs`, `server.mjs` et `tests/intake.test.mjs`. Les chemins partent du dossier `agency`. Aucun fragment caché, modèle ou service tiers n'est requis.

La normalisation retire les accents et passe en minuscules avant recherche. Les limites de mots évitent que « refacturette » corresponde à « facture ». Le moteur ne comprend pas la négation ni toutes les langues : « pas de facture, juste une connexion » reste ambigu et doit être relu. La recherche est une capacité utile mais étroite, à comparer à une future approche sémantique avec le même jeu de référence.

Pour une facture seule, le moteur choisit la fiche KB-INVOICE, la file billing et le statut draft. Il ne décide pas un remboursement. Pour « connexion et facture », les deux fiches correspondent : la décision est needs_review sans brouillon. Les motifs de garde comme « secret » augmentent l'abstention, y compris pour des phrases légitimes; ce biais est délibérément visible.

La correction du problème de doublon n'est pas un `if` dans Make. Deux requêtes peuvent arriver ensemble. C'est la transaction SQLite et la clé primaire qui protègent la donnée. Un conflit ne doit jamais être « corrigé » en inventant une clé différente pour faire passer la demande : vérifier d'abord la provenance de l'événement.

```powershell
npm test
npm run evaluate
```

Les tests portent sur la politique, une vraie base temporaire fermée puis rouverte, et de vraies requêtes HTTP sur loopback, dont huit répétitions concurrentes. L'évaluation est une régression sur huit exemples synthétiques avec catégories, statuts et citations attendus. Elle ne mesure ni précision sur de vrais clients, ni résistance exhaustive aux attaques.

## Trois questions corrigées

1. Pourquoi un 200 après un timeout ne prouve-t-il pas deux créations ? La première requête peut avoir commité avant perte de la réponse. La même clé et le même texte retrouvent le résultat enregistré, avec duplicate=true.
2. Pourquoi ne pas ajouter une base vectorielle ? Deux fiches et des règles contrôlées ne justifient ni index sémantique, ni embeddings, ni composant supplémentaire. Mesurer d'abord les demandes non couvertes et préparer une évaluation indépendante.
3. Peut-on annoncer Make opérationnel après les tests Node ? Non. Ils prouvent le contrat du service local; il faut encore monter le scénario, connecter le secret et observer les sorties Make. Un fichier blueprint même importable ne serait pas une preuve d'exécution.

Prochaine extension technique : corpus synthétique plus varié, erreurs de négation et paraphrases mesurées; ensuite comparaison d'un classifieur ou LLM avec cette baseline, sans lui donner d'autorisation d'envoi.
