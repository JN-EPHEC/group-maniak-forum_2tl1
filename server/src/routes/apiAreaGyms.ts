import express from 'express';
import * as tbAreaGyms from "../controllers/tbAreaGymsControllers";

const router = express.Router()
/**
 * @swagger
 * tags:
 *   name: AreaGyms
 *   description: Zones internes des salles Maniak
 */

//get
/**
 * @swagger
 * /api/areagyms:
 *   get:
 *     summary: Récupère toutes les zones des salles Maniak
 *     tags: [AreaGyms]
 *     responses:
 *       200:
 *         description: Liste de toutes les zones
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/AreaGym'
 *       500:
 *         description: Erreur serveur
 */

router.get("/",tbAreaGyms.getAllAreaGyms);
/**
 * @swagger
 * /api/areagyms/{id}:
 *   get:
 *     summary: Récupère une zone via son ID
 *     tags: [AreaGyms]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la zone
 *     responses:
 *       200:
 *         description: Zone trouvée
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AreaGym'
 *       404:
 *         description: Zone non trouvée
 *       500:
 *         description: Erreur serveur
 */

router.get("/:id",tbAreaGyms.getAreaGymbyPk);
///post 
/**
 * @swagger
 * /api/areagyms:
 *   post:
 *     summary: Crée une nouvelle zone dans une salle Maniak
 *     tags: [AreaGyms]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AreaGym'
 *     responses:
 *       201:
 *         description: Zone créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AreaGym'
 *       500:
 *         description: Erreur serveur
 */

router.post("/", tbAreaGyms.postAreaGym);
// del
/**
 * @swagger
 * /api/areagyms/{id}:
 *   delete:
 *     summary: Supprime une zone via son ID
 *     tags: [AreaGyms]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la zone à supprimer
 *     responses:
 *       204:
 *         description: Zone supprimée avec succès
 *       404:
 *         description: Zone introuvable
 *       500:
 *         description: Erreur serveur
 */

router.delete("/:id", tbAreaGyms.delAreaGym);

export default router;
