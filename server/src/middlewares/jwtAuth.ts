import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import type { JwtAccessPayload } from "../utils/jwt.js";

export const jwtAuth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Token manquant" });
    }

    const token = authHeader.substring(7); // retire "Bearer "

    const secret = process.env.JWT_ACCESS_SECRET;
    if (!secret) {
      throw new Error("JWT_ACCESS_SECRET non configuré");
    }

    const decoded = jwt.verify(token, secret) as JwtAccessPayload;

    req.user = decoded; // injecte le payload dans req.user

    next();
  } catch (err: any) {
    console.error("Erreur JWT:", err);

    if (err.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token expiré" });
    }

    return res.status(403).json({ message: "Token invalide" });
  }
};
