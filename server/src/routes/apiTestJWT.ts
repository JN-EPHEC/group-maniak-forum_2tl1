import express from 'express';
import type { Request,Response,NextFunction,ErrorRequestHandler} from "express";
import jwt from "jsonwebtoken";
import { demoUser,createAccessToken,createRefreshToken } from '../controllers/jwt';

const router = express.Router()


// JWT test 
/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login utilisateur
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: student
 *               password:
 *                 type: string
 *                 example: password123
 *     responses:
 *       200:
 *         description: Login réussi
 */

router.post("/login", (req:Request, res:Response) => {
  const { username, password } = req.body;

  // Vérification simple (pour l'exercice)
  if (username !== demoUser.username || password !== demoUser.password) {
    return res.status(401).json({ message: "Identifiants invalides" });
  }

  const accessToken = createAccessToken(demoUser);
  const refreshToken = createRefreshToken(demoUser);

  // Cookie sécurisé pour le refresh token
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  return res.json({
    message: "Login réussi",
    accessToken,
  });
});
/**
 * @swagger
 * /api/auth/refresh:
 *   post:
 *     summary: Rafraîchit le token d'accès (Access Token)
 *     description: |
 *       Cette route prend un Refresh Token valide et renvoie un nouveau Access Token valable 15 minutes.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               refreshToken:
 *                 type: string
 *                 example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *     responses:
 *       200:
 *         description: Nouveau Access Token généré
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Nouveau access token généré
 *                 accessToken:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *       400:
 *         description: Refresh token manquant
 *       401:
 *         description: Refresh token expiré
 *       403:
 *         description: Refresh token invalide
 */

router.post("/refresh", (req: Request, res: Response) => {
  const { refreshToken } = req.body;

  // 1. Vérifier que le refreshToken est présent
  if (!refreshToken) {
    return res.status(400).json({ message: "refreshToken manquant" });
  }

  const secret = process.env.JWT_REFRESH_SECRET;
  if (!secret) throw new Error("JWT_REFRESH_SECRET non configuré");

  // 2. Vérifier le refresh token
  jwt.verify(refreshToken, secret, (err:any, decoded: any) => {
    if (err) {
      if (err.name === "TokenExpiredError") {
        return res.status(401).json({ message: "Refresh token expiré" });
      }
      return res.status(403).json({ message: "Refresh token invalide" });
    }

    // 3. Générer un nouveau access token
    const newAccessToken = createAccessToken(decoded);

    return res.json({
      message: "Nouveau access token généré",
      accessToken: newAccessToken,
    });
  });
});

export default router