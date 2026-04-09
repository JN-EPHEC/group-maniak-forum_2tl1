import express from "express";
import { jwtAuth } from "../middlewares/jwtAuth";
import type { Request, Response, NextFunction } from "express";
const router = express.Router();

/**
 * @swagger
 * /api/profile:
 *   get:
 *     summary: Récupère le profil de l'utilisateur connecté
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Profil utilisateur retourné avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Profil utilisateur
 *                 user:
 *                   type: object
 *                   description: Payload du JWT décodé
 *       401:
 *         description: Token manquant ou expiré
 *       403:
 *         description: Token invalide
 */
router.get("/", jwtAuth, (req:Request, res:Response) => {
  res.json({
    message: "Profil utilisateur",
    user: req.user, // vient du middleware
  });
});

export default router;
