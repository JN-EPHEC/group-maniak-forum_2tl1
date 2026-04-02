# 🌟 — DEV3  — 

> Projet full‑stack en **TypeScript + Express**, utilisant **Sequelize** et une base SQL, avec une structure propre et modulaire.  
> *(Cours DEV3 — TP3)*

---

## HELLOOOO

![Description du gif](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXNpaTJ0M3dkazlieW4xaXNoeWtkNjU3ZmV3Y3JkbmhwbndjaTZ3NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TYNOx4VEbFqQwamuY8/giphy.gif)

J'explique en dessous le projet tout ça, ça sera normalement mis à jour petit à petit

## 🚀 Fonctionnalités

### Backend (API REST)
- Serveur Express en TypeScript  
- Architecture MVC modulaire  
- ORM Sequelize (models, migrations)  
- Base SQLite (ou autre selon config)  
- Middlewares custom (logger, error handler…)  
- Documentation API via Swagger  
- Validation des données  
- Gestion des erreurs centralisée  

### Frontend (public/)
- Pages HTML statiques  
- Script JS consommant l’API  
- Affichage dynamique des données  
- Organisation claire des assets (images, scripts)


## 📁 Arborescence du Projet

```
/client
  ... (flemme de mettre a jour la bisous)
/public
  /groupes
    /img
  index.html
  script.js

/server
  /src
    /config
    /controllers
    /middlewares
    /models
    /routes
    server.ts
    database.sqlite
    package.json
    package-lock.json
    tsconfig.json
.gitignore

```

---

## 📚 Documentation API (Swagger)

Swagger est disponible à l’URL :

```
http://localhost:3000/api-docs
```

---

## ⚙️ Installation & Lancement

### 1️⃣ Cloner le projet
```bash
git clone https://github.com/le_meilleur_github.git
cd le_meilleur_github
```

---

## 🗄️ Backend

### Installer les dépendances
```bash
npm install
```

### Lancer le serveur
```bash
npm run start
```

---

## 💻 Frontend

Le frontend est statique et servi automatiquement depuis `/public`.
Le second frontend est statique et servi automatiquement depuis `/public/groupes`.

Accès via :

```
http://localhost:3000/
```

et via :

```
http://localhost:3000/groupes
```

---

## 🎯 Objectifs du TP3 (DEV3)

- Créer une API REST en TypeScript  
- Utiliser Sequelize pour gérer la base de données  
- Documenter l’API avec Swagger  
- Servir un frontend statique consommant l’API  
- Structurer un projet propre et scalable  

---

## 👤 Auteur

** EKSS — EPHEC — HE202579 **  
> Projet réalisé dans le cadre du cours de DEV3.
