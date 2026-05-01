import express from 'express';
import * as Ratings from "../controllers/tbRatingsControllers.js";
import tbRatings from '../models/tbRatings.js';
import { requireAdmin } from '../middlewares/checkAdminRole.js';
import { checkOwnerOrAdmin } from '../middlewares/checkOwnerOrAdmin.js';
import { checkAdminOrSetter } from '../middlewares/checkAdminOrSetter.js';
import { jwtAuth } from '../middlewares/jwtAuth.js';
import { checkIfConnected } from '../middlewares/checkIfConnected.js';
const router = express.Router()
/**
 * @swagger
 * tags:
 *   name: Ratings
 *   description: Gestion des notes et avis sur les blocs
 */

//GET
/**
 * @swagger
 * /api/ratings:
 *   get:
 *     summary: Récupère toutes les notes avec leurs relations (author, boulder, area)
 *     tags: [Ratings]
 *     responses:
 *       200:
 *         description: Liste de toutes les notes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Rating'
 *       500:
 *         description: Erreur serveur
 */

router.get("/",Ratings.getAllRatings);
/**
 * @swagger
 * /api/ratings/{id}:
 *   get:
 *     summary: Récupère une note via son ID
 *     tags: [Ratings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la note
 *     responses:
 *       200:
 *         description: Note trouvée
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Rating'
 *       404:
 *         description: Note non trouvée
 *       500:
 *         description: Erreur serveur
 */

router.get("/:id",Ratings.getRatingsbyPk);
/**
 * @swagger
 * /api/ratings/author/{id}:
 *   get:
 *     summary: Récupère toutes les notes laissées par un utilisateur
 *     tags: [Ratings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de l'utilisateur
 *     responses:
 *       200:
 *         description: Liste des notes de l'utilisateur
 *       500:
 *         description: Erreur serveur
 */

router.get("/author/:id",Ratings.getRatingsByUser);
/**
 * @swagger
 * /api/ratings/boulder/{id}:
 *   get:
 *     summary: Récupère toutes les notes d'un bloc
 *     tags: [Ratings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du bloc
 *     responses:
 *       200:
 *         description: Liste des notes du bloc
 *       500:
 *         description: Erreur serveur
 */

router.get("/boulder/:id",Ratings.getRatingsByBoulders);
/**
 * @swagger
 * /api/ratings/area/{id}:
 *   get:
 *     summary: Récupère toutes les notes des blocs d'une zone
 *     tags: [Ratings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la zone
 *     responses:
 *       200:
 *         description: Liste des notes de la zone
 *       500:
 *         description: Erreur serveur
 */

router.get("/area/:id",Ratings.getRatingsByAreaGym);
//POST 
/**
 * @swagger
 * /api/ratings:
 *   post:
 *     summary: Crée une nouvelle note
 *     tags: [Ratings]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Rating'
 *     responses:
 *       201:
 *         description: Note créée avec succès
 *       500:
 *         description: Erreur serveur
 */

router.post("/",jwtAuth,checkIfConnected,Ratings.postRatings);
//DEL
/**
 * @swagger
 * /api/ratings/{id}:
 *   delete:
 *     summary: Supprime une note via son ID
 *     tags: [Ratings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Note supprimée avec succès
 *       404:
 *         description: Note introuvable
 *       500:
 *         description: Erreur serveur
 */

router.delete("/:id",jwtAuth,checkOwnerOrAdmin(tbRatings,'userId'),Ratings.delRatings);
export default router
