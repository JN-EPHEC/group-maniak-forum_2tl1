import { Router } from "express";
import { login,refresh } from "../controllers/authControllers.js";

const router = Router();

/**
 * @openapi
 * /api/auth/login:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Login utilisateur
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - identifier
 *               - password
 *             properties:
 *               identifier:
 *                 type: string
 *                 example: "winter@gmail.com"
 *               password:
 *                 type: string
 *                 example: "monMotDePasse123"
 *     responses:
 *       200:
 *         description: Authentification réussie
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 accessToken:
 *                   type: string
 *                 user:
 *                   type: object
 *       401:
 *         description: Identifiants invalides
 */

router.post("/login", login);

/**
 * @openapi
 * /api/auth/refresh:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Rafraîchit l'access token
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               refreshToken:
 *                 type: string
 *                 example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *     responses:
 *       200:
 *         description: Nouveau access token généré
 *       401:
 *         description: Refresh token manquant ou expiré
 *       403:
 *         description: Refresh token invalide
 */
router.post("/refresh", refresh);

export default router;
