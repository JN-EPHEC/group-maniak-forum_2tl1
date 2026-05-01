import express from 'express';
import * as Replies from "../controllers/tbRepliesControllers.js";
import tbReplies from '../models/tbReplies.js';
import { requireAdmin } from '../middlewares/checkAdminRole.js';
import { checkOwnerOrAdmin } from '../middlewares/checkOwnerOrAdmin.js';
import { checkAdminOrSetter } from '../middlewares/checkAdminOrSetter.js';
import { jwtAuth } from '../middlewares/jwtAuth.js';
import { checkIfConnected } from '../middlewares/checkIfConnected.js';
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

router.get("/",Replies.getAllReplies);
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

router.get("/comment/:id",Replies.getRepliesbyComments);
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

router.post("/",jwtAuth,checkIfConnected,Replies.postReplies);
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

router.delete("/:id",jwtAuth,checkOwnerOrAdmin(tbReplies,"replyId"),Replies.deleteReplies);

export default router