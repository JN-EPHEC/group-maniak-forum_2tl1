import express from 'express';
import * as tbReplies from "../controllers/tbRepliesControllers";

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
 *     summary: Crée une nouvelle réponse à un commentaire
 *     tags: [Replies]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Reply'
 *     responses:
 *       201:
 *         description: Réponse créée avec succès
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