
import express from 'express';
import * as tbProfilePictures from "../controllers/tbProfilePictures.js";

const router = express.Router()

/**
 * @swagger
 * tags:
 *   name: ProfilePictures
 *   description: Gestion des images de profil des utilisateurs
 */

//GET
/**
 * @swagger
 * /api/profilepictures:
 *   get:
 *     summary: Récupère toutes les images de profil
 *     tags: [ProfilePictures]
 *     responses:
 *       200:
 *         description: Liste de toutes les images de profil
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ProfilePicture'
 *       500:
 *         description: Erreur serveur
 */

router.get("/",tbProfilePictures.getAllProfilePictures);
/**
 * @swagger
 * /api/profilepictures/{id}:
 *   get:
 *     summary: Récupère une image de profil via son ID
 *     tags: [ProfilePictures]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de l'image de profil
 *     responses:
 *       200:
 *         description: Image trouvée
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProfilePicture'
 *       404:
 *         description: Image non trouvée
 *       500:
 *         description: Erreur serveur
 */

router.get("/:id",tbProfilePictures.getProfilePicturebyPk);
//POST 
/**
 * @swagger
 * /api/profilepictures:
 *   post:
 *     summary: Ajoute une nouvelle image de profil
 *     tags: [ProfilePictures]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProfilePicture'
 *     responses:
 *       201:
 *         description: Image de profil créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProfilePicture'
 *       500:
 *         description: Erreur serveur
 */

router.post("/",tbProfilePictures.postProfilePicture);
//DEL
/**
 * @swagger
 * /api/profilepictures/{id}:
 *   delete:
 *     summary: Supprime une image de profil via son ID
 *     tags: [ProfilePictures]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de l'image à supprimer
 *     responses:
 *       204:
 *         description: Image supprimée avec succès
 *       404:
 *         description: Image introuvable
 *       500:
 *         description: Erreur serveur
 */

router.delete("/:id",tbProfilePictures.delProfilePicture);
export default router