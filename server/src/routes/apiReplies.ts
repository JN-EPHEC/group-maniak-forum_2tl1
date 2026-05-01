import express from 'express';
import * as tbReplies from "../controllers/tbRepliesControllers.js";
import { jwtAuth} from '../middlewares/jwtAuth.js';
import { requireAdmin } from '../middlewares/checkAdminRole.js';
const router = express.Router()
/**
 * @swagger
 * tags:
 *   name: Replies
 *   description: Gestion des réponses aux commentaires
 */

//GET
/**
 * @swagger
 * /api/replies:
 *   get:
 *     summary: Récupère toutes les réponses aux commentaires
 *     tags: [Replies]
 *     responses:
 *       200:
 *         description: Liste de toutes les réponses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Reply'
 *       500:
 *         description: Erreur serveur
 */

router.get("/",tbReplies.getAllReplies);
/**
 * @swagger
 * /api/replies/comment/{id}:
 *   get:
 *     summary: Récupère toutes les réponses d'un commentaire donné
 *     tags: [Replies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du commentaire parent
 *     responses:
 *       200:
 *         description: Liste des réponses du commentaire
 *       500:
 *         description: Erreur serveur
 */

router.get("/comment/:id",tbReplies.getRepliesbyComments);
//POST
/**
 * @swagger
 * /api/replies:
 *   post:
 *     tags:
 *       - Replies
 *     summary: Crée un reply (commentaire enfant + relation)
 *     description: >
 *       Crée automatiquement un commentaire enfant, puis crée la relation reply
 *       entre le commentaire parent et le commentaire enfant.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateReplyInput'
 *     responses:
 *       201:
 *         description: Reply créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Reply created successfully"
 *                 reply:
 *                   $ref: '#/components/schemas/tbReplies'
 *                 childComment:
 *                   $ref: '#/components/schemas/tbComments'
 *       400:
 *         description: Champs manquants
 *       500:
 *         description: Erreur serveur
 */
router.post("/",tbReplies.postReplies);
//DELETE
/**
 * @swagger
 * /api/replies/{id}:
 *   delete:
 *     summary: Supprime une réponse via son ID
 *     tags: [Replies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la réponse
 *     responses:
 *       204:
 *         description: Réponse supprimée avec succès
 *       404:
 *         description: Réponse introuvable
 *       500:
 *         description: Erreur serveur
 */

router.delete("/:id",tbReplies.deleteReplies);

export default router