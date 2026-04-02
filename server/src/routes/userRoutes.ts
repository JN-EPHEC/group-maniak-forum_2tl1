import express from 'express';
import * as userControllers from "../controllers/userControllers.js";
import { checkIdParam } from '../middlewares/checkIdParam.js';

const router = express.Router()
// ici je select tout et j'ai un un retour en json
/**
* @swagger
* /api/users:
*   get:
*       summary: Récupère la liste des utilisateurs
*       tags: [Users]
*       responses:
*           200:
*              description: Succès
*/
router.get("/", userControllers.getAllUsers);
// ici je crée un user et je le met dans Users
/**
* @swagger
* /api/users:
*   post:
*       summary: Crée un nouvel user
*       tags: [Users]
*       responses:
*           201:
*              description: Succès
*/
///post 
/**
 * @openapi
 * /api/users:
 *   post:
 *     summary: Crée un nouvel user
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *     responses:
 *       201:
 *         description: User créé
 */
router.post("/", userControllers.postUsers);
// ici je supprime un user dans Users selon son id
/**
 * @openapi
 * /api/users/{id}:
 *   Delete:
 *     summary: Supprime un user
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: User supprimé
 *       404:
 *         description: User introuvable
 */

router.delete("/:id",checkIdParam,userControllers.deleteUsers);

export default router;
