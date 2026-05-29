# 🧗 Plateforme Communautaire d'Escalade
_L'IA a été utilisé pour mettre en page ce readme.md_
Projet Dev3 – Application Web  
Année académique : 2025‑2026  
Établissement : EPHEC – Louvain‑la‑Neuve  

## 👥 Membres du groupe
- Decrème Matthieu  
- Junion Benjamin  

---

# 🌍 1. Lien de Production

➡️ **Application déployée :**  
`https://www.maniak-forum.be`

Oui j'ai payé
---

# 📌 2. Description du Projet

Cette application est une **plateforme communautaire dédiée à une salle d’escalade**, permettant aux grimpeurs de consulter, commenter et suivre l’évolution des blocs proposés.

Elle répond à plusieurs besoins concrets des salles et des grimpeurs :

- consulter les blocs actuels et archivés ;
- visualiser des vidéos de “béta” (méthode optimale) ;
- donner un avis ou un ressenti sur un bloc ;
- suivre l’historique des ouvertures ;
- créditer les ouvreurs ;
- échanger entre grimpeurs via un espace de commentaires.

Le projet est réalisé dans le cadre du cours **Développement 3** et constitue un **projet full‑stack complet**, incluant backend, frontend, base de données, tests, CI/CD et déploiement Docker.

---

# 🎯 3. Fonctionnalités Principales

## 🧱 Gestion des blocs
- Création, modification et suppression  
- Classification par difficulté  
- Ajout de vidéos (upload ou lien externe)  
- Archivage automatique  
- Historique des ouvertures  

## 💬 Interaction communautaire
- Commentaires  
- Système de notation  

## 🔎 Recherche & Navigation
- Filtrage par difficulté  
- Weekly Boulders (Les boulders les mieux référencé sur une semaine)
- Filtrage par disponibilité

---

# 🗄️ 4. Modèle de Données (Schéma Complet)

La base de données repose sur une structure relationnelle cohérente permettant de gérer les utilisateurs, les blocs, les salles, les zones, les commentaires, les notes et les difficultés.  
Elle est hébergée sur **Supabase (PostgreSQL)** et manipulée via **Sequelize**.

<img width="1347" height="1080" alt="image" src="https://github.com/user-attachments/assets/41b4ded0-10dc-4919-906f-1a8dcc511b49" />

## 📌 Vue d’ensemble des entités principales

### 👤 Utilisateurs
**tbUsers**  
- userId  
- userMail  
- userLName  
- userFName  
- userPseudo  
- userPassHashed  
- pictureId → FK vers tbProfilePictures  
- statusId → FK vers tbStatus  
- createdAt / updatedAt  

### 🖼️ Avatars
**tbProfilePictures**  
- pictureId  
- pictureLink  
- pictureLegend  

### 🔐 Rôles / Statuts
**tbStatus**  
- statusId  
- statusName  

---

### 🧱 Blocs d’escalade
**tbBoulders**  
- boulderId  
- boulderName  
- boulderDesc  
- boulderLink (vidéo)  
- boulderReleaseDate  
- boulderEndDate  
- difficultyId → FK vers tbDifficulties  
- userId → ouvreur  
- areaId → FK vers tbAreaGyms  
- boulderImageUrl  
- createdAt / updatedAt  

---

### 🎨 Difficultés
**tbDifficulties**  
- difficultyId  
- difficultyColorName  
- difficultyFrenchScale  
- difficultyVerminScale  

---

### 🏋️ Zones & Salles
**tbGyms**  
- gymId  
- gymName  
- gymAddress  
- gymSchedule (JSON)  
- gymImageUrl  

**tbAreaGyms**  
- areaId  
- areaName  
- areaDesc  
- gymId → FK vers tbGyms  
- areaImageUrl  

---

### 💬 Commentaires & Réponses
**tbComments**  
- commentsId  
- commentsTxt  
- userId  
- boulderId  
- createdAt / updatedAt  

**tbReplies**  
- replyId  
- commentsId → commentaire parent  
- commentsReplyId → réponse ciblée  
- createdAt / updatedAt  

---

### ⭐ Notes & Avis
**tbRatings**  
- rateId  
- rateNote  
- difficultyId  
- rateTxt  
- videoLink  
- userId  
- boulderId  
- createdAt / updatedAt  

---

### 📊 Difficulté réalisé par utilisateur
**tbDifficultyUsers**  
- userId  
- boulderId  
- createdAt / updatedAt  

---

## 🔗 Relations principales (résumé)

- **Un utilisateur** peut :  
  - poster des commentaires,  
  - noter des blocs,  
  - ouvrir des blocs (si si role lui permet),  
  - avoir un avatar,  
  - avoir un statut.

- **Un bloc** appartient à :  
  - une zone (area),  
  - une difficulté,  
  - un ouvreur (user).

- **Une zone** appartient à une salle (gym).

- **Un commentaire** peut recevoir plusieurs réponses.

- **Une difficulté** est liée aux blocs et aux notes.

---

## 🧩 Schéma Entité-Relation

<img width="974" height="1075" alt="image" src="https://github.com/user-attachments/assets/1626273b-7df8-4526-bcb4-e1529192961d" />

---

# 🛠️ 5. Technologies Utilisées

### **Backend**
- Node.js  
- Express  
- TypeScript  
- ORM : Sequelize  
- PostgreSQL (Supabase)

### **Frontend**
- React  
- Vite  

### **Déploiement**
- Docker (API + Reverse Proxy + Nginx Web)  
- VPS OVH  
- GitHub Actions (CI/CD)  
- Reverse Proxy Nginx  

### **Outils**
- Git / GitHub  
- Jest (tests)  
- Docker Compose  

---

# 🏗️ 6. Architecture & Déploiement (Résumé)

L’infrastructure complète est décrite dans le fichier REPORT.md, mais voici un aperçu :

- **GitHub** : branches `dev` (CI tests) et `main` (CI + CD)  
- **GitHub Actions** :  
  - build + tests  
  - déploiement automatique du backend (image Docker)  
  - mise à jour du frontend (bind mount Nginx)  
- **Docker** :  
  - API (Node.js)  
  - Reverse Proxy (Nginx)  
  - Frontend (Nginx Web)  
- **Supabase** : base PostgreSQL  
- **VPS** : héberge les conteneurs et sert l’application  

---

# 🚀 7. Démarrer le Projet en Local

## 📦 7.1 Prérequis

- Git  
- Node.js  
- npm  
- (Optionnel) Docker si vous souhaitez tester l’infrastructure

## 📥 7.2 Cloner le projet

```bash
git clone https://github.com/JN-EPHEC/group-maniak-forum_2tl1.git
cd group-maniak-forum_2tl1
```

## 📚 7.3 Installer les dépendances

```bash
npm install
cd server
npm install
cd ../client
npm install
```

## ⚙️ 7.4 Configuration

Créer les fichiers d’environnement :

- `/server/.env`  
- `/client/.env.developpement`  


## ▶️ 7.5 Lancer l’application

### Backend & Frontend via concurrently
```bash
npm run dev
```

L’application sera accessible sur :

```
http://localhost:5173
```

---

# 📄 8. Rapport de Projet (REPORT.md)

Le fichier **REPORT.md**, situé à la racine du dépôt, contient :

- Le pitch de l’application  
- L’explication du refactoring initial  
- Le schéma d’infrastructure (Docker, Nginx, GitHub Actions…)  
- Les Design Patterns utilisés (Singleton, Repository)  
- La capture d’écran du coverage des tests  

*(Non repris ici pour respecter les consignes du cours.)*

---

# 🏁 9. Conclusion

Ce projet propose une **plateforme moderne, complète et évolutive** pour les grimpeurs, tout en mettant en œuvre des concepts avancés :

- architecture backend propre,  
- séparation des responsabilités,  
- design patterns,  
- CI/CD complet,  
- conteneurisation Docker,  
- déploiement sur VPS,  
- tests automatisés.

Il constitue une base solide pour une future extension vers une véritable communauté d’escalade.

