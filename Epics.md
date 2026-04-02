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
- L’historique des modifications est conservé (optionnel).

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
**En tant qu’** grimpeur  
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
- Le déploiement utilise SCP ou Docker Registry.
- En cas d’erreur, un rollback est effectué.

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

# 🏁 Conclusion

Ces EPICS et User Stories définissent l’ensemble des fonctionnalités nécessaires pour construire une plateforme communautaire d’escalade complète, moderne et maintenable.  
Ils servent de base pour organiser le développement, prioriser les tâches et structurer le backlog du projet.
