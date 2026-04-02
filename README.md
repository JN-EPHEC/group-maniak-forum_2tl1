# 🧗 Plateforme Communautaire d'Escalade  
Projet Dev3 – Application Web  
Année académique : 2025‑2026  
Établissement : EPHEC – Louvain‑la‑Neuve  

## 👥 Membres du groupe
- Decrème Matthieu  
- Junion Benjamin  

---

# 🌍 1. Lien de Production

➡️ **Application déployée :**  
`https://maniak-forum.l1-6.ephec-ti.be`

---

# 📌 2. Description du Projet

Cette application web est une **plateforme communautaire dédiée à une salle d’escalade**, permettant aux grimpeurs de :

- consulter les blocs actuels et archivés,  
- visualiser des vidéos de la bêta,  
- commenter et noter les blocs,  
- suivre l’historique des ouvertures,  
- discuter via un forum intégré.

Ce projet est réalisé dans le cadre du cours **Développement 3** et constitue un projet **full‑stack** complet.

---

# 🎯 3. Fonctionnalités Principales

## 🧱 Gestion des blocs
- Création, modification et suppression de blocs  
- Classification par difficulté  
- Ajout de vidéos (upload ou lien externe)  
- Archivage automatique des anciens blocs  

## 💬 Interaction communautaire
- Commentaires et avis  
- Système de notation  
- Forum général avec posts et réponses  

## 🔎 Recherche & Navigation
- Filtrage par difficulté  
- Recherche par nom, date ou ouvreur  
- Tri par popularité ou nouveauté  

---

# 🗄️ 4. Modèle de Données (Aperçu)

| Table          | Description |
|----------------|-------------|
| **Users**      | Informations des utilisateurs |
| **Blocs**      | Nom, difficulté, description, vidéo, date |
| **Comments**   | Commentaires liés aux blocs |
| **Ratings**    | Notes et avis |
| **ForumPosts** | Messages du forum |
| **ForumReplies** | Réponses aux messages |
| **...** | ... |
---

# 🛠️ 5. Technologies Utilisées

- **Backend :** Node.js / Express / TypeScript
- **Frontend :** React / Vite
- **Base de données :** ORM : Sequelize => PostgreSQL (Supabase) 
- **Déploiement :** Docker,Reverse proxy, Nginx, GitHub Actions  
- **Outils :** Git, Docker, etc.

---

# 🚀 6. Démarrer le Projet

Cette section explique comment installer et lancer l’application en local.

## 📦 6.1 Prérequis

Assurez-vous d’avoir installé :

- Git  
- Node.js  
- npm

## 📥 6.2 Cloner le projet

```bash
git clone https://github.com/JN-EPHEC/group-maniak-forum_2tl1.git
cd group-maniak-forum_2tl1
```

## 📚 6.3 Installer les dépendances

```bash
npm install
cd server
npm install
cd ../client
npm install
```

## ⚙️ 6.4 Configuration

Ne pas oublier les environnements !

## ▶️ 6.5 Lancer l’application

### Backend & Frontend via concurrently
```bash
npm run dev
```

L’application sera disponible à l’adresse :

```
http://localhost:5173
```

---

# 📄 7. Rapport de Projet (REPORT.md)

Le fichier **REPORT.md**, situé à la racine du dépôt, contient :

- Le pitch de l’application  
- L’explication du refactoring initial  
- Le schéma d’infrastructure (Docker, Nginx, GitHub Actions…)  
- Les Design Patterns utilisés  
- La capture d’écran du coverage de tests  

*(Ce contenu n’est pas repris dans le README pour respecter les consignes.)*

---

# 🏁 8. Conclusion

Ce projet vise à offrir une **plateforme moderne et complète pour les grimpeurs**, tout en permettant d’explorer des concepts avancés du développement web : architecture, base de données, CI/CD, déploiement Docker, et interactions communautaires.
