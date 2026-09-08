/**
 * Dictionnaire de traduction bilingue (FR / EN)
 * Mohammed Smirès - Portfolio Architecte Systèmes & Spécialiste IA
 */
const translations = {
  fr: {
    // Meta / SEO
    page_title: "Mohammed Smirès | Architecte Systèmes & Spécialiste IA — MBSE & Computer Vision",
    meta_desc: "Portfolio professionnel de Mohammed Smirès, Ingénieur ENSEIRB-MATMECA & Spécialiste IA certifié CNAM. +10 ans d'expérience industrielle dans les secteurs de la défense, du ferroviaire et de l'automobile.",
    og_title: "Mohammed Smirès | Architecte Systèmes Complexes & IA",
    og_desc: "Découvrez mes réalisations en modélisation MBSE (Arcadia/Capella) et en Intelligence Artificielle appliquée (YOLOv8, DeepSORT, cGAN Pix2Pix).",

    // Navigation
    nav_home: "Accueil",
    nav_expertise: "Expertise",
    nav_projects: "Projets IA",
    nav_career: "Parcours",
    nav_contact: "Contact",
    nav_cv_btn: "CV (PDF)",
    nav_cv_fr: "CV Français (PDF)",
    nav_cv_en: "CV English (PDF)",

    // Hero
    hero_badge: "Architecte Systèmes Complexes & Spécialiste IA",
    hero_title: 'Concevoir des architectures critiques.<br><span class="ms-text-gradient">Déployer l\'IA de haute précision.</span>',
    hero_lead: "Ingénieur diplômé <strong>ENSEIRB-MATMECA</strong> fort de plus de 10 ans d'expérience industrielle (Défense, Ferroviaire, et Automobile) et certifié en Intelligence Artificielle au <strong>CNAM Paris</strong>. J'unifie la rigueur méthodologique du MBSE et la puissance de l'intelligence artificielle.",
    hero_btn_projects: "Explorer les Projets IA",
    hero_btn_career: "Consulter le Parcours Industriel",
    cv_download_fr: "CV Français (PDF)",
    cv_download_en: "CV Anglais (PDF)",

    // KPIs
    kpi_exp_val: "10+ Ans",
    kpi_exp_lbl: "Ingénierie Systèmes Industriels",
    kpi_mota_val: "+41%",
    kpi_mota_lbl: "Gain MOTA sur Benchmark MOT20",
    kpi_mbse_val: "100%",
    kpi_mbse_lbl: "Conformité & Traçabilité MBSE",
    kpi_lang_val: "2",
    kpi_lang_lbl: "Langues de Travail (FR, EN)",

    // Section Expertise
    exp_badge: "Double Compétence Rare",
    exp_title: "L'Alliance Systèmes Complexes & IA",
    exp_subtitle: "Une réponse éprouvée aux programmes technologiques critiques : garantir que des algorithmes modernes de deep learning s'intègrent dans un cadre systémique rigoureux, traçable et certifiable.",

    bento1_tag: "INGÉNIERIE FORMELLE",
    bento1_title: "Architecture Systèmes & MBSE",
    bento1_desc: "Structuration complète d'architectures systèmes complexes selon la méthode <strong>Arcadia / Capella</strong>. Définition, allocation et traçabilité des exigences opérationnelles, fonctionnelles et de sûreté sous <strong>DOORS</strong>. Gestion de la variabilité produit pour grands comptes industriels.",

    bento2_tag: "TEMPS RÉEL & CODE",
    bento2_title: "Embarqué & Automatisation",
    bento2_desc: "Développement de frameworks de test en C++ et Python. Systèmes de protection ferroviaire (ATP), algorithmes contrôle moteur et bancs de test HIL.",

    bento3_tag: "INTELLIGENCE ARTIFICIELLE APPLIQUÉE",
    bento3_title: "Vision par Ordinateur & Modèles Génératifs (cGAN)",
    bento3_desc: "Spécialisé dans la calibration, l'entraînement et l'optimisation de réseaux neuronaux profonds pour des environnements exigeants. Expertise validée au CNAM en détection/suivi multi-objets temps réel (YOLOv8 + DeepSORT sur MOT20) et traduction d'image-à-image (Pix2Pix conditionnel, LSGAN, projection dans l'espace colorimétrique Lab, inpainting et restauration).",

    // Section Projets IA
    proj_badge: "Travaux de Recherche & Développement (CNAM)",
    proj_title: "Études de Cas en Intelligence Artificielle",
    proj_subtitle: "Projets de recherche appliquée documentés selon le standard d'ingénierie : Problématique, Rôle, Solution déployée et Impact métrique mesurable.",

    filter_all: "Tous les Projets",
    filter_tracking: "Tracking & Vidéo (MOT)",
    filter_generative: "Modèles Génératifs (cGAN)",
    filter_restoration: "Inpainting & Restauration",
    filter_sensors: "Signaux & Capteurs (HAR)",

    // Project Labels
    label_problem: "1. Problématique",
    label_role: "2. Rôle & Responsabilité",
    label_solution: "3. Solution Technique",
    label_impact: "4. Impact Mesurable",

    // Project 1 - MOT20
    p1_title: "Tracking Multi-Objets en Environnement Dense (MOT20)",
    p1_subtitle: "Pipeline Hybride YOLOv8 & DeepSORT avec Ré-Identification Profonde",
    p1_problem: "Dans des scènes de foule dense (benchmark MOT20), les modèles pré-entraînés échouent : seulement <strong>10,3% de rappel</strong> et <strong>8,7% de MOTA</strong>. Les occultations fréquentes et les croisements provoquent des commutations et des pertes continues d'identifiants.",
    p1_role: "Concepteur et Développeur Principal. Conception intégrale de la chaîne de traitement, protocoles d'entraînement distribué sur GPU, validation statistique normalisée et benchmarking face au leader mondial SOTA (CoNo-Link).",
    p1_solution: "Couplage YOLOv8 + DeepSORT. Réentraînement complet de YOLO sur <strong>100 époques</strong> avec les annotations MOT20. Calibration fine du seuil de confiance à <strong>0,40</strong> pour équilibrer latence temps réel et élimination des faux positifs.",
    p1_kpi1: "MOTA (12,1% baseline ➔ 53,1%)",
    p1_kpi2: "Rappel global (vs 27,4%)",
    p1_kpi3: "IDF1 stabilité de suivi (vs 16,9%)",
    p1_kpi4: "Précision (à 3,7% de CoNo-Link)",

    // Project 2 - cGAN Colorisation
    p2_title: "Colorisation d'Images par cGAN (Espace Colorimétrique Lab)",
    p2_subtitle: "Traduction Image-à-Image Conditionnelle (U-Net & PatchGAN)",
    p2_problem: "Coloriser une image N&B est un problème inverse indéterminé. L'emploi d'une perte euclidienne standard L2 génère des moyennes délavées et sépia. L'enjeu est de synthétiser des couleurs plausibles et éclatantes sans artefacts visuels.",
    p2_role: "Concepteur de la chaîne de données et du protocole d'apprentissage. Automatisation de l'ingestion d'images, conception du filtre de rejet chromatique et entraînement antagoniste sur 400 époques.",
    p2_solution: "Transformation RGB ➔ Lab : prédiction des canaux a et b conditionnée par le canal de luminance L. Générateur U-Net avec connexions résiduelles et discriminateur PatchGAN 70x70. Perte pondérée avec <strong>lambda_L1 = 30</strong>.",
    p2_kpi1: "Canaux à prédire via l'espace Lab",
    p2_kpi2: "Équilibre de Nash parfait identifié",
    p2_kpi3: "Convergence stable (zéro mode collapse)",
    p2_kpi4: "Dataset filtré sans biais monochrome",

    // Project 3 - Inpainting LSGAN
    p3_title: "Restauration & Inpainting d'Images Masquées (LSGAN)",
    p3_subtitle: "Reconstruction Structurelle et Contextuelle par Least Squares GAN",
    p3_problem: "La perte de données ou le masquage physique de capteurs altère des zones critiques d'images. Reconstruire ces portions détruites réclame de respecter la continuité géométrique globale et les textures haute fréquence d'arrière-plan.",
    p3_role: "Concepteur de l'architecture d'inpainting et du banc d'évaluation comparative. Mise au point du pipeline d'altération synthétique (dataset apparié 512x256) et supervision de la dynamique de convergence L1 vs adverse.",
    p3_solution: "Adoption de la formulation Least Squares GAN (LSGAN) pour pénaliser les erreurs quadratiques et éliminer les gradients évanescents. Traitement direct en RGB (3 canaux en entrée et sortie) et entraînement sur 400 époques.",
    p3_kpi1: "Entrée en régime permanent de G_L1",
    p3_kpi2: "Stabilité étroite du Discriminateur",
    p3_kpi3: "Divergence numérique observée",
    p3_kpi4: "Images de validation restaurées avec succès",

    // Project 4 - HAR
    p4_title: "Reconnaissance d'Activités Humaines (HAR - Capteurs Inertiels)",
    p4_subtitle: "Classification Multiclasse de Signaux par SVM à Noyau & Réseau MLP",
    p4_problem: "Classifier automatiquement les postures statiques et dynamiques (marcher, monter/descendre des escaliers, assis, debout, couché) à partir de flux continus de signaux accélérométriques et gyroscopiques bruités (vecteur de dimension 561).",
    p4_role: "Co-concepteur de l'étude (CNAM RCP-209). Analyse statistique multidimensionnelle, sélection des descripteurs d'importance, implémentation et benchmarking comparatif de 4 familles d'architectures décisionnelles.",
    p4_solution: "Étude comparative rigoureuse : Forêt Aléatoire (Random Forest), Perceptron simple, Perceptron multicouche (MLP) et Séparateurs à Vaste Marge (SVM) à noyau gaussien RBF. Réduction dimensionnelle t-SNE et analyse fine de la matrice de confusion.",
    p4_kpi1: "Précision globale du modèle SVM",
    p4_kpi2: "Rappel posture Allongé (537/537)",
    p4_kpi3: "Score F1 sur l'activité de marche",
    p4_kpi4: "Descripteurs inertiels exploités",

    // Section Parcours
    career_badge: "Expériences & Réalisations",
    career_title: "10 Ans d'Ingénierie au Cœur de l'Industrie",
    career_subtitle: "Conception, modélisation MBSE et validation de systèmes complexes dans des environnements exigeants : Défense, Ferroviaire de pointe et Automobile.",

    // Thales
    thales_date: "FÉVRIER 2023 — MARS 2026",
    thales_title: "Ingénieur Systèmes & Modélisation MBSE",
    thales_company: "Thales — Lisbonne (Portugal) / Cholet (France) / Hengelo (Pays-Bas)",
    thales_d1: "<strong>Ingénierie Systèmes & Exigences :</strong> Définition, structuration rigoureuse et suivi dynamique des exigences systèmes pour garantir la stricte conformité aux besoins opérationnels complexes.",
    thales_d2: "<strong>Conception MBSE (Arcadia / Capella) :</strong> Structuration des architectures selon la méthodologie MBSE, garantissant la cohérence globale des modèles physiques/logiques et la traçabilité intégrale.",
    thales_d3: "<strong>Gestion de Gamme & Variabilité :</strong> Analyse de la variabilité produit et réorganisation du référentiel documentaire technique pour rationaliser la maintenance des déclinaisons clients.",
    thales_d4: "<strong>Performances Techniques & R&D :</strong> Pilotage de la faisabilité et développements dédiés à l'optimisation des performances de nouveaux designs avec interventions internationales (site Thales Hengelo).",

    // Critical Software
    cs_date: "AOÛT 2021 — FÉVRIER 2023",
    cs_title: "Ingénieur Systèmes Embarqués",
    cs_company: "Critical Software — Lisbonne (Portugal) & Site Constructeur CAF (Beasain, Espagne)",
    cs_d1: "<strong>Projet Matériel Roulant (Trains Oxygène SNCF / CAF) :</strong> Définition des exigences systèmes sur spécifications fonctionnelles pour les sous-systèmes critiques : signalisation ferroviaire, modes de conduite, couplage, communication radio.",
    cs_d2: "<strong>Protection Automatique des Trains (ATP) en C++ :</strong> Implémentation d'une bibliothèque de tests en C++ pour le système critique ATP et rédaction des protocoles formels de validation.",
    cs_d3: "<strong>Automatisation de Tests en Python :</strong> Conception et déploiement d'un outillage propriétaire en Python automatisant l'exécution et le reporting des campagnes de validation.",
    cs_d4: "<strong>Déploiements Constructeur :</strong> Interventions et alignement technique sur le site constructeur CAF au Pays Basque.",

    // Inetum
    inetum_date: "DÉCEMBRE 2020 — AOÛT 2021",
    inetum_title: "Ingénieur Test & Validation",
    inetum_company: "Inetum — Lisbonne (Portugal)",
    inetum_d1: "<strong>Qualification Web & IHM :</strong> Élaboration et exécution de plans de tests pour la validation fonctionnelle d'applications web et d'interfaces utilisateurs.",
    inetum_d2: "<strong>Support Technique & Données :</strong> Diagnostic, investigation et correction de dysfonctionnements sur serveurs de bases de données relationnelles.",

    // Bertrandt
    bert_date: "JUIN 2018 — OCTOBRE 2019",
    bert_title: "Ingénieur Contrôle-Commande | Responsable Régulation Débit d'Air Moteur",
    bert_company: "Bertrandt — Toulouse (France)",
    bert_d1: "<strong>Algorithme Flex Fuel :</strong> Conception d'un algorithme d'estimation du taux d'éthanol par fusion multi-capteurs (réservoir et injecteurs).",
    bert_d2: "<strong>Responsable Composant Core (Gestion d'Air) :</strong> Diagnostic de failles logicielles, résolution par correctifs software et recalibration.",
    bert_d3: "<strong>Automatisation Simulink :</strong> Outil interne traçant automatiquement l'architecture multicœur sur Simulink directement depuis le code logiciel embarqué.",
    bert_d4: "<strong>Outillage de Banc :</strong> Création d'outils de dépouillement de données de tests banc et véhicule pour isoler les anomalies logicielles multicœurs.",

    // Assystem
    assy_date: "MARS 2016 — JANVIER 2018",
    assy_title: "Ingénieur Conception et Validation Contrôle Moteur",
    assy_company: "Assystem — Paris (France)",
    assy_d1: "<strong>Algorithme de Niveau d'Huile :</strong> Logique avancée d'estimation de la masse d'huile moteur/carter par fusion de signaux d'un capteur ultrason.",
    assy_d2: "<strong>Bancs HIL & Véhicules Prototypes :</strong> Validation fonctionnelle des modèles Simulink et des exigences sur bancs Hardware-In-the-Loop (HIL) et prototypes piste.",

    // Set-way
    setway_date: "2014 — 2016",
    setway_title: "Ingénieur Calibration Moteur",
    setway_company: "Set-way — Paris (France)",
    setway_d1: "<strong>Calibration & Optimisation (Essence) :</strong> Réglage et optimisation des paramètres moteurs et véhicules sur des projets de motorisation Essence.",
    setway_d2: "<strong>Rédaction de Méthodologies :</strong> Élaboration de méthodologies de calibration structurées, basées sur le référentiel et les spécifications Renault.",

    // SKF
    skf_date: "2014 — 2016",
    skf_title: "Stage en Automatique Avancée (Commande CRONE)",
    skf_company: "SKF (Vernon)",
    skf_d1: "Synthèse d'une loi de commande CRONE d'ordre non entier pour l'isolation vibratoire d'un rotor sur palier magnétique actif.",

    // Formation
    acad_badge: "Socle Académique",
    acad_title: "Diplômes & Formations d'Excellence",
    acad1_title: "Certificat de Spécialisation en IA",
    acad1_school: "CNAM Paris",
    acad1_desc: "Computer Vision, Réseaux antagonistes conditionnels (cGAN), Détection et suivi multi-objets (YOLO, DeepSORT).",
    acad2_title: "Diplôme d'Ingénieur d'État",
    acad2_school: "ENSEIRB-MATMECA, Bordeaux",
    acad2_desc: "Majeure Électronique & Automatique : Commande robuste, traitement du signal, architectures matérielles, temps réel.",
    acad3_title: "Échange Universitaire BRAFITEC",
    acad3_school: "UFRGS, Porto Alegre (Brésil)",
    acad3_desc: "Programme d'excellence d'ingénierie internationale : immersion bilingue, maîtrise opérationnelle du portugais.",

    // Section Contact
    contact_badge: "Opportunités & Échanges",
    contact_title: "Initiations de Projets & Prise de Contact",
    contact_subtitle: "Vous pilotez un programme critique nécessitant une méthodologie MBSE sans faille, vous développez des briques d'IA ou du logiciel embarqué? Échangeons sur vos enjeux.",
    contact_direct_title: "Coordonnées Directes",
    contact_direct_desc: "Disponible pour des missions d'architecture systèmes complexes, de cadrage MBSE ou des projets d'ingénierie en Vision par Ordinateur & IA.",
    contact_email_lbl: "Email Professionnel",
    contact_phone_lbl: "Téléphone Direct",
    contact_linkedin_lbl: "Profil LinkedIn",
    contact_cv_fr: "Télécharger le CV Français (PDF)",
    contact_cv_en: "Télécharger le CV Anglais (PDF)",

    // Formulaire
    form_title: "Envoyer un Message Direct",
    form_name_lbl: "Votre Nom & Prénom *",
    form_name_ph: "Ex: Jean Dupont",
    form_email_lbl: "Adresse Email Professionnelle *",
    form_email_ph: "Ex: j.dupont@groupe.com",
    form_company_lbl: "Entreprise / Organisation",
    form_company_ph: "Ex: Thales, Safran, Alstom...",
    form_subj_lbl: "Objet de la Demande",
    form_opt_recruitment: "Opportunité de recrutement (CDI / Mission)",
    form_opt_mbse: "Projet d'Architecture Systèmes & MBSE",
    form_opt_ai: "Développement & Prototypage IA / Vision",
    form_opt_other: "Autre échange technique",
    form_msg_lbl: "Votre Message *",
    form_msg_ph: "Décrivez succinctement vos enjeux ou attentes...",
    form_submit: "Transmettre le Message",
    form_alert_thanks: "Merci",
    form_alert_body: "Votre client de messagerie va s'ouvrir pour transmettre directement votre message à Mohammed Smirès.",

    // Footer
    footer_copy: "© 2026 Mohammed Smirès — Architecte Systèmes & Spécialiste IA. Tous droits réservés.",
    footer_sub: "Conçu avec une architecture moderne Vanilla HTML5/CSS3/JS • Hébergé sur GitHub Pages."
  },

  en: {
    // Meta / SEO
    page_title: "Mohammed Smirès | Systems Architect & AI Specialist — MBSE & Computer Vision",
    meta_desc: "Professional portfolio of Mohammed Smirès, ENSEIRB-MATMECA Engineer & CNAM Certified AI Specialist. 10+ years of industrial experience in defense, railway, and automotive sectors.",
    og_title: "Mohammed Smirès | Complex Systems Architect & AI Specialist",
    og_desc: "Explore my accomplishments in MBSE system architecture (Arcadia/Capella) and applied Artificial Intelligence (YOLOv8, DeepSORT, cGAN Pix2Pix).",

    // Navigation
    nav_home: "Home",
    nav_expertise: "Expertise",
    nav_projects: "AI Projects",
    nav_career: "Career",
    nav_contact: "Contact",
    nav_cv_btn: "Resume (PDF)",
    nav_cv_fr: "French Resume (PDF)",
    nav_cv_en: "English Resume (PDF)",

    // Hero
    hero_badge: "Complex Systems Architect & AI Specialist",
    hero_title: 'Architecting Critical Systems.<br><span class="ms-text-gradient">Deploying High-Precision AI.</span>',
    hero_lead: "Graduate engineer from <strong>ENSEIRB-MATMECA</strong> with over 10 years of industrial experience (Defense, Rail, and Automotive) and certified in Artificial Intelligence at <strong>CNAM Paris</strong>. I bridge the methodological rigor of MBSE with the power of artificial intelligence.",
    hero_btn_projects: "Explore AI Projects",
    hero_btn_career: "View Industrial Track Record",
    cv_download_fr: "French CV (PDF)",
    cv_download_en: "English CV (PDF)",

    // KPIs
    kpi_exp_val: "10+ Yrs",
    kpi_exp_lbl: "Industrial Systems Engineering",
    kpi_mota_val: "+41%",
    kpi_mota_lbl: "MOTA Gain on MOT20 Benchmark",
    kpi_mbse_val: "100%",
    kpi_mbse_lbl: "MBSE Compliance & Traceability",
    kpi_lang_val: "2",
    kpi_lang_lbl: "Working Languages (FR, EN)",

    // Section Expertise
    exp_badge: "Rare Dual Competence",
    exp_title: "Bridging Complex Systems & AI",
    exp_subtitle: "A proven response to mission-critical technological programs: ensuring modern deep learning algorithms integrate into a rigorous, traceable, and certifiable systems framework.",

    bento1_tag: "FORMAL ENGINEERING",
    bento1_title: "Systems Architecture & MBSE",
    bento1_desc: "End-to-end structuring of complex system architectures following the <strong>Arcadia / Capella</strong> methodology. Definition, allocation, and traceability of operational, functional, and safety requirements in <strong>DOORS</strong>. Product variability management for tier-1 industrial clients.",

    bento2_tag: "REAL-TIME & CODE",
    bento2_title: "Embedded Systems & Automation",
    bento2_desc: "Development of test frameworks in C++ and Python. Automatic Train Protection (ATP) systems, engine control algorithms, and Hardware-in-the-Loop (HIL) test benches.",

    bento3_tag: "APPLIED ARTIFICIAL INTELLIGENCE",
    bento3_title: "Computer Vision & Generative Models (cGAN)",
    bento3_desc: "Specialized in calibration, training, and optimization of deep neural networks for demanding environments. Validated expertise at CNAM in real-time multi-object tracking (YOLOv8 + DeepSORT on MOT20) and image-to-image translation (conditional Pix2Pix, LSGAN, Lab color space projection, inpainting, and restoration).",

    // Section Projets IA
    proj_badge: "Research & Development Projects (CNAM)",
    proj_title: "Artificial Intelligence Case Studies",
    proj_subtitle: "Applied research projects documented according to engineering standards: Problem Statement, Role, Deployed Solution, and Measurable Metric Impact.",

    filter_all: "All Projects",
    filter_tracking: "Tracking & Video (MOT)",
    filter_generative: "Generative Models (cGAN)",
    filter_restoration: "Inpainting & Restoration",
    filter_sensors: "Signals & Sensors (HAR)",

    // Project Labels
    label_problem: "1. Problem Statement",
    label_role: "2. Role & Responsibility",
    label_solution: "3. Technical Solution",
    label_impact: "4. Measurable Impact",

    // Project 1 - MOT20
    p1_title: "Multi-Object Tracking in Dense Environments (MOT20)",
    p1_subtitle: "Hybrid YOLOv8 & DeepSORT Pipeline with Deep Re-Identification",
    p1_problem: "In crowded scenes (MOT20 benchmark), off-the-shelf pre-trained models fail: only <strong>10.3% recall</strong> and <strong>8.7% MOTA</strong>. Frequent occlusions and cross-overs cause continuous ID switches and track losses.",
    p1_role: "Lead Architect & Developer. Full end-to-end pipeline design, distributed GPU training protocols, standardized statistical validation, and benchmarking against global SOTA leader (CoNo-Link).",
    p1_solution: "YOLOv8 + DeepSORT coupling. Full retraining of YOLO over <strong>100 epochs</strong> with MOT20 annotations. Fine calibration of confidence threshold at <strong>0.40</strong> to balance real-time latency and false positive elimination.",
    p1_kpi1: "MOTA (12.1% baseline ➔ 53.1%)",
    p1_kpi2: "Overall Recall (vs 27.4%)",
    p1_kpi3: "IDF1 Tracking Stability (vs 16.9%)",
    p1_kpi4: "Precision (within 3.7% of CoNo-Link)",

    // Project 2 - cGAN Colorisation
    p2_title: "Image Colorization with cGAN (Lab Color Space)",
    p2_subtitle: "Conditional Image-to-Image Translation (U-Net & PatchGAN)",
    p2_problem: "Colorizing grayscale images is an ill-posed inverse problem. Standard L2 Euclidean loss results in washed-out, sepia averages. The challenge is synthesizing plausible, vibrant colors without visual artifacts.",
    p2_role: "Data pipeline and training protocol architect. Automated image ingestion, chromatic rejection filter design, and adversarial training over 400 epochs.",
    p2_solution: "RGB ➔ Lab transformation: prediction of 'a' and 'b' channels conditioned on the luminance 'L' channel. U-Net generator with skip connections and 70x70 PatchGAN discriminator. Weighted loss with <strong>lambda_L1 = 30</strong>.",
    p2_kpi1: "Channels to predict via Lab space",
    p2_kpi2: "Perfect Nash equilibrium identified",
    p2_kpi3: "Stable convergence (zero mode collapse)",
    p2_kpi4: "Filtered dataset free from monochrome bias",

    // Project 3 - Inpainting LSGAN
    p3_title: "Image Restoration & Inpainting of Masked Images (LSGAN)",
    p3_subtitle: "Structural & Contextual Reconstruction via Least Squares GAN",
    p3_problem: "Data loss or physical sensor masking damages critical image regions. Reconstructing these destroyed portions requires preserving global geometric continuity and high-frequency background textures.",
    p3_role: "Inpainting architecture and comparative benchmark designer. Synthetic damage pipeline setup (512x256 paired dataset) and supervision of L1 vs adversarial convergence dynamics.",
    p3_solution: "Adoption of Least Squares GAN (LSGAN) formulation to penalize quadratic errors and prevent vanishing gradients. Direct RGB processing (3 channels in/out) and training over 400 epochs.",
    p3_kpi1: "Steady state entry for G_L1",
    p3_kpi2: "Tight discriminator stability",
    p3_kpi3: "Numerical divergence observed",
    p3_kpi4: "Validation images successfully restored",

    // Project 4 - HAR
    p4_title: "Human Activity Recognition (HAR - Inertial Sensors)",
    p4_subtitle: "Multiclass Signal Classification via Kernel SVM & MLP Network",
    p4_problem: "Automatically classifying static and dynamic postures (walking, ascending/descending stairs, sitting, standing, laying) from continuous noisy accelerometer and gyroscope signal streams (561-dimensional feature vector).",
    p4_role: "Study co-designer (CNAM RCP-209). Multidimensional statistical analysis, feature importance selection, implementation and comparative benchmarking across 4 decision architecture families.",
    p4_solution: "Rigorous comparative evaluation: Random Forest, Single-layer Perceptron, Multi-Layer Perceptron (MLP), and Support Vector Machines (SVM) with Gaussian RBF kernel. t-SNE dimensionality reduction and confusion matrix analysis.",
    p4_kpi1: "Overall accuracy of SVM model",
    p4_kpi2: "Recall for Laying posture (537/537)",
    p4_kpi3: "F1-score on walking activity",
    p4_kpi4: "Inertial features leveraged",

    // Section Parcours
    career_badge: "Experience & Track Record",
    career_title: "10 Years of Engineering at the Core of Industry",
    career_subtitle: "Design, MBSE modeling, and validation of complex systems in demanding industries: Defense, High-End Rail, and Automotive.",

    // Thales
    thales_date: "FEBRUARY 2023 — MARCH 2026",
    thales_title: "Systems Engineer & MBSE Modeling",
    thales_company: "Thales — Lisbon (Portugal) / Cholet (France) / Hengelo (Netherlands)",
    thales_d1: "<strong>Systems Engineering & Requirements:</strong> Definition, rigorous structuring, and dynamic tracking of system requirements to ensure strict compliance with complex operational needs.",
    thales_d2: "<strong>MBSE Architecture (Arcadia / Capella):</strong> Structuring architectures using MBSE methodology, ensuring global physical/logical model consistency and full end-to-end traceability.",
    thales_d3: "<strong>Product Line & Variability Management:</strong> Product variability analysis and technical documentation repository restructuring to streamline client variant maintenance.",
    thales_d4: "<strong>Technical Performance & R&D:</strong> Feasibility leadership and dedicated developments optimizing new design performances with international missions (Thales Hengelo site).",

    // Critical Software
    cs_date: "AUGUST 2021 — FEBRUARY 2023",
    cs_title: "Embedded Systems Engineer",
    cs_company: "Critical Software — Lisbon (Portugal) & CAF Manufacturer Site (Beasain, Spain)",
    cs_d1: "<strong>Rolling Stock Project (SNCF / CAF Oxygène Trains):</strong> System requirements definition based on functional specifications for critical sub-systems: rail signaling, driving modes, train coupling, radio communication.",
    cs_d2: "<strong>Automatic Train Protection (ATP) in C++:</strong> Implementation of a C++ test library for the safety-critical ATP system and authoring of formal validation protocols.",
    cs_d3: "<strong>Python Test Automation:</strong> Design and deployment of proprietary Python tooling automating validation campaign execution and test reporting.",
    cs_d4: "<strong>Manufacturer Site Deployments:</strong> On-site missions and technical alignment at CAF manufacturer facilities in the Basque Country.",

    // Inetum
    inetum_date: "DECEMBER 2020 — AUGUST 2021",
    inetum_title: "Test & Validation Engineer",
    inetum_company: "Inetum — Lisbon (Portugal)",
    inetum_d1: "<strong>Web & GUI Qualification:</strong> Design and execution of test plans for functional validation of web applications and user interfaces.",
    inetum_d2: "<strong>Technical & Data Support:</strong> Diagnosis, investigation, and bug resolution on relational database servers.",

    // Bertrandt
    bert_date: "JUNE 2018 — OCTOBER 2019",
    bert_title: "Control Systems Engineer | Airflow Regulation Lead",
    bert_company: "Bertrandt — Toulouse (France)",
    bert_d1: "<strong>Flex Fuel Algorithm:</strong> Design of an ethanol rate estimation algorithm using multi-sensor fusion (fuel tank and fuel injectors).",
    bert_d2: "<strong>Core Component Lead (Air Management):</strong> Software fault diagnostics, software patch resolution, and recalibration.",
    bert_d3: "<strong>Simulink Automation:</strong> Internal tool automatically mapping multi-core architecture onto Simulink directly from embedded source code.",
    bert_d4: "<strong>Test Bench Tooling:</strong> Development of bench and on-track test data parsing tools to isolate multicore software anomalies.",

    // Assystem
    assy_date: "MARCH 2016 — JANUARY 2018",
    assy_title: "Engine Control Design & Validation Engineer",
    assy_company: "Assystem — Paris (France)",
    assy_d1: "<strong>Oil Level Algorithm:</strong> Advanced logic for engine/sump oil mass estimation through ultrasonic sensor signal fusion.",
    assy_d2: "<strong>HIL Benches & Prototype Vehicles:</strong> Functional validation of Simulink models and requirements on Hardware-in-the-Loop (HIL) test benches and track prototypes.",

    // Set-way
    setway_date: "2014 — 2016",
    setway_title: "Engine Calibration Engineer",
    setway_company: "Set-way — Paris (France)",
    setway_d1: "<strong>Calibration & Optimization (Gasoline):</strong> Tuning and optimization of engine and vehicle parameters on gasoline powertrain projects.",
    setway_d2: "<strong>Methodology Authoring:</strong> Formulation of structured calibration methodologies based on Renault engineering standards and specifications.",

    // SKF
    skf_date: "2014 — 2016",
    skf_title: "Advanced Control Systems Internship (CRONE Control)",
    skf_company: "SKF (Vernon)",
    skf_d1: "Synthesis of non-integer order CRONE control law for active magnetic bearing rotor vibration isolation.",

    // Formation
    acad_badge: "Academic Foundation",
    acad_title: "Degrees & Advanced Qualifications",
    acad1_title: "Specialization Certificate in AI",
    acad1_school: "CNAM Paris",
    acad1_desc: "Computer Vision, Conditional Generative Adversarial Networks (cGAN), Multi-object detection and tracking (YOLO, DeepSORT).",
    acad2_title: "Master of Science in Engineering",
    acad2_school: "ENSEIRB-MATMECA, Bordeaux",
    acad2_desc: "Electronics & Control Systems Major: Robust control, signal processing, hardware architectures, real-time systems.",
    acad3_title: "BRAFITEC Academic Exchange",
    acad3_school: "UFRGS, Porto Alegre (Brazil)",
    acad3_desc: "Elite international engineering program: bilingual academic immersion, full professional proficiency in Portuguese.",

    // Section Contact
    contact_badge: "Opportunities & Collaboration",
    contact_title: "Project Inquiries & Get in Touch",
    contact_subtitle: "Leading a mission-critical program requiring rigorous MBSE methodology, developing cutting-edge AI modules or embedded software? Let's discuss your objectives.",
    contact_direct_title: "Direct Contact",
    contact_direct_desc: "Available for complex systems architecture missions, MBSE scoping, and engineering projects in Computer Vision & AI.",
    contact_email_lbl: "Professional Email",
    contact_phone_lbl: "Direct Phone",
    contact_linkedin_lbl: "LinkedIn Profile",
    contact_cv_fr: "Download French Resume (PDF)",
    contact_cv_en: "Download English Resume (PDF)",

    // Formulaire
    form_title: "Send a Direct Message",
    form_name_lbl: "Full Name *",
    form_name_ph: "e.g. John Doe",
    form_email_lbl: "Professional Email Address *",
    form_email_ph: "e.g. j.doe@company.com",
    form_company_lbl: "Company / Organization",
    form_company_ph: "e.g. Thales, Safran, Alstom...",
    form_subj_lbl: "Subject of Inquiry",
    form_opt_recruitment: "Recruitment Opportunity (Permanent / Contract)",
    form_opt_mbse: "Systems Architecture & MBSE Project",
    form_opt_ai: "AI / Computer Vision Development & Prototyping",
    form_opt_other: "Other Technical Inquiry",
    form_msg_lbl: "Your Message *",
    form_msg_ph: "Briefly outline your challenges or goals...",
    form_submit: "Send Message",
    form_alert_thanks: "Thank you",
    form_alert_body: "Your email client will open to send your message directly to Mohammed Smirès.",

    // Footer
    footer_copy: "© 2026 Mohammed Smirès — Complex Systems Architect & AI Specialist. All rights reserved.",
    footer_sub: "Engineered with modern Vanilla HTML5/CSS3/JS • Hosted on GitHub Pages."
  }
};
