# Rapport de Projet – Dev3  
## Plateforme Communautaire d’Escalade  
**Année académique : 2025–2026**  
**Établissement : EPHEC – Louvain-la-Neuve**

**Membres du groupe :**  
- Decrème Matthieu  
- Junion Benjamin  

---

# 1. Pitch de l’Application

Notre projet consiste en une **plateforme communautaire dédiée à une salle d’escalade**, permettant aux grimpeurs de consulter, commenter et suivre l’évolution des blocs proposés.  
L’application vise à centraliser toutes les informations utiles pour les pratiquants :

- consulter les blocs actuels et archivés ;  
- visualiser des vidéos de “béta” (méthode optimale) ;  
- donner un avis ou un ressenti sur un bloc ;  
- suivre l’historique des ouvertures ;  
- créditer les ouvreurs ;  
- échanger entre grimpeurs via un espace de commentaires.

L’objectif est de fournir un outil moderne, intuitif et collaboratif pour renforcer la communauté locale d’escalade.

---

# 2. Explication du Refactoring Initial

Le projet devait obligatoirement démarrer à partir du code d’un membre du groupe.  
Nous avons choisi **le code de Matthieu** comme base.

### Pourquoi ce choix ?
- Son code était le plus avancé et le plus structuré.  
- Il offrait une architecture déjà segmentée (controllers, services, routes).  
- Il facilitait l’intégration rapide des fonctionnalités du projet.

### Difficultés rencontrées
Le groupe étant composé de **deux personnes**, les difficultés d’adaptation ont été très limitées.  
Notre synergie et notre communication fluide ont permis :

- une compréhension rapide de la structure existante ;  
- une répartition claire des responsabilités ;  
- une adaptation naturelle au style de code initial.

Aucune friction majeure n’a été rencontrée lors du refactoring.

---

# 3. Schéma explicatif de l’infrastructure de déploiement

Le schéma ci-dessous illustre l’ensemble du pipeline de développement, d’intégration continue, de déploiement et d’exécution de notre application. Il montre comment le code circule depuis l’environnement de développement jusqu’au serveur de production, ainsi que la manière dont les différents services interagissent entre eux.

<img width="1265" height="1050" alt="image" src="https://github.com/user-attachments/assets/b2d884de-58a5-49f6-8d29-05f84eb34f71" />

## Rôle des composants

### 🖥️ 1. Environnement de développement (DEV)
- Le développeur travaille en local sur son poste.  
- Une fois une fonctionnalité prête, un **git push** est effectué vers GitHub.  
- Le code est envoyé vers la branche appropriée (dev ou autre branch pour les nouvelles features).

---

### 🟧 2. GitHub – Gestion du code & CI
GitHub héberge le code source et orchestre les workflows CI/CD.

- **Dev Branch**  
  - Utilisée pour le développement courant.  
  - Chaque push déclenche un workflow **CI TEST** (tests automatisés).

- **Main Branch**  
  - Reçoit des *pull requests* depuis la branche dev.  
  - Chaque PR déclenche également les tests.  
  - Une fois validée, elle sert de base au déploiement en production.

---

### 🟦 3. Supabase – Base de données PostgreSQL
- Supabase héberge la base de données PostgreSQL.  
- Le backend s’y connecte via **Sequelize**, notre ORM.  
- Toutes les opérations CRUD passent par cette connexion unique (Singleton).

---

### 🟩 4. Docker – Conteneurisation du backend et du reverse proxy
Le serveur de production exécute plusieurs conteneurs Docker :

- **API (Node.js + Express (REST))**  
  - Conteneur principal du backend.  
  - Communique avec Supabase via Sequelize.  
  - Exposé uniquement au reverse proxy.

- **Reverse Proxy (Nginx)**  
  - Redirige les requêtes entrantes vers l’API.  
  - Gère la sécurité, les headers, les règles de routage.

- **Nginx Web (Frontend)**  
  - Sert les fichiers statiques du frontend (SPA).  
  - Monté via un bind mount mis à jour automatiquement par GitHub Actions.

---

### ⚙️ 5. GitHub Actions – Déploiement continu (CD)
Deux pipelines CD sont utilisés :

- **CD Backend**  
  - Récupère la dernière image Docker du backend.  
  - Déploie automatiquement sur le VPS.

- **CD Frontend**  
  - Build le frontend.  
  - Met à jour le dossier bind-mount utilisé par Nginx.

---

### 🌐 6. VPS – Serveur de production
Le VPS héberge :
- les conteneurs Docker (API, reverse proxy, frontend) ;  
- la configuration Nginx ;  
- les fichiers statiques du frontend.

Les utilisateurs accèdent à :
- `https://www.maniak-forum.l1-6.ephec-ti.be/` → frontend  
- `https://www.maniak-forum.l1-6.ephec-ti.be/api/{query}` → API backend

---

### 7. Description du schéma fourni

Le schéma représente visuellement :

- **Le flux de développement** : DEV → GitHub → CI  
- **La séparation des branches** : dev (tests) et main (tests + déploiement)  
- **Le pipeline CI/CD** : GitHub Actions pour le backend et le frontend  
- **L’infrastructure Docker** : API, reverse proxy, Nginx web  
- **La base de données** : Supabase connectée via Sequelize  
- **L’accès utilisateur** : via un domaine public pointant vers le VPS

Il met en évidence la structure moderne du projet :  
**développement → tests → build → conteneurisation → déploiement → production**.



---

# 4. Design Patterns Utilisés

## 4.1 Singleton – Connexion à Supabase via Sequelize

Nous utilisons un **Singleton** pour gérer la connexion à la base de données.  
Objectif : garantir **une seule instance Sequelize** partagée dans tout le projet.

Avantage :
- évite les connexions multiples inutiles ;  
---

## 4.2 Repository Pattern – Couche “Services”

Même si notre couche est nommée *services*, elle implémente en réalité un **Repository Pattern**.

### Pourquoi ce pattern ?
Il permet de :
- regrouper les opérations CRUD d’un modèle dans une couche dédiée ;  
- empêcher les contrôleurs d’interagir directement avec Sequelize ;  
- améliorer la maintenabilité ;  
- faciliter les tests unitaires ;  
- isoler la logique d’accès aux données derrière une interface claire.

### Exemple concret
Le fichier `tbAreaGymsServices` expose des méthodes telles que :
- `getAllService()`  
- `getByPkService()`  
- `postAreaGymService()`  
- `delAreaGymService()`

Ces méthodes encapsulent totalement les appels ORM (`findAll`, `findByPk`, `create`, `destroy`).

Les contrôleurs consomment donc une API simple, cohérente et découplée de l’ORM.

---

# 5. Tests et Couverture

Les tests ont été réalisés sur :
- les **services** (logique métier) ;  
- les **utilitaires** ;  
- les **middlewares**.

### Particularités techniques
L’écriture des tests a été accompagnée par l’IA (Copilot), notamment pour :
- la gestion des **mocks Jest** ;  
- la résolution des problèmes de typage liés à l’utilisation de **NodeNext**,  
  qui autorise les imports dynamiques ;  
- la compatibilité avec Sequelize, dont les capacités sont limitées pour gérer des relations complexes.

### Capture d’écran du Coverage

<img width="765" height="515" alt="Capture d&#39;écran 2026-05-21 193912" src="https://github.com/user-attachments/assets/40181ce3-0ba8-4bd0-8ca2-c81e144925be" />


---

# 6. Conclusion

Ce projet nous a permis de mettre en pratique :
- une architecture backend propre et modulaire ;  
- un frontend moderne et réactif ;  
- une infrastructure de déploiement professionnelle ;  
- des tests automatisés avec une couverture satisfaisante ;  
- l’utilisation de Design Patterns pertinents.

La plateforme constitue une base solide pour une future extension vers une véritable communauté d’escalade.

