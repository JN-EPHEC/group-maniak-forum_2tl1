import express from 'express';
import * as Comments from "../controllers/tbCommentsControllers.js";
import tbComments from '../models/tbComments.js';
import { jwtAuth } from '../middlewares/jwtAuth.js';
import { checkOwnerOrAdmin } from '../middlewares/checkOwnerOrAdmin.js';
const router = express.Router()

/**
 * @swagger
 * tags:
 *   name: Comments
 *   description: Gestion des commentaires sur les blocs
 */

//GET
/**
 * @swagger
 * /api/comments:
 *   get:
 *     summary: Récupère tous les commentaires (hors réponses)
 *     tags: [Comments]
 *     responses:
 *       200:
 *         description: Liste de tous les commentaires principaux
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Comment'
 *       500:
 *         description: Erreur serveur
 */

router.get("/",Comments.getAllComments);
/**
 * @swagger
 * /api/comments/{id}:
 *   get:
 *     summary: Récupère un commentaire via son ID
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du commentaire
 *     responses:
 *       200:
 *         description: Commentaire trouvé
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Comment'
 *       404:
 *         description: Commentaire non trouvé
 *       500:
 *         description: Erreur serveur
 */

router.get("/:id",Comments.getCommentsbyPk);
/**
 * @swagger
 * /api/comments/author/{id}:
 *   get:
 *     summary: Récupère tous les commentaires écrits par un utilisateur
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de l'utilisateur
 *     responses:
 *       200:
 *         description: Liste des commentaires de l'utilisateur
 *       500:
 *         description: Erreur serveur
 */

router.get("/author/:id",Comments.getCommentsbyUser);
/**
 * @swagger
 * /api/comments/boulder/{id}:
 *   get:
 *     summary: Récupère tous les commentaires d'un bloc (hors réponses)
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du bloc
 *     responses:
 *       200:
 *         description: Liste des commentaires du bloc
 *       500:
 *         description: Erreur serveur
 */

router.get("/boulder/:id",Comments.getCommentsbyBoulders);

//POST 
/**
 * @swagger
 * /api/comments:
 *   post:
 *     summary: Crée un nouveau commentaire
 *     tags: [Comments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Comment'
 *     responses:
 *       201:
 *         description: Commentaire créé avec succès
 *       500:
 *         description: Erreur serveur
 */

router.post("/",Comments.postComments);
//DEL
/**
 * @swagger
 * /api/comments/{id}:
 *   delete:
 *     summary: Supprime un commentaire via son ID
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Commentaire supprimé avec succès
 *       404:
 *         description: Commentaire introuvable
 *       500:
 *         description: Erreur serveur
 */

router.delete("/:id",jwtAuth,checkOwnerOrAdmin(tbComments,'userId'),Comments.deleteComments);
export default router