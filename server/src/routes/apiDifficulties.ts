import express from 'express';
import * as tbDifficulties from "../controllers/tbDifficultiesControllers.js";

const router = express.Router()

// ici je select tout et j'ai un un retour en json
/**
* @swagger
* /api/difficulties:
*   get:
*       summary: Récupère la liste des difficulties
*       tags: [Users]
*       responses:
*           200:
*              description: Succès
*/
router.get("/",tbDifficulties.getAllDifficulties);


router.get("/:id",tbDifficulties.getDifficultybyPk);
///post 
// ici je crée un user et je le met dans Users
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
router.post("/", tbDifficulties.postDifficulty);
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

router.delete("/:id", tbDifficulties.delDifficulty);

export default router;
