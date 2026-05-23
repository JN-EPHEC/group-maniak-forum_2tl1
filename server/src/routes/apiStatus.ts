import express from 'express';
import * as tbStatus from "../controllers/tbStatusControllers.js"
import { requireAdmin } from '../middlewares/checkAdminRole.js';
import { checkOwnerOrAdmin } from '../middlewares/checkOwnerOrAdmin.js';
import { jwtAuth } from '../middlewares/jwtAuth.js';
import { checkIfConnected } from '../middlewares/checkIfConnected.js';
const router = express.Router()
/**
 * @swagger
 * tags:
 *   name: Status
 *   description: Gestion des statuts utilisateurs
 */

//GET
/**
 * @swagger
 * /api/status:
 *   get:
 *     summary: Récupère tous les statuts utilisateurs
 *     tags: [Status]
 *     responses:
 *       200:
 *         description: Liste de tous les statuts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Status'
 *       500:
 *         description: Erreur serveur
 */

router.get("/",tbStatus.getAllstatus);
/**
 * @swagger
 * /api/status/{id}:
 *   get:
 *     summary: Récupère un statut via son ID
 *     tags: [Status]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du statut
 *     responses:
 *       200:
 *         description: Statut trouvé
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Status'
 *       404:
 *         description: Statut non trouvé
 *       500:
 *         description: Erreur serveur
 */

router.get("/:id",tbStatus.getStatusbyPk);
//POST
/**
 * @swagger
 * /api/status:
 *   post:
 *     summary: Crée un nouveau statut utilisateur
 *     tags: [Status]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Status'
 *     responses:
 *       201:
 *         description: Statut créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Status'
 *       500:
 *         description: Erreur serveur
 */

router.post("/",jwtAuth,requireAdmin,tbStatus.postStatus);
//DELETE
/**
 * @swagger
 * /api/status/{id}:
 *   delete:
 *     summary: Supprime un statut via son ID
 *     tags: [Status]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du statut à supprimer
 *     responses:
 *       204:
 *         description: Statut supprimé avec succès
 *       404:
 *         description: Statut introuvable
 *       500:
 *         description: Erreur serveur
 */

router.delete("/:id",jwtAuth,requireAdmin,tbStatus.delStatus);

export default router