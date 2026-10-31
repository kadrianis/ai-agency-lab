# Make — recette manuelle de réception support

Livré : service métier testé et recette de montage. Aucun blueprint exporté depuis Make, aucune importation, connexion, exécution ni activation Make vérifiée. Il est plus honnête de fournir une recette précise que de fabriquer des identifiants de modules d'un export non testé.

## Modules à monter, scénario désactivé

1. **Webhooks / Custom webhook** : créer un webhook de test. Schéma contenant seulement `event_id` (texte) et `text` (texte). Protéger l'URL et les options d'authentification disponibles; ne transmettre aucun vrai ticket client.
2. **HTTP / Make a request** : POST vers l'URL HTTPS réelle du service suivie de `/intake`. Header Authorization = Bearer puis le secret conservé dans une connexion protégée si disponible; sinon paramétrer dans l'espace privé et exclure le secret de tout export. Content-Type = application/json. Utiliser le constructeur JSON du module, mapper event_id et text, ne pas concaténer du JSON à la main. Activer le parsing de la réponse. Timeout borné (10 secondes si l'interface le permet).
3. **Webhooks / Webhook response** : pour un résultat HTTP 2xx, réponse JSON contenant le résultat parsé du module HTTP, Content-Type application/json. Mapper le code 200 ou 201 réellement reçu; ne pas annoncer 201 pour un replay.

La réponse au webhook ne déclenche ni email, ni CRM, ni paiement. Pour l'exercice, elle affiche seulement la décision. Garder les erreurs HTTP visibles dans l'historique Make; ne pas les transformer en succès. Selon la version du module, les non-2xx peuvent lever une erreur : configurer une branche d'erreur qui conserve le code et le diagnostic, sans marquer le bundle comme traité avec succès.

## Recette et preuves à relever

Utiliser `sample.json`, un identifiant stable de l'événement source (pas l'heure d'exécution Make). L'endpoint Make est une URL réellement créée par l'utilisateur; ne pas remplacer par un faux lien.

| Essai | Attendu dans module HTTP et réponse finale |
|---|---|
| Premier sample | 201, duplicate=false, queue=billing, KB-INVOICE |
| Sample répété | 200, duplicate=true, même result |
| Même event_id, autre texte | 409 visible, pas d'écrasement |
| Texte inconnu, nouvelle clé | 201, needs_review, draft=null |
| Mauvais secret API | 401 visible; ne pas activer |
| Guillemets et accents dans text | JSON valide et sortie décodable |

Relever pour chaque essai l'identifiant d'exécution Make, code, sortie redigée, et vérifier la base côté service. Les webhooks instantanés sont parallèles par défaut selon la documentation Make. L'option Process data in order simplifie une démo mais ne remplace pas la transaction du service. Si vous ajoutez un effet externe derrière, duplicate=false seul ne garantit pas une livraison exactement une fois : utiliser une outbox et déduplication de l'effet.

Timeout ou 5xx : relancer au maximum deux fois après attente 1 puis 2 secondes avec la même clé, en contrôlant la politique automatique de reprise de Make pour éviter les tentatives cumulées. 400/401/409/413/415 : intervention humaine. Si vous ne configurez pas cette reprise, le scénario n'a aucune reprise garantie.

## Coûts, mise en route et retour arrière

Au 31/10/2026, la page Make consultée utilise les crédits comme unité; leur consommation dépend des modules/actions et des reprises. Aucun tarif mensuel chiffré n'est retenu car la grille complète n'était pas accessible dans le contenu récupéré. Relever votre plan, solde et consommation réelle avant activation. Aucun abonnement ou crédit acheté ici.

Après recette réussie et autorisation utilisateur, exporter le véritable blueprint, inspecter connexions, URL et secrets avant partage, puis seulement envisager activation. Un blueprint n'embarque pas nécessairement les connexions; voir documentation. Pour revenir en arrière : désactiver le scénario, préserver preuves privées, ne pas supprimer de données. Sources : https://help.make.com/webhooks , https://help.make.com/blueprints , https://www.make.com/pricing .
