# Portfolio : publier sur GitHub, apprendre après

Périmètre validé le 30/10/2026 : GitHub uniquement. Make/n8n, Hugging Face, Medium et les déploiements Azure ne sont plus des cibles de la tâche programmée. Leurs contenus éventuels restent des sources GitHub. Aucun compte externe n'est supprimé.

## Fonctionnement

À 08:30 Europe/Paris, la tâche Codex crée les incréments, teste, publie les sources, relit les commits et attend la réussite CI sur les mêmes SHA. Après vérification seulement, elle envoie un compte rendu pédagogique quotidien au destinataire privé autorisé. Aucune autorisation pour d'autres destinataires.

La création quotidienne est réalisée par la tâche Codex; GitHub Actions exécute les tests et audite les preuves. Actions n'est pas configuré comme générateur de code. La planification locale dépend de Codex et de ses connexions; aucun modèle ni abonnement API payant n'est installé dans Actions.

## Cycle et productions

Cycle démarré le 29/10/2026, J21 le 18/11, cycle 2 le 19/11. Deux nouveaux MVP distincts par cycle : web dans ai-business-platform et mobile dans mobile-starter-app, conservés sous products/cycle-NNN/. Les idées du premier cycle sont modifiables et ne sont pas des produits déjà livrés.

J1–3 : problème, parcours et squelette exécutable. J4–7 : fonction métier, API et persistance. J8–12 : authentification, isolation et intégrations. J13–16 : tests, sécurité, Docker et observabilité. J17–20 : démo reproductible et corrections. J21 : release testable, documentation et retour arrière. Aucun déploiement payant ni store sans accord spécifique.

Autres productions quotidiennes : mini-lab et infrastructure dans cloud-native-labs, agent évalué dans ai-agents, automatisation exécutable dans business-automation, article français dans ai-business-articles. Articles sur les entrepreneurs opérant avec agents IA : cas réels avec sources primaires datées ou entreprises explicitement fictives, chiffres annoncés comme hypothèses. Aucune publication Medium ou HF.

## Livraison et preuves

1. Lire les instructions et l'existant de chaque dépôt; conserver les modifications utilisateur.
2. Produire un incrément utile, sans remplissage pour satisfaire une cadence.
3. Tester avant publication et contrôler l'absence de secrets/données client. Aucun secret pour du code non fiable.
4. Publier et relire commit et run CI réussi sur le même SHA. Une PR est une proposition, un commit prouve des sources publiées, pas un SaaS hébergé.
5. Enregistrer receipts/YYYY-MM-DD-LANE.json : lane, date, platform=github, sourceSha (40 caractères), externalId, url du commit, quality {passed:true,url du run /actions/runs/ID}, summary, lesson, risk=routine. Leçon : problème, architecture, fichiers importants, fonctionnement, tests, lancement et limites. Une seule entrée par date/parcours. Reprendre sans dupliquer.
6. Exécuter l'audit central : relecture des commits et de la CI. Un audit vert ne signifie pas que tout est livré; il nomme les manques.
7. reports/DATE.email.json prépare un mail sans destinataire public et indique not-sent. Le connecteur Gmail doit réellement envoyer le message; conserver son identifiant dans un journal local privé hors Git. Avant de réessayer, rechercher l'envoi existant pour cette date et ces SHA. Un résultat d'envoi incertain doit être vérifié avant renvoi. L'échec du mail ne doit pas republier le code.

## Compte rendu par mail

Objet : Publication GitHub effectuée — date — sujets livrés.
Contenu : réalisations, commits, tests, explication en français de chaque sujet, architecture, fonctionnement, comment essayer, compétences apprises, limites et éléments encore manquants. Un seul mail quotidien regroupé après publications vérifiées. Si rien n'a été publié, ne pas envoyer de succès; un éventuel mail de blocage doit dire « Publication bloquée ».

Le destinataire est uniquement dans l'instruction privée de l'automatisation. Installer/connecter Gmail avant envoi. Aucun mot de passe ni secret dans Git, le chat ou les pièces jointes. Une notification GitHub ou une tâche active ne prouve pas l'envoi du mail.

## Connexions au 30/10/2026

La CLI gh de kadrianis est désormais valide avec repo et workflow; les six dépôts sont accessibles ADMIN, dont mobile-starter-app. Si le plugin GitHub refuse encore en 403, utiliser cette CLI. Ne pas afficher les jetons. GITHUB_TOKEN Actions est limité au dépôt courant; les autres dépôts sont publiés via Codex/gh autorisé. Aucun jeton personnel dans Actions.

Gmail : compte destinataire connecté et premier mail réellement envoyé le 30/10/2026 après relecture du commit et de son run CI réussi. L'identifiant Gmail et le destinataire restent dans .local/mail-ledger, hors Git; consulter ce journal avant tout renvoi. Le fichier public reports/DATE.email.json reste une préparation, son champ not-sent ne doit pas écraser le journal privé d'envoi. Make reste configuré mais hors périmètre, ne plus tenter sa connexion. Azure personnel est connecté séparément; aucun déploiement demandé, FNC professionnel exclu.

## Validation locale

Node 22+ : npm test puis npm run audit avec accès réseau. Aucun paquet tiers. Secrets et caches exclus de l'archive. Approbation spécifique avant destruction, coûts, données personnelles/client, contenu sensible ou communication à un destinataire autre que celui autorisé.
