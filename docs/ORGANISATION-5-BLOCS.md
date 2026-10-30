# Organisation validée — cinq blocs quotidiens

Validée par l'utilisateur le 30 octobre 2026. Cette version remplace les présentations précédentes à trois labs plus un article. Cinq tâches quotidiennes à 08:30 Europe/Paris exécutent chacune un bloc dans un nouveau chat; voir [Exécutions séparées](EXECUTIONS-SEPAREES.md). Un seul mail détaillé commun est conservé après travail réel. Les trois premiers blocs produisent du code GitHub; les deux derniers sont des dossiers privés par mail, sans dépôt supplémentaire.

| Bloc | Objectif | Production et destination |
|---|---|---|
| Product Lab | Vrais SaaS web et mobile commercialisables | Incréments testés/documentés dans product-lab-web et product-lab-mobile; deux nouveaux MVP distincts par cycle de 21 jours |
| Engineering Lab | Architecture, cloud, infrastructure, sécurité et IA par mini-projets | Code et preuves dans engineering-lab; exercice corrigé et guide Azure, déploiement par utilisateur |
| AI Agency Lab | Portfolio technique d'agents et d'automatisations métier | Code, tests, démos et docs dans ai-agency-lab; fichiers et guide HF/Make, activation par utilisateur |
| Amazon FBA Lab | Apprendre et préparer une activité Amazon en France, aux États-Unis et au Canada | Dossier privé de formation et étude de marché; aucune fiche vendeur, commande ou dépense automatique |
| Personal Branding & AI Business Lab | Média, positionnement et construction progressive de son agence IA et de ses produits | Un article Medium prêt à publier et un dossier stratégique privé quotidien |

## Séparer réalisation technique et construction d'entreprise

AI Agency Lab est le portfolio technique : construire une capacité d'agent et une automatisation utiles, les tester, les expliquer, montrer ce qui fonctionne réellement. Il ne remplace pas le cinquième bloc.

Personal Branding & AI Business Lab construit l'entreprise qui vendra ces capacités : qui servir, quel problème résoudre, quelle offre proposer, comment trouver des clients, quel prix envisager, quels produits internes développer et vendre, quels coûts supporter, quels accompagnements sont accessibles. Les deux blocs peuvent réutiliser le même cas métier sans recopier le même cours ou produire deux business plans identiques.

## Amazon FBA Lab : contenu quotidien

Progression pratique : comprendre Amazon/FBA, étudier un marché, identifier et comparer des produits candidats, analyser concurrence et différenciation, estimer approvisionnement/transport/stockage/frais Amazon/publicité/retours et scénarios de marge, définir une validation limitée avant engagement. Comparer France, USA et Canada sur des données datées.

Une étude doit préciser la provenance et la date des chiffres, ce qui est observé et ce qui est supposé, la saisonnalité, la sensibilité aux coûts et les limites. Quand des données Amazon ou outils payants sont inaccessibles, le dire et fournir les données à relever; ne pas inventer volumes de ventes, rentabilité ou produit gagnant. La veille est intégrée à la progression plutôt qu'un second mail redondant. Avant toute recommandation réglementaire/fiscale ou de produit, consulter les sources officielles actuelles adaptées au pays.

Livrable : exercice ou objectif du jour, recherche réelle quand accessible, correction/analyse détaillée, comparaison de scénarios, grille de décision et prochaine étape. Aucun achat, sourcing contacté, création de compte vendeur, mise en vente ou revenu garanti.

## Personal Branding & AI Business Lab : deux livrables chaque jour

### 1. Un article Medium complet

Commencer par un article quotidien long et structuré en deux parties cohérentes :

- Étude d'une entreprise réelle, idéalement une ou deux personnes utilisant fortement des agents IA. Vérifier l'effectif humain, ce que les agents font réellement, le modèle économique, l'acquisition, les résultats documentés et les limites. Employer « déclaré par le fondateur » si les données ne sont pas indépendamment vérifiées. Ne pas transformer des outils d'assistance en salariés autonomes ni inventer des revenus. Si aucun cas ne vérifie tous les critères, annoncer le manque plutôt que forcer le récit.
- Entreprise imaginée inspirée des enseignements, avec business model et business plan complet : problème, cible, marché/concurrents, proposition de valeur, acquisition, prix, processus et rôles humains/agents, architecture opérationnelle, coûts, hypothèses de revenus/trésorerie, seuil de rentabilité, scénarios prudent/central/favorable, risques, plan de validation et étapes de lancement. Les hypothèses et la fiction doivent être visibles. Ne pas présenter une projection comme une réussite réelle.

Fournir titre, introduction, article final, résumé, tags, sources datées et éventuelles illustrations proposées. L'utilisateur publie manuellement sur Medium. Ne pas découper automatiquement en deux articles : un second n'est pertinent que si le sujet exige deux textes autonomes et si la cadence est revalidée. Aucun dépôt d'articles sur GitHub.

### 2. Un dossier stratégique privé pour son agence

Développer progressivement une agence qui accompagne les professionnels dans l'automatisation et vend aussi des produits internes : positionnement, segments clients, découverte des besoins, offres et livrables, preuves de valeur, tarification hypothétique, prospection/acquisition, ventes, contrats/processus à vérifier, exécution, support et économie de l'activité.

Analyser des entreprises comparables et les opportunités actuelles d'accompagnement : incubateurs, accélérateurs, réseaux, formations ou dispositifs pertinents, avec priorité à la France et exemples internationaux. Pour chaque opportunité citée, vérifier les sources officielles, conditions d'accès, lieu, coût et date quand disponibles; ne pas annoncer une éligibilité ou un financement sans vérification. Fournir chaque jour une action de réflexion concrète et une décision à construire, sans promettre de clients ni de chiffre d'affaires.

Le dossier peut exploiter le cas de l'article mais reste utile à la construction personnelle de l'agence; il n'est pas à publier automatiquement. Aucun contact commercial envoyé sans demande spécifique.

## Exigence commune de qualité

Pour chaque bloc : expliquer problème, exercice, solution, fonctionnement, choix et alternatives, résultats effectivement vérifiés, limites et suite. Les labs incluent unités/intégration/bout en bout adaptés, architecture et base de données justifiées, sécurité et exploitation. Microservices et Kubernetes sont pratiqués en labs et appliqués au produit quand justifiés. Aucun mail succinct de remplissage.

Préparer les dossiers privés sous .local/manual-deliveries/DATE/{azure,huggingface,make,amazon,branding,medium}, joindre les fichiers réels au mail ou intégrer le texte complet; un chemin local n'est pas une pièce jointe accessible. Ne pas publier ces études privées sur GitHub. Les articles et études déjà préparés ne sont pas des publications externes.

## GitHub, preuves et renommages

Renommages attendus : ai-business-platform → product-lab-web; mobile-starter-app → product-lab-mobile; cloud-native-labs → engineering-lab; business-automation → ai-agency-lab. Les historiques sont conservés. Les nouveaux reçus utilisent les noms canoniques. Les anciens reçus gardent leurs SHA et URLs originales; la table repoAliases permet de vérifier les preuves après renommage sans les réinventer.

Ne pas recréer les dépôts supprimés ni les anciens noms. L'orchestrateur réside dans ai-agency-lab et utilise les quatre dépôts actifs. Le changement de noms ou de programme ne constitue pas une livraison de SaaS. À J21, objectif de release testable et de préparation de mise en ligne web/distribution mobile, sans garantie d'approbation store.

## Programmation, doublons et mails

Cinq tâches locales autonomes exécutent ces cinq blocs dans des chats séparés. L'ancienne tâche regroupée est supprimée pour éviter les doublons. Les anciennes tâches externes T01–T25 montrées en captures n'ont pas été désactivées par cette configuration : ne pas prétendre le contraire. Amazon FBA Lab recouvre désormais aussi les tâches Amazon T05/T18; le cinquième bloc recouvre la partie stratégie d'agence de T13/T14, à comparer avant suspension. Aucun nettoyage automatique des tâches externes.

Destinataire et expéditeur restent dans l'instruction privée de la tâche. Vérifier le compte expéditeur voulu avant envoi, respecter le journal anti-doublons et conserver les messages en attente si l'expéditeur n'est pas connecté. Cela ne doit pas bloquer le travail de préparation ni les publications GitHub. Aucun compte vendeur, coût cloud, contrat, déploiement externe ou message à un tiers automatiquement autorisé par ce programme.
