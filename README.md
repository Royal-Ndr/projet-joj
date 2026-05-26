🦁 Gaindé Zone — Dakar 2026 🇸🇳

La plateforme d'engagement citoyen, d'éco-responsabilité et de valorisation culturelle pour la jeunesse lors des Jeux Olympiques de la Jeunesse de Dakar 2026.

📌 Sommaire

🦁 Storytelling & Concept

✨ Fonctionnalités Clés (MVP)

🛠️ Stack Technique & Architecture

📸 Démo Visuelle

🚀 Installation & Démarrage Rapide

🔧 Dépannage (Troubleshooting)

🗺️ Roadmap de Déploiement

🤝 Contribution & Licence

👤 Contact & Auteur

🦁 Storytelling & Concept

Lors des grands événements mondiaux, la population locale est trop souvent réduite à un rôle de spectatrice passive. Gaindé Zone brise ce modèle pour les JOJ de Dakar 2026 en plaçant la jeunesse sénégalaise (qui représente plus de 60 % de la population) au cœur de la fête.

En gamifiant l'éco-citoyenneté (Set-Setal 2.0) et la découverte de la Téranga, l'application transforme chaque utilisateur en acteur clé du succès des Jeux. C'est une plateforme d'inclusion sociale qui crée un héritage local durable : propreté urbaine, soutien direct à l'économie informelle et passerelle d'inscription vers les clubs de sport locaux pour l'après-JOJ.

✨ Fonctionnalités Clés (MVP)

L'application s'articule autour de 3 piliers majeurs pensés mobile-first :

🎯 1. Le Tableau de Bord Éco-Citoyen (Set-Setal 2.0)

Missions Réelles : Des défis écologiques géolocalisés à Dakar, Diamniadio et Saly (ex: "Zéro plastique sur la plage de Ngor", "Tri sélectif à la Fan Zone du Plateau").

Preuve de Réussite : Système interactif de simulation de validation par photo.

Récompenses : Gain de points et évolution du profil de "Lionceau" à "Super Gaindé" avec déblocage de badges interactifs.

📍 2. La Carte "Téranga" & Découverte

Valorisation Locale : Recensement des stands de street food traditionnelle (Café Touba, Thiebou Dien, Pastels) et d'artisans d'art (Soumbédioune).

Nudges Écologiques : Recommandation d'itinéraires propres (TER, navettes électriques, marche) pour relier les points d'intérêt aux sites olympiques.

🏃‍♂️ 3. Le "Sport-Matcher"

Quiz Interactif : Un algorithme de personnalité en 3 étapes pour guider l'utilisateur vers une discipline olympique idéale (Basket 3x3, Surf, Breakdance, Lutte de plage).

Passerelle Sportive : Géolocalisation des clubs locaux partenaires pour s'inscrire et s'entraîner dès la fin des JOJ.

🛠️ Stack Technique & Architecture

Frontend & UI

Framework : Next.js 14/15 (App Router, Server-Side Rendering optimisé pour un premier chargement instantané).

Langage : TypeScript (Robustesse du code et typage strict).

Styles : Tailwind CSS (Charte graphique festive "Néo-Sénégalaise" célébrant les couleurs nationales).

Icônes : Lucide React.

Persistance & Robustesse

State Local & Offline-First : Utilisation sécurisée du localStorage avec hydratation dynamique prévenant les erreurs SSR. En cas de réseau mobile saturé dans les stades, l'application continue de fonctionner et de stocker les scores de l'utilisateur sur son téléphone.

📸 Démo Visuelle

Voici un aperçu de l'interface utilisateur, optimisée pour un usage smartphone sur le terrain :

🎯 Tableau de bord (Accueil)

📍 Carte Découverte (Téranga)

🏃‍♂️ Sport-Matcher (Quiz)







Défis, badges et jauge de points.

Filtres artisanat, food et trajets.

Quiz de personnalité interactif.

[!NOTE]

Les captures d'écran ci-dessus sont des placeholders élégants représentant l'expérience vécue par les utilisateurs à Dakar.

🚀 Installation & Démarrage Rapide

Suis ces étapes simples pour lancer le projet localement en moins de 2 minutes :

1. Prérequis

Assure-toi d'avoir installé Node.js (version 18.x ou supérieure recommandée).

2. Cloner et configurer le projet

# Cloner le dépôt
git clone https://github.com/Royal-Ndr/projet-joj.git

# Se déplacer dans le dossier
cd "projet joj"

# Installer les dépendances
npm install


3. Lancer le serveur de développement

npm run dev


L'application sera accessible sur :

En local : http://localhost:3000

Sur ton smartphone (réseau Wi-Fi partagé) : http://192.168.1.20:3000 (pour tester directement en conditions réelles !)

🔧 Dépannage (Troubleshooting)

Erreur d'exécution de scripts PowerShell sur Windows

Si tu obtiens l'erreur suivante en lançant npm :

« npm.ps1 ne peut pas être chargé car l’exécution de scripts est désactivée sur ce système »

La solution rapide :
Ouvre une console PowerShell en tant qu'Administrateur et exécute la commande suivante pour autoriser temporairement les scripts locaux :

Set-ExecutionPolicy RemoteSigned -Scope CurrentUser


Redémarre ensuite VS Code et relance npm run dev.

🗺️ Roadmap de Déploiement

[x] Initialisation de Next.js + Tailwind CSS & TypeScript

[x] Structure de navigation responsive (Desktop & Mobile Bottom-Nav)

[x] Système de points dynamique avec persistance locale (localStorage)

[x] Algorithme de calcul & interface du Sport-Matcher (Quiz interactif)

[ ] Remplacement des listes par l'API cartographique réelle Leaflet / Mapbox

[ ] Push Notifications pour alerter des défis citoyens flash à proximité des stades

[ ] Mode d'utilisation Progressive Web App (PWA) 100% hors-ligne

🤝 Contribution & Licence

Les contributions sont ce qui rend la communauté open-source incroyable !

Fork le projet.

Crée ta branche de fonctionnalité (git checkout -b feature/AmazingFeature).

Commit tes modifications (git commit -m 'feat: add some amazing feature').

Push sur ta branche (git push origin feature/AmazingFeature).

Ouvre une Pull Request pour revue.

Ce projet est distribué sous licence MIT. Consulte le fichier LICENSE pour plus d'informations.

👤 Contact & Auteur

Royal-Ndr — @Royal-Ndr

Projet réalisé avec passion et Téranga pour les Jeux Olympiques de la Jeunesse de Dakar 2026 ! 🇸🇳❤️