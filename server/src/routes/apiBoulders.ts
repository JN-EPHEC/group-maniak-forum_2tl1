import express from 'express';
import * as tbBoulders from "../controllers/tbBouldersControllers.js";
import { getWeeklyBoulders } from '../controllers/weeklyBouldersControllers.js';
const router = express.Router()
/**
 * @swagger
 * tags:
 *   name: Boulders
 *   description: Gestion des blocs d'escalade Maniak
 */

//getters
/**
 * @swagger
 * /api/boulders:
 *   get:
 *     summary: Récupère tous les blocs avec leurs relations (difficulty, setter, area, gym)
 *     tags: [Boulders]
 *     responses:
 *       200:
 *         description: Liste de tous les blocs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Boulder'
 *       500:
 *         description: Erreur serveur
 */

router.get('/',tbBoulders.getAllBoulders);
router.get('/weekly',getWeeklyBoulders);
/**
 * @swagger
 * /api/boulders/{id}:
 *   get:
 *     summary: Récupère un bloc via son ID
 *     tags: [Boulders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du bloc
 *     responses:
 *       200:
 *         description: Bloc trouvé
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Boulder'
 *       404:
 *         description: Bloc non trouvé
 *       500:
 *         description: Erreur serveur
 */

router.get('/:id',tbBoulders.getBoulderbyPk);
/**
 * @swagger
 * /api/boulders/byArea/{id}:
 *   get:
 *     summary: Récupère tous les blocs d'une zone spécifique
 *     tags: [Boulders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la zone
 *     responses:
 *       200:
 *         description: Liste des blocs de la zone
 *       500:
 *         description: Erreur serveur
 */

router.get('/byArea/:id',tbBoulders.getBoulderByArea);
/**
 * @swagger
 * /api/boulders/byGym/{id}:
 *   get:
 *     summary: Récupère tous les blocs d'une salle spécifique
 *     tags: [Boulders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la zone
 *     responses:
 *       200:
 *         description: Liste des blocs de la salle
 *       500:
 *         description: Erreur serveur
 */

router.get('/byGym/:id',tbBoulders.getBoulderByGym);
/**
 * @swagger
 * /api/boulders/bySetter/{id}:
 *   get:
 *     summary: Récupère tous les blocs ouverts par un setter donné
 *     tags: [Boulders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du setter
 *     responses:
 *       200:
 *         description: Liste des blocs ouverts par ce setter
 *       500:
 *         description: Erreur serveur
 */

router.get('/bySetter/:id',tbBoulders.getBoulderBySetter);
/**
 * @swagger
 * /api/boulders/byDifficulty/{id}:
 *   get:
 *     summary: Récupère tous les blocs d'une difficulté donnée
 *     tags: [Boulders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la difficulté
 *     responses:
 *       200:
 *         description: Liste des blocs de cette difficulté
 *       500:
 *         description: Erreur serveur
 */

router.get('/byDifficulty/:id',tbBoulders.getBoulderByDifficulty);


//post
/**
 * @swagger
 * /api/boulders:
 *   post:
 *     summary: Crée un nouveau bloc
 *     tags: [Boulders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Boulder'
 *     responses:
 *       201:
 *         description: Bloc créé avec succès
 *       500:
 *         description: Erreur serveur
 */

router.post('/',tbBoulders.postBoulder);
//del
/**
 * @swagger
 * /api/boulders/{id}:
 *   delete:
 *     summary: Supprime un bloc via son ID
 *     tags: [Boulders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Bloc supprimé avec succès
 *       404:
 *         description: Bloc introuvable
 *       500:
 *         description: Erreur serveur
 */

router.delete('/:id',tbBoulders.deleteBoulder);

export default router