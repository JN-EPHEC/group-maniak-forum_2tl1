import type { Request, Response } from "express";
import bcrypt from "bcrypt";
import tbUsers from "../models/tbUsers.js";
import { createAccessToken, createRefreshToken } from "../utils/jwt.js";
import { Op } from "sequelize";
import jwt from "jsonwebtoken";


export const login = async (req: Request, res: Response) => {
  try {
    const { identifier, password } = req.body;
    // identifier = mail ou pseudo 
    if (!identifier || !password) {
      return res.status(400).json({ message: "Identifiants manquants" });
    }
    const user = await tbUsers.findOne({
  where: {
    [Op.or]: [
      { userMail: identifier },
      { userPseudo: identifier },
    ],
  },
});

    if (!user) {
      return res.status(401).json({ message: "Identifiants invalides" });
    }

    const isValid = await bcrypt.compare(password, user.userPassHashed);
    if (!isValid) {
      return res.status(401).json({ message: "Identifiants invalides" });
    }

    const accessToken = createAccessToken(user);
    const refreshToken = createRefreshToken(user);

    // Cookie refreshToken
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 jours
    });

    return res.status(200).json({
      accessToken,
      user: {
        id: user.userId,
        pseudo: user.userPseudo,
        mail: user.userMail,
        role: user.statusId
      },
    });
  } catch (err) {
    console.error("Erreur login:", err);
    return res.status(500).json({ message: "Erreur serveur" });
  }
};

export const refresh = async (req: Request, res: Response) => {
  try {
    // 1. Récupération du refresh token
    const refreshToken =
      req.cookies?.refreshToken || req.body.refreshToken;

    if (!refreshToken) {
      return res.status(401).json({ message: "Refresh token manquant" });
    }

    const secret = process.env.JWT_REFRESH_SECRET;
    if (!secret) {
      throw new Error("JWT_REFRESH_SECRET non configuré");
    }

    // 2. Vérification du refresh token
    const decoded = jwt.verify(refreshToken, secret) as {
      id: number;
      pseudo: string;
    };

    // 3. Vérifier que l'utilisateur existe toujours
    const user = await tbUsers.findOne({
      where: { userId: decoded.id },
    });

    if (!user) {
      return res.status(404).json({ message: "Utilisateur introuvable" });
    }

    // 4. Générer un nouveau access token
    const newAccessToken = createAccessToken(user);

    return res.status(200).json({
      accessToken: newAccessToken,
    });
  } catch (err: any) {
    console.error("Erreur refresh:", err);

    if (err.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Refresh token expiré" });
    }

    return res.status(403).json({ message: "Refresh token invalide" });
  }
};