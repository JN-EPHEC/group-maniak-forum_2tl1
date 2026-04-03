# 📘 EPICS & User Stories  
Plateforme Communautaire d’Escalade  
Projet Dev3 – EPHEC 2025‑2026

---

# 🧩 EPIC 1 — Gestion des Blocs d’Escalade

## 🎯 Description
Permettre aux ouvreurs et administrateurs de créer, modifier, supprimer et archiver des blocs, tout en offrant aux grimpeurs une consultation claire et intuitive.

---

## 🟦 User Story 1.1 — Création d’un bloc
**En tant qu’** ouvreur  
**Je veux** créer un nouveau bloc avec un nom, une difficulté, une description et une vidéo  
**Afin de** le rendre disponible aux grimpeurs.

### ✔️ Critères d’acceptation
- Le formulaire doit contenir : nom, difficulté, description, vidéo (upload ou lien).
- Le bloc apparaît immédiatement dans la liste des blocs actifs.
- Si un champ obligatoire manque, un message d’erreur apparaît.

---

## 🟦 User Story 1.2 — Modification d’un bloc
**En tant qu’** ouvreur  
**Je veux** modifier un bloc existant  
**Afin de** corriger ou améliorer ses informations.

### ✔️ Critères d’acceptation
- L’utilisateur peut modifier tous les champs.
- Les modifications sont visibles immédiatement.

---

## 🟦 User Story 1.3 — Archivage automatique
**En tant qu’** administrateur  
**Je veux** que les anciens blocs soient archivés automatiquement  
**Afin de** garder une liste claire des blocs actifs.

### ✔️ Critères d’acceptation
- Un bloc peut être marqué comme “archivé”.
- Les blocs archivés n’apparaissent plus dans la liste principale.
- Ils restent consultables dans une section dédiée.

---

# 🧩 EPIC 2 — Interaction Communautaire

## 🎯 Description
Permettre aux grimpeurs d’interagir entre eux via commentaires, avis et forum.

---

## 🟦 User Story 2.1 — Commenter un bloc
**En tant qu’** utilisateur connecté  
**Je veux** laisser un commentaire sur un bloc  
**Afin de** partager mon ressenti ou mes conseils.

### ✔️ Critères d’acceptation
- Le commentaire doit être lié à un bloc.
- L’utilisateur doit être connecté.
- Le commentaire apparaît immédiatement après validation.

---

## 🟦 User Story 2.2 — Noter un bloc
**En tant que** grimpeur  
**Je veux** attribuer une note à un bloc  
**Afin de** indiquer sa qualité ou sa difficulté ressentie.

### ✔️ Critères d’acceptation
- La note est comprise entre 1 et 5.
- Un utilisateur ne peut noter un bloc qu’une seule fois.
- La moyenne des notes est affichée.

---

## 🟦 User Story 2.3 — Forum général
**En tant qu’** utilisateur  
**Je veux** créer des posts et répondre à ceux des autres  
**Afin de** discuter de techniques, d’événements ou de conseils.

### ✔️ Critères d’acceptation
- Un post contient un titre et un contenu.
- Les réponses sont affichées sous le post.
- Le forum est paginé ou trié par date/popularité.

---

# 🧩 EPIC 3 — Recherche & Navigation

## 🎯 Description
Faciliter la recherche et le filtrage des blocs pour une navigation fluide.

---

## 🟦 User Story 3.1 — Filtrer par difficulté
**En tant qu’** utilisateur  
**Je veux** filtrer les blocs par difficulté  
**Afin de** trouver ceux adaptés à mon niveau.

### ✔️ Critères d’acceptation
- Les difficultés disponibles apparaissent dans un menu.
- Le filtrage est instantané.
- Le filtrage peut être combiné avec d’autres critères.

---

## 🟦 User Story 3.2 — Recherche par nom ou ouvreur
**En tant qu’** utilisateur  
**Je veux** rechercher un bloc par son nom ou son ouvreur  
**Afin de** le retrouver rapidement.

### ✔️ Critères d’acceptation
- La recherche est insensible à la casse.
- Les résultats s’affichent en temps réel ou après validation.
- Si aucun résultat : message “Aucun bloc trouvé”.

---

# 🧩 EPIC 4 — Gestion des Utilisateurs

## 🎯 Description
Gérer l’authentification, les rôles et les profils.

---

## 🟦 User Story 4.1 — Inscription
**En tant qu’** nouveau grimpeur  
**Je veux** créer un compte  
**Afin de** accéder aux fonctionnalités communautaires.

### ✔️ Critères d’acceptation
- Email unique.
- Mot de passe sécurisé.
- Confirmation visuelle de la création du compte.

---

## 🟦 User Story 4.2 — Connexion
**En tant qu’** utilisateur  
**Je veux** me connecter  
**Afin de** commenter, noter et participer au forum.

### ✔️ Critères d’acceptation
- Authentification par email + mot de passe.
- Message d’erreur si identifiants incorrects.
- Session persistante (selon configuration).

---

# 🧩 EPIC 5 — Déploiement & Infrastructure

## 🎯 Description
Assurer un déploiement automatisé, stable et reproductible.

---

## 🟦 User Story 5.1 — Déploiement automatique via GitHub Actions
**En tant qu’** développeur  
**Je veux** que chaque push sur `main` déclenche un déploiement  
**Afin de** garantir une mise en production continue.

### ✔️ Critères d’acceptation
- Le pipeline build → test → deploy doit être automatisé.
- Le déploiement utilise SCP.

---

## 🟦 User Story 5.2 — Infrastructure Docker + Nginx
**En tant qu’** développeur  
**Je veux** que l’application tourne dans des conteneurs  
**Afin de** garantir une stabilité et une portabilité maximales.

### ✔️ Critères d’acceptation
- Un `docker-compose.yml` orchestre backend, frontend, DB.
- Nginx sert de reverse proxy.
- Les conteneurs redémarrent automatiquement en cas de crash.

---

# 🧩 EPIC 6 — Qualité & Tests

## 🎯 Description
Assurer la fiabilité du code via des tests automatisés.

---

## 🟦 User Story 6.1 — Couverture de tests
**En tant qu’** équipe  
**Je veux** mesurer la couverture de tests  
**Afin de** garantir la qualité du code.

### ✔️ Critères d’acceptation
- Un rapport de coverage est généré.
- Une capture d’écran est ajoutée dans `REPORT.md`.
- Le pipeline échoue si la couverture descend sous un seuil défini.

---

# 🧩 EPIC 7 — Refactoring du Projet Initial

## 🎯 Description
Adapter un projet existant, comprendre sa structure, corriger ses incohérences et le transformer en une base propre, maintenable et extensible.

---

## 🟦 User Story 7.1 — Analyse du code existant
**En tant que** développeur backend  
**Je veux** analyser la structure du projet initial  
**Afin de** comprendre son fonctionnement et identifier les points à refactorer.

### ✔️ Critères d’acceptation
- Un document liste les problèmes identifiés (structure, duplication, logique, sécurité).
- Les dépendances obsolètes sont repérées.
- Les routes et modèles existants sont cartographiés.

---

## 🟦 User Story 7.2 — Nettoyage du code
**En tant que** développeur  
**Je veux** supprimer les fichiers inutiles, doublons et dead code  
**Afin de** repartir sur une base saine.

### ✔️ Critères d’acceptation
- Aucun fichier inutile ne reste dans le repo.
- Le projet compile et démarre après nettoyage.
- Le code respecte une structure cohérente.

---

## 🟦 User Story 7.3 — Réorganisation en architecture MVC / Clean Architecture
**En tant que** équipe  
**Je veux** restructurer le backend en modules clairs (routes, controllers, services, models)  
**Afin de** faciliter la maintenance et l’évolution.

### ✔️ Critères d’acceptation
- Les controllers ne contiennent plus de logique métier.
- Les services centralisent la logique.
- Les modèles sont isolés dans un dossier dédié.
- Les routes sont regroupées par domaine.

---

# 🧩 EPIC 8 — Base de Données & ORM

## 🎯 Description
Mettre en place une base de données robuste, normalisée, versionnée via migrations et accessible via un ORM.

---

## 🟦 User Story 8.1 — Création du schéma de base de données
**En tant que** développeur  
**Je veux** définir les tables, relations et contraintes  
**Afin de** structurer les données de l’application.

### ✔️ Critères d’acceptation
- Un schéma ERD est produit.
- Les relations sont définies.
- Les contraintes (PK, FK, unique, cascade) sont documentées.

---

## 🟦 User Story 8.2 — Mise en place des migrations
**En tant que** développeur  
**Je veux** créer des migrations versionnées  
**Afin de** garantir la reproductibilité de la base.

### ✔️ Critères d’acceptation
- Chaque table possède une migration.
- Les migrations peuvent être exécutées sur un serveur vierge.
- Une commande permet de reset + seed la DB.

---

## 🟦 User Story 8.3 — Seeders de données
**En tant que** équipe  
**Je veux** générer des données de test  
**Afin de** faciliter le développement et les tests.

### ✔️ Critères d’acceptation
- Des blocs, utilisateurs, commentaires et posts sont générés.
- Les seeders peuvent être rejoués sans casser la DB.

---

# 🧩 EPIC 9 — API REST Backend

## 🎯 Description
Créer une API REST complète, sécurisée, documentée et conforme aux besoins du frontend.

---

## 🟦 User Story 9.1 — Routes CRUD pour les blocs
**En tant que** frontend  
**Je veux** accéder à des endpoints CRUD  
**Afin de** gérer les blocs.

### ✔️ Critères d’acceptation
- GET /api/blocks  
- GET /api/blocks/:id  
- POST /api/blocks  
- PUT /api/blocks/:id  
- DELETE /api/blocks/:id  
- Validation des inputs  
- Gestion des erreurs cohérente

---

## 🟦 User Story 9.2 — Routes pour commentaires & notes
**En tant que** utilisateur  
**Je veux** poster des commentaires et notes  
**Afin de** interagir avec la communauté.

### ✔️ Critères d’acceptation
- POST /api/blocks/:id/comments  
- POST /api/blocks/:id/ratings  
- GET /api/blocks/:id/comments  
- GET /api/blocks/:id/ratings  

---


# 🧩 EPIC 10 — Authentification & Sécurité

## 🎯 Description
Gérer l’inscription, la connexion, les rôles et la sécurité de l’API.

---

## 🟦 User Story 10.1 — Authentification JWT
**En tant que** utilisateur  
**Je veux** me connecter via un token sécurisé  
**Afin de** accéder aux fonctionnalités privées.

### ✔️ Critères d’acceptation
- POST /auth/register  
- POST /auth/login  
- Token JWT signé  
- Expiration configurable  

---

## 🟦 User Story 10.2 — Middleware de protection
**En tant que** backend  
**Je veux** protéger certaines routes  
**Afin de** empêcher les accès non autorisés.

### ✔️ Critères d’acceptation
- Middleware `authRequired`  
- Middleware `roleRequired(admin)`  
- Tests unitaires associés  

---

## 🟦 User Story 10.3 — Sécurité API
**En tant que** équipe  
**Je veux** sécuriser l’API  
**Afin de** éviter les attaques courantes.

### ✔️ Critères d’acceptation
- Rate limiting  
- Validation stricte des inputs  
- Protection contre injections SQL  
- CORS configuré  

---

# 🧩 EPIC 11 — Tests Backend

## 🎯 Description
Garantir la stabilité du backend via des tests unitaires et d’intégration.

---

## 🟦 User Story 11.1 — Tests unitaires des services
**En tant que** développeur  
**Je veux** tester les services  
**Afin de** garantir la logique métier.

### ✔️ Critères d’acceptation
- Tests pour blocs, commentaires, forum, auth  
- Mock de la DB  
- Couverture minimale définie (ex : 60%)

---

## 🟦 User Story 11.2 — Tests d’intégration API
**En tant que** équipe  
**Je veux** tester les endpoints  
**Afin de** garantir leur bon fonctionnement.

### ✔️ Critères d’acceptation
- Tests CRUD  
- Tests auth  
- Tests erreurs 400/401/404/500  

---

# 🏁 Conclusion

Ces EPICS et User Stories définissent l’ensemble des fonctionnalités nécessaires pour construire une plateforme communautaire d’escalade complète, moderne et maintenable.  
Ils servent de base pour organiser le développement, prioriser les tâches et structurer le backlog du projet.
