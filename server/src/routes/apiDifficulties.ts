import express from 'express';
import * as tbDifficulties from "../controllers/tbDifficultiesControllers.js";
import { jwtAuth } from '../middlewares/jwtAuth.js';
import { requireAdmin } from '../middlewares/checkAdminRole.js';
const router = express.Router()
/**
 * @swagger
 * tags:
 *   name: Difficulties
 *   description: Échelles de difficulté des blocs Maniak
 */
/**
 * @swagger
 * /api/difficulties:
 *   get:
 *     summary: Récupère toutes les difficultés disponibles
 *     tags: [Difficulties]
 *     responses:
 *       200:
 *         description: Liste de toutes les difficultés
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Difficulty'
 *       500:
 *         description: Erreur serveur
 */

router.get("/",tbDifficulties.getAllDifficulties);
/**
 * @swagger
 * /api/difficulties/{id}:
 *   get:
 *     summary: Récupère une difficulté via son ID
 *     tags: [Difficulties]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la difficulté
 *     responses:
 *       200:
 *         description: Difficulté trouvée
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Difficulty'
 *       404:
 *         description: Difficulté non trouvée
 *       500:
 *         description: Erreur serveur
 */

router.get("/:id",tbDifficulties.getDifficultybyPk);
///post 
/**
 * @swagger
 * /api/difficulties:
 *   post:
 *     summary: Crée une nouvelle difficulté
 *     tags: [Difficulties]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Difficulty'
 *     responses:
 *       201:
 *         description: Difficulté créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Difficulty'
 *       500:
 *         description: Erreur serveur
 */

router.post("/", tbDifficulties.postDifficulty);

/**
 * @swagger
 * /api/difficulties/{id}:
 *   delete:
 *     summary: Supprime une difficulté via son ID
 *     tags: [Difficulties]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la difficulté à supprimer
 *     responses:
 *       204:
 *         description: Difficulté supprimée avec succès
 *       404:
 *         description: Difficulté introuvable
 *       500:
 *         description: Erreur serveur
 */

router.delete("/:id",jwtAuth,requireAdmin, tbDifficulties.delDifficulty);

export default router;
