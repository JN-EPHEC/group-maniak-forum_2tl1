import express from 'express';
import * as tbGymControllers from "../controllers/tbGymControllers.js";
import { jwtAuth} from '../middlewares/jwtAuth.js';
import { requireAdmin } from '../middlewares/checkAdminRole.js';
const router = express.Router()
/**
 * @swagger
 * tags:
 *   name: Gyms
 *   description: Endpoints liés aux salles Maniak
 */
/**
 * @swagger
 * /api/gyms:
 *   get:
 *     summary: Récupère toutes les salles Maniak
 *     tags: [Gyms]
 *     responses:
 *       200:
 *         description: Liste de toutes les salles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Gym'
 */

router.get("/",tbGymControllers.getAllGyms);

/**
 * @swagger
 * /api/gyms/{id}:
 *   get:
 *     summary: Récupère une salle via son ID
 *     tags: [Gyms]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la salle
 *     responses:
 *       200:
 *         description: Salle trouvée
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Gym'
 *       404:
 *         description: Salle non trouvée
 */

router.get("/:id",tbGymControllers.getGymbyPk);
///post 

/**
 * @swagger
 * /api/gyms:
 *   post:
 *     summary: Crée une nouvelle salle Maniak
 *     tags: [Gyms]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Gym'
 *     responses:
 *       201:
 *         description: Salle créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Gym'
 *       500:
 *         description: Erreur serveur
 */

router.post("/", tbGymControllers.postGym);
// ici je supprime selon son id
/**
 * @swagger
 * /api/gyms/{id}:
 *   delete:
 *     summary: Supprime une salle via son ID
 *     tags: [Gyms]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la salle à supprimer
 *     responses:
 *       204:
 *         description: Salle supprimée avec succès
 *       404:
 *         description: Salle introuvable
 *       500:
 *         description: Erreur serveur
 */

router.delete("/:id",jwtAuth,requireAdmin, tbGymControllers.delGym);

export default router;
