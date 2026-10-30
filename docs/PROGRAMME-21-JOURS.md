# Programme de production et de compréhension — cycle de 21 jours

L'[organisation à cinq blocs](ORGANISATION-5-BLOCS.md) définit le périmètre actuel. Ce document détaille surtout les trois labs techniques. Les études Amazon et la construction de l'agence/média suivent leur progression quotidienne privée, sans être forcées dans chaque exercice technique.

## Répartition des publications

| Cible | Action de l'usine | Action utilisateur |
|---|---|---|
| GitHub | Publier code, tests, documentation, schémas et preuves après contrôle | Lire, lancer, expérimenter |
| Azure personnel | Publier le code d'infrastructure sur GitHub; envoyer exercice, correction et procédure de déploiement | Déployer, vérifier l'URL, puis nettoyer les ressources |
| Hugging Face | Publier les sources agent/évaluations dans AI Agency Lab sur GitHub; envoyer le paquet et guide Space | Créer/publier le Space, configurer les secrets nécessaires |
| Make | Publier les sources ou le blueprint validable et leurs tests dans AI Agency Lab sur GitHub; envoyer la solution et le guide | Monter/importer, tester et activer le scénario |
| Medium | Envoyer article final français, titre, résumé, tags et sources | Relire et publier l'article |

Ces cinq cibles principales ont des rôles différents : GitHub héberge les sources, Azure héberge les applications et ressources cloud. App Store/Google Play sont des canaux supplémentaires pour le mobile, à préparer dès le début du cycle. Leur validation et leurs comptes ne sont pas remplacés par un compte Azure ou GitHub.

Le compte Azure personnel a déjà été connecté et son abonnement vérifié pendant l'installation. Ne pas demander d'en recréer un. Aucun déploiement automatique, coût, achat, activation de compte développeur payant ou acceptation de contrat par cette tâche. Ne jamais utiliser FNC professionnel.

## Deux produits indépendants

Premier cycle proposé : AgentOps CRM web pour suivre les missions d'une agence IA, et FieldBrief mobile pour les comptes rendus de visites terrain. Inspecter les dépôts avant de retenir définitivement les noms et périmètres; préserver toute décision utilisateur existante. Réduire les fonctions au minimum permettant un parcours métier complet, plutôt que prétendre à un produit complet sans preuve.

Début du cycle existant : 29 octobre 2026; jour 21 : 18 novembre; cycle suivant : 19 novembre. Si des jours sont manqués, conserver les dates prévues et expliciter les manques; ne pas inventer de progression ni changer les dates sans accord.

## Programme quotidien

Chaque ligne prévoit un incrément web et mobile réellement exécutable, un dossier pédagogique, un mini-lab lié au concept et le paquet de publication pertinent. Les activités sont bornées : ne pas fabriquer de projets superficiels pour remplir le tableau ni prétendre qu'une étape prévue a déjà été livrée.

| Jour | Incrément / concept central | Preuve et livrable attendus |
|---|---|---|
| J1 | Problème métier, utilisateurs, parcours, critères d'acceptation; vérifier accès Azure et comptes stores | Périmètre écrit, schéma de contexte, backlog minimal; prérequis stores recensés et essais à démarrer tôt si requis |
| J2 | Squelettes frontend web, application mobile et backend; premier parcours vertical | Démarrage reproductible, endpoint santé, écran connecté à l'API, premier test fonctionnel |
| J3 | Architecture modulaire; frontières métier, API et responsabilités | Schémas de composants/séquence, première décision d'architecture, contrats d'entrée/sortie |
| J4 | Modèle relationnel, PostgreSQL ou alternative justifiée; migrations | Modèle de données, contraintes, migration aller et procédure de restauration, fixtures synthétiques |
| J5 | Fonction métier complète, transactions et erreurs | Création/lecture d'une mission web et d'un compte rendu mobile; tests métier et intégration DB |
| J6 | Authentification et autorisation, rôles et séparation des utilisateurs | Tests d'accès autorisé/interdit et d'absence de fuite entre utilisateurs; secrets hors code |
| J7 | Contrat API, validation, pagination et compatibilité mobile | OpenAPI, tests de contrat et d'erreurs; build de test mobile dès que comptes/signature le permettent |
| J8 | Docker multi-étapes, configuration et environnements | Images reproductibles, Compose local, compte non root, contrôle de santé; explication des limites |
| J9 | CI/CD GitHub : compilation, tests et artefacts | Run vert sur le SHA publié, artefacts de build; expliquer le traitement des branches et secrets |
| J10 | Tests unitaires, intégration réelle et parcours de bout en bout | Exemples distincts : règle métier, vraie DB jetable, parcours utilisateur; pas de tests qui recopient le code |
| J11 | Azure : première mise en ligne manuelle en environnement de test | Infrastructure déclarative, commande de prévisualisation, guide d'application, budget/coûts, vérification et nettoyage |
| J12 | Journaux, métriques, traces et diagnostic d'incident | Corrélation d'une requête, exemple d'échec, vérification que les logs ne contiennent pas de secrets |
| J13 | Microservices : frontières, extraction et cohérence des données | Lab comparant module local et service indépendant; contrat, timeout, retry borné, isolation de données et compromis |
| J14 | Asynchronisme, file de messages et idempotence | Lab doublon/reprise; événement, déduplication et scénario de panne; n'ajouter au SaaS que si utile |
| J15 | Kubernetes local : déploiement, service, configuration et probes | Manifests et guide pour cluster local; expliquer Pod/Deployment/Service, état désiré et redémarrage |
| J16 | Kubernetes/cloud : réseau, ingress, stockage et options d'exploitation | Lab readiness/liveness et ressource persistante; comparaison cluster local, AKS et hébergement conteneur plus simple; AKS manuel seulement si choisi |
| J17 | Fiabilité : sauvegarde/restauration et retour arrière | Exercice de restauration et résultat observé, test de rollback, limites de disponibilité explicites |
| J18 | Performance et sécurité applicative | Mesure reproductible, pagination/index justifiés, tests d'accès et dépendances; chiffres observés seulement |
| J19 | Stabilisation et préparation de distribution mobile | Build réellement obtenu, signature si accès disponible, captures, permissions, politique de confidentialité adaptée et dossier stores |
| J20 | Répétition de livraison web/mobile et revue des critères | Parcours utilisateur complet, checklist de release, testeur, documentation de support, incidents et rollback |
| J21 | Version MVP web et mobile, publication GitHub et mise en ligne/distribution guidées | Tag/release, sources/tests/docs, guide de déploiement web, build mobile testable et dossier de soumission stores; URL publique seulement après vérification |

J21 est un objectif de version livrable et de soumission lorsque les prérequis sont réunis. Ne pas promettre une approbation App Store/Google Play à date fixe. Si un compte, une signature, un test préalable, une revue ou un budget manque, identifier le manque exact et fournir une version testable appropriée quand possible; ne pas l'appeler publication publique. Vérifier les exigences officielles des stores au début du cycle et avant soumission, elles évoluent.

## Architecture moderne : comprendre les raisons

Pour chaque choix réel, écrire une décision courte dans docs/adr/ : contexte, contraintes, option retenue, alternatives, compromis, coût de fonctionnement et signal qui justifierait de changer. Les diagrammes doivent correspondre au code existant; une architecture cible non implémentée porte explicitement ce statut.

- Frontend web : évaluer React/TypeScript et les contraintes SEO, rendu, état, accessibilité et déploiement. Expliquer une alternative adaptée au problème.
- Mobile : évaluer React Native/Expo et les besoins natifs, hors ligne, navigation, permissions et distribution. Comparer application native ou PWA selon le produit.
- Backend : choisir une version .NET supportée après vérification; organiser les modules par responsabilité métier, contrats API et dépendances explicites.
- Base de données : justifier PostgreSQL ou une autre base par modèle relationnel/document, transactions, concurrence, index, volume, sauvegarde et coût. Pas de Redis, moteur vectoriel ou seconde base sans cas d'usage.
- Microservices : étudier et pratiquer extraction, communication, versionnement, indépendance de déploiement et cohérence éventuelle dans les labs. Un monolithe modulaire peut être le point de départ d'un MVP; l'extraction réelle dépend de frontières et de besoins démontrés, pas d'un mot à ajouter au README.
- Kubernetes : pratiquer localement, comparer avec un service conteneur managé. Expliquer scheduling, probes, ressources, réseau et données; ne pas imposer AKS payant ni appeler un Compose « Kubernetes ».
- Infrastructure : Bicep ou Terraform après choix expliqué; configuration par environnement, secrets dans le coffre adapté, identité et moindre privilège. Ne pas inclure d'identifiants personnels ou de ressources professionnelles.
- Observabilité : savoir suivre un incident avec logs/métriques/traces avant d'ajouter des tableaux de bord décoratifs.

Le programme couvre bien microservices, cloud et Kubernetes. Il distingue une compétence pratiquée en lab d'une dépendance indispensable au SaaS. Réduire le périmètre fonctionnel plutôt que sacrifier tests, documentation et honnêteté de publication.

## Format obligatoire de chaque dossier quotidien

Le mail doit être un vrai cours appliqué, structuré et substantiel, pas quelques lignes génériques. Il peut regrouper les sept volets mais chaque réalisation doit être expliquée. Les fichiers complets, corrections et guides sont joints aux livrables manuels; ne pas remplacer une pièce jointe par un chemin local inaccessible au lecteur.

1. Sujet, problème métier, place dans le cycle et objectif vérifiable.
2. Prérequis : logiciels/versions vérifiées, comptes nécessaires, temps indicatif et coûts éventuels clairement séparés.
3. Exercice concret : entrée, sortie, contraintes, données de test et critères de réussite. GitHub est déjà réalisé/publié par l'usine; les plateformes externes attendent l'action utilisateur.
4. Solution complète : fichiers nécessaires, code exécutable, commandes exactes, configuration sans secrets, résultat observé ou résultat attendu clairement distingués.
5. Fonctionnement expliqué étape par étape : chemin d'une requête, responsabilités, données et schéma de séquence/composants si utile.
6. Choix techniques et alternatives : pourquoi cette architecture, cette base, ces composants; ce qu'une autre solution apporterait, pourquoi elle est écartée maintenant, quand la réévaluer.
7. Tests : unité vs intégration vs bout en bout, cas nominal/erreurs/doublons/permissions pertinents, commandes, sorties réelles et liens CI pour le même commit. Indiquer honnêtement ce qui n'a pas pu être exécuté.
8. Publication : liens vérifiés GitHub, puis procédures séparées Azure/HF/Make/Medium pour l'utilisateur; contrôle après publication et retour arrière.
9. Exploitation : sécurité, limites, observation des erreurs, estimation de coûts datée quand pertinente, suppression/nettoyage sûr dans le périmètre de test.
10. Apprentissage : ce qu'il faut comprendre, trois questions de vérification avec correction et prochaine étape du cycle.

Le mail reprend les explications essentielles et annonce les pièces jointes exactes; un dossier joint contient les détails volumineux et le code complet. Ne jamais prétendre avoir testé ce qui est seulement décrit. Un paquet privé prêt n'est pas une publication externe. Un premier compte rendu de configuration ne compte pas comme livraison des deux MVP.

## Documents attendus dans chaque produit GitHub

README (problème, fonctions livrées et lancement), architecture et schémas, décisions docs/adr, modèle de données et migrations, API, guide des tests, configuration .env.example sans secret, conteneurs et CI, guide d'installation/déploiement, sécurité/limites, exploitation et rollback, changelog et preuves de release. Adapter les documents au stade réel du produit; pas de fausses captures ni d'URL de démonstration inventée.

## Références officielles de cadrage, consultées le 30/10/2026

- Architectures web et compromis : https://learn.microsoft.com/dotnet/architecture/modern-web-apps-azure/common-web-application-architectures
- Microservices et complexité : https://learn.microsoft.com/en-us/azure/architecture/microservices/
- Soumission Apple : https://developer.apple.com/help/app-store-connect/manage-submissions-to-app-review/submit-an-app/
- Tests Google Play : https://support.google.com/googleplay/android-developer/answer/9845334
- Budget Azure : https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/tutorial-acm-create-budgets

Ces références cadrent le programme; chaque exercice technique futur doit consulter la documentation officielle des versions utilisées. Un budget/une alerte ne constitue pas à lui seul un arrêt automatique de toutes les ressources.
