# Portfolio : publier sur GitHub, apprendre après

## Exigence pédagogique et livraison finale

Le [programme sur 21 jours](PROGRAMME-21-JOURS.md) fait partie des instructions obligatoires. Fournir chaque jour exercice, correction complète, choix/alternatives d'architecture et de base de données, tests unitaires/intégration/bout en bout, schémas, publication, exploitation et vérification des acquis. Le mail doit être détaillé et structuré; joindre les dossiers complets pour les fichiers volumineux. Les volets GitHub sont réalisés et documentés avant annonce de publication.

Azure est ajouté aux publications manuelles : l'usine publie le code du lab cloud sur GitHub et envoie la solution, les commandes, les coûts, les contrôles et le nettoyage; l'utilisateur déploie lui-même sur son abonnement personnel déjà vérifié. Au jour 21, préparer mise en ligne web et distribution mobile App Store/Google Play; anticiper comptes, signature, tests et revue dès J1. Aucune garantie d'approbation store à J21, aucun achat ni déploiement payant par l'usine. Les choix microservices/Kubernetes doivent être pratiqués et expliqués, leur nécessité dans chaque produit justifiée.

Périmètre corrigé le 30/10/2026 : publication automatique sur GitHub pour web, mobile, mini-labs et infrastructure. Pour Make, Hugging Face et Medium : préparer le livrable complet, tester ce qui est testable et l'envoyer par mail; l'utilisateur publie lui-même sur ces plateformes. Aucun nouveau push automatique de ces trois parcours n'est demandé. Aucun compte externe n'est supprimé et aucun déploiement Azure automatique n'est autorisé.

## Fonctionnement

Une seule tâche Codex active, à 08:30 Europe/Paris, contient sept volets quotidiens. Pour GitHub : créer, tester, publier, relire commit et CI du même SHA, puis expliquer par mail. Pour Make/Hugging Face/Medium : préparer, tester localement, fournir les fichiers et étapes de publication dans le mail. Ne jamais dire « publié » pour une préparation manuelle. L'envoi des livrables manuels ne dépend pas du succès des pistes GitHub. Destinataire privé autorisé uniquement.

La création quotidienne est réalisée par la tâche Codex; GitHub Actions exécute les tests et audite les preuves. Actions n'est pas configuré comme générateur de code. La planification locale dépend de Codex et de ses connexions; aucun modèle ni abonnement API payant n'est installé dans Actions.

## Cycle et productions

Cycle démarré le 29/10/2026, J21 le 18/11, cycle 2 le 19/11. Deux nouveaux MVP distincts par cycle : web dans ai-business-platform et mobile dans mobile-starter-app, conservés sous products/cycle-NNN/. Les idées du premier cycle sont modifiables et ne sont pas des produits déjà livrés.

J1–3 : problème, parcours et squelette exécutable. J4–7 : fonction métier, API et persistance. J8–12 : authentification, isolation et intégrations. J13–16 : tests, sécurité, Docker et observabilité. J17–20 : démo reproductible et corrections. J21 : release testable, documentation et retour arrière. Aucun déploiement payant ni store sans accord spécifique.

Autres productions quotidiennes : mini-lab et infrastructure publiés dans cloud-native-labs; agent évalué et paquet prêt à publier manuellement sur Hugging Face; scénario Make et guide; article Medium complet en français. Les paquets manuels sont conservés localement sous .local/manual-deliveries/DATE/ puis joints aux mails ou intégrés à leur corps, sans secrets. Les dépôts ai-agents et ai-business-articles restent comme historique mais ne sont plus des cibles automatiques pour ces livrables. Le dépôt business-automation héberge toujours l'orchestrateur GitHub lui-même, distinct des scénarios Make manuels. Les champs target=github de ces trois parcours conservent la compatibilité des anciens reçus; publicationMode=manual-email prévaut pour les nouvelles productions. Articles : entrepreneurs opérant avec agents IA, cas réels sourcés ou entreprises explicitement fictives et hypothèses chiffrées.

## Livraison et preuves

1. Lire les instructions et l'existant de chaque dépôt; conserver les modifications utilisateur.
2. Produire un incrément utile, sans remplissage pour satisfaire une cadence.
3. Tester avant publication et contrôler l'absence de secrets/données client. Aucun secret pour du code non fiable.
4. Publier et relire commit et run CI réussi sur le même SHA. Une PR est une proposition, un commit prouve des sources publiées, pas un SaaS hébergé.
5. Pour les publications GitHub, enregistrer receipts/YYYY-MM-DD-LANE.json : lane, date, platform=github, sourceSha (40 caractères), externalId, url du commit, quality {passed:true,url du run /actions/runs/ID}, summary, lesson, risk=routine. Leçon : problème, architecture, fonctionnement, tests, lancement et limites. Une entrée par date/parcours. Pour les paquets manuels, conserver un manifeste local avec chemins des fichiers, résultats de tests, sujet et statut ready-for-user-publication, jamais un faux reçu publié. En Make, ne pas présenter comme validé dans Make un blueprint seulement relu localement.
6. Exécuter l'audit central : relecture des commits et de la CI. Un audit vert ne signifie pas que tout est livré; il nomme les manques.
7. reports/DATE.email.json prépare un mail sans destinataire public et indique not-sent. Le connecteur Gmail doit réellement envoyer le message; conserver son identifiant dans un journal local privé hors Git. Avant de réessayer, rechercher l'envoi existant pour cette date et ces SHA. Un résultat d'envoi incertain doit être vérifié avant renvoi. L'échec du mail ne doit pas republier le code.

## Compte rendu par mail

Un seul mail quotidien regroupé. Objet « Portfolio — date — publications GitHub et contenus à publier » si les deux catégories existent; « Contenus prêts à publier manuellement » si seuls des paquets manuels sont prêts. Deux sections explicites : « Publié sur GitHub » avec commits et CI vérifiés; « À publier toi-même » avec fichiers complets, explications et étapes Make/Hugging Face/Medium. Expliquer architecture, fonctionnement, lancement, compétences et limites; nommer les manques. Si rien n'est prêt, ne pas annoncer de succès; tout mail de blocage doit le dire. Un paquet prêt n'est pas une publication externe et l'envoi d'un mail ne prouve pas que l'utilisateur a publié.

Le destinataire est uniquement dans l'instruction privée de l'automatisation. Installer/connecter Gmail avant envoi. Aucun mot de passe ni secret dans Git, le chat ou les pièces jointes. Une notification GitHub ou une tâche active ne prouve pas l'envoi du mail.

## Connexions au 30/10/2026

La CLI gh de kadrianis est désormais valide avec repo et workflow; les six dépôts sont accessibles ADMIN, dont mobile-starter-app. Si le plugin GitHub refuse encore en 403, utiliser cette CLI. Ne pas afficher les jetons. GITHUB_TOKEN Actions est limité au dépôt courant; les autres dépôts sont publiés via Codex/gh autorisé. Aucun jeton personnel dans Actions.

Gmail : connecté et premier mail envoyé le 30/10/2026 après relecture du commit et de son run CI réussi. Identifiant et destinataire dans .local/mail-ledger, hors Git; consulter avant renvoi. reports/DATE.email.json est la préparation GitHub, à compléter avec les paquets manuels privés avant envoi. Son not-sent n'écrase pas le journal privé. Make/Hugging Face/Medium ne nécessitent plus de connexion automatisée : l'utilisateur publie. Azure personnel connecté séparément, sans déploiement demandé; FNC exclu. « Moi » correspond à l'affichage Gmail d'un mail envoyé depuis et vers le même compte; aucun autre expéditeur n'est autorisé/configuré.

## Validation locale

Node 22+ : npm test puis npm run audit avec accès réseau. Aucun paquet tiers. Secrets et caches exclus de l'archive. Approbation spécifique avant destruction, coûts, données personnelles/client, contenu sensible ou communication à un destinataire autre que celui autorisé.
