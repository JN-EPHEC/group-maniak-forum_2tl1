import express from "express";
import apiArtistes from "./apiArtistes.js";
import * as groupesControllers from "../controllers/groupesControllers.js"
import { checkIdParam } from "../middlewares/checkIdParam.js";
const router = express.Router();
// redirection 
router.use("/artistes",apiArtistes);
//Methode appliquée 
//GET
/**
 * @openapi
 * /api/groupes:
 *   get:
 *     summary: Récupère tous les groupes
 *     tags:
 *       - Groupes
 *     responses:
 *       200:
 *         description: Liste des groupes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Groupe'
 */
router.get("/",groupesControllers.getAllGroups);
/**
 * @openapi
 * /api/groupes/{id}:
 *   get:
 *     summary: Récupère un groupe par ID
 *     tags:
 *       - Groupes
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Groupe trouvé
 *       404:
 *         description: Groupe introuvable
 */


router.get("/:id",checkIdParam,groupesControllers.getGroupsById);
//POST
/**
 * @openapi
 * /api/groupes:
 *   post:
 *     summary: Crée un nouveau groupe
 *     tags:
 *       - Groupes
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Groupe'
 *     responses:
 *       201:
 *         description: Groupe créé
 */

router.post("/",groupesControllers.postGroup);
//DELETE
/**
 * @openapi
 * /api/groupes/{id}:
 *   Delete:
 *     summary: Supprime un  groupe
 *     tags:
 *       - Groupes
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Groupe supprimé
 *       404:
 *         description: Groupe introuvable
 */

router.delete('/:id',checkIdParam,groupesControllers.deleteUsers)

export default router;