# Portfolio — cinq blocs, code publié et dossiers détaillés

Le [programme d'organisation à cinq blocs](ORGANISATION-5-BLOCS.md) validé le 30/10/2026 fait autorité pour le périmètre. Il complète le [programme technique de 21 jours](PROGRAMME-21-JOURS.md). Les présentations précédentes à quatre blocs sont remplacées.

## Tâche quotidienne

Une tâche locale active à 08:30 Europe/Paris regroupe : Product Lab, Engineering Lab, AI Agency Lab, Amazon FBA Lab, Personal Branding & AI Business Lab. La tâche Codex crée les réalisations; GitHub Actions exécute les contrôles et l'audit, pas un générateur de produits. L'exécution locale dépend de Codex et de ses connexions; aucune API de génération payante n'est configurée dans Actions.

## Sources GitHub

- product-lab-web et product-lab-mobile : deux produits distincts par cycle de 21 jours, conservés sous products/cycle-NNN.
- engineering-lab : mini-projets architecture/dev et labs cloud/infrastructure/sécurité/IA.
- ai-agency-lab : agents, automatisations et orchestrateur. Le travail commercial et la stratégie de création d'agence sont approfondis dans le cinquième bloc, sans doublonner le portfolio technique.

Les noms sont harmonisés avec les labs; l'ancien nom cloud-native-labs n'est plus la cible d'Engineering Lab. Les historiques sont conservés, pas de nouveaux dépôts vides ni de recréation des dépôts supprimés ai-agents/ai-business-articles.

Pour chaque incrément : lire les instructions et l'existant, préserver modifications utilisateur, construire un résultat utile, tester avant publication, vérifier absence de secrets/données client, publier code/tests/docs/schémas, puis relire commit et CI réussie sur le même SHA. Une PR n'est pas livraison; un commit ne prouve pas hébergement web, déploiement Azure ou mise en ligne d'un Space.

Chaque produit documente README/lancement, architecture et décisions/alternatives, modèle de données/migrations, API, unités/intégration/bout en bout, configuration sans secrets, CI/conteneurs, sécurité/limites, exploitation et rollback selon son stade réel. Kubernetes et microservices sont des compétences à pratiquer et expliquer; leur emploi dans le MVP doit être justifié.

## Preuves et audit

receipts/YYYY-MM-DD-LANE.json : lane, date, platform=github, sourceSha, externalId, url du commit, quality {passed:true,url du run}, summary, lesson et risk. Une entrée par date/parcours; un risque hors routine exige approbation explicite liée à la réalisation. Le moteur relit commit et CI du même SHA. repoAliases conserve la vérification des liens historiques après renommage. Ne pas changer un ancien SHA pour faire passer l'audit.

Les dossiers manuels ont un manifeste privé et des résultats locaux explicités; pas de faux reçu de publication. Un audit vert ne prouve ni toutes les livraisons ni un mail envoyé. reports/DATE.email.json est une préparation sans destinataire public; son not-sent n'écrase pas le journal privé d'envoi.

## Deux blocs privés par mail

Amazon FBA Lab : études France/USA/Canada et formation pratique, produits candidats, concurrence, sourcing, coûts complets, marge par scénarios et actualités utiles. Sources et hypothèses séparées, aucun « produit gagnant » garanti, aucune action vendeur ou dépense automatique.

Personal Branding & AI Business Lab : chaque jour (1) article Medium complet avec étude de cas réelle puis entreprise imaginée/business plan complet; (2) dossier privé de construction d'agence, offres aux professionnels, produits internes, positionnement, acquisition, tarification, entreprises comparables et accompagnements France/international. L'article est publié manuellement par l'utilisateur. Les opportunités et faits doivent être recherchés dans des sources actuelles, pas inventés.

L'article, les études Amazon et le dossier de stratégie ne vont pas sur GitHub. Ils sont conservés dans .local/manual-deliveries/DATE et transmis comme contenu complet ou véritables pièces jointes. Azure/HF/Make restent des déploiements manuels : envoyer sources, exercice, correction, commandes, coûts et nettoyage. L'abonnement Azure personnel a déjà été vérifié, FNC professionnel exclu.

## Compte rendu et expéditeur

Un mail quotidien regroupé en cinq sections détaillées, avec lien des publications réellement vérifiées, explication pédagogique, paquets à déployer et articles/études complets. S'il n'y a que des dossiers prêts, ne pas annoncer de publication GitHub. Donner limites et manques. Les paquets manuels prêts n'attendent pas une résolution de blocage GitHub.

Le destinataire et le choix d'expéditeur sont dans l'instruction privée, pas dans GitHub. Le compte expéditeur voulu doit être connecté/autorisé; aucun changement du champ From pour simuler une identité. Conserver les messages en attente tant que ce point bloque. Avant envoi, lire .local/mail-ledger et rechercher les messages sent pour éviter doublons. En cas d'incertitude d'envoi, vérifier avant renvoi. Échec du mail n'entraîne pas une nouvelle publication du code. Ne pas envoyer à d'autres destinataires.

Les anciennes tâches externes montrées en captures restent indépendantes; ce programme n'en supprime aucune. La comparaison des doublons est une recommandation à vérifier dans le système propriétaire, pas une preuve de suspension.

## Vérification et autorisations

Node 22+ : npm test, puis npm run audit avec accès GitHub. Aucun paquet tiers nécessaire. Les secrets, destinataires et caches restent hors Git et hors archive. Aucun coût, contrat, suppression, donnée client, soumission store, publication sensible ni communication externe supplémentaire sans autorisation spécifique. Les renommages explicitement validés par la demande de mise en cohérence sont documentés dans la configuration.
