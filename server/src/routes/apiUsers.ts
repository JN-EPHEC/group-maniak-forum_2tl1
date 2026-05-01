import express from 'express';
import * as tbUserControllers from "../controllers/tbUsersControllers.js";
import { jwtAuth } from "../middlewares/jwtAuth.js";
import { checkPassword } from '../middlewares/checkPassword.js';
const router = express.Router()
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Gestion des utilisateurs Maniak
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Récupère tous les utilisateurs avec leurs relations (status, photo, difficulté récente)
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Liste de tous les utilisateurs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       500:
 *         description: Erreur serveur
 */

router.get("/", tbUserControllers.getAllUsers);
/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Récupère un utilisateur via son ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de l'utilisateur
 *     responses:
 *       200:
 *         description: Utilisateur trouvé
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       401:
 *         description: Token expiré ou manquant
 *       403:
 *         description: Token invalide
 *       404:
 *         description: Utilisateur non trouvé
 *       500:
 *         description: Erreur serveur
 */

router.get('/:id',jwtAuth,tbUserControllers.getUserbyPk);
/**
 * @swagger
 * /api/users/status/{id}:
 *   get:
 *     summary: Récupère tous les utilisateurs ayant un statut donné
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du statut
 *     responses:
 *       200:
 *         description: Liste des utilisateurs ayant ce statut
 *       500:
 *         description: Erreur serveur
 */

router.get('/status/:id',tbUserControllers.getUserbyStatus);
/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Crée un nouvel utilisateur
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Utilisateur créé avec succès
 *       500:
 *         description: Erreur serveur
 */

router.post("/",checkPassword ,tbUserControllers.postUsers);
/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Supprime un utilisateur via son ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Utilisateur supprimé avec succès
 *       404:
 *         description: Utilisateur introuvable
 *       500:
 *         description: Erreur serveur
 */

router.delete("/:id",tbUserControllers.deleteUsers);

export default router;
