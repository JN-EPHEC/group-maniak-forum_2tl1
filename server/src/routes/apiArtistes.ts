import express from "express";
import * as artistesControllers from "../controllers/artistesControllers.js";
import { checkIdParam } from "../middlewares/checkIdParam.js";
import { checkSexeParam } from "../middlewares/checkSexeParam.js";

const router = express.Router();

// methode
/// GET tout 
/**
 * @openapi
 * /api/artistes:
 *   get:
 *     summary: Récupère tous les artistes
 *     tags:
 *       - Artistes
 *     responses:
 *       200:
 *         description: Liste des artistes
 */

router.get('/',artistesControllers.getAllArtistes);
///GET id
/**
 * @openapi
 * /api/artistes/{id}:
 *   get:
 *     summary: Récupère un artiste par ID
 *     tags:
 *       - Artistes
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Artiste trouvé
 */


router.get('/:id',checkIdParam,artistesControllers.getArtisteById);
///GET artiste par id de groupe
/**
 * @openapi
 * /api/artistes/asgroupe/{id}:
 *   get:
 *     summary: Récupère les artistes d’un groupe
 *     tags:
 *       - Artistes
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Liste des artistes du groupe
 */

router.get('/asgroupe/:id',checkIdParam,artistesControllers.getArtistesByIdGroupe);
///GET artiste par id de sexe
/**
 * @openapi
 * /api/artistes/sexe/{sexe}:
 *   get:
 *     summary: Récupère les artistes d’un même sexe
 *     tags:
 *       - Artistes
 *     parameters:
 *       - in: path
 *         name: sexe
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Liste des artistes du même sexe
 */
router.get('/sexe/:sexe',checkSexeParam,artistesControllers.getArtistesBySexe);
///post 
/**
 * @openapi
 * /api/artistes:
 *   post:
 *     summary: Crée un nouvel artiste
 *     tags:
 *       - Artistes
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Artiste'
 *     responses:
 *       201:
 *         description: Artiste créé
 */

router.post("/",artistesControllers.postArtiste);

export default router