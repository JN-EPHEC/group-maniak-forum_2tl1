import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const jwtAuth = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  // 1. Vérifier la présence de l'en-tête
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Token manquant" });
  }

  // 2. Extraire le token (à partir du 7e caractère)
  const token = authHeader.slice(7);

  const secret = process.env.JWT_ACCESS_SECRET;
  if (!secret) {
    throw new Error("JWT_ACCESS_SECRET non configuré");
  }

  // 3. Vérifier le token
  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      // Token expiré → 401
      if (err.name === "TokenExpiredError") {
        return res.status(401).json({ message: "Token expiré" });
      }
      // Token invalide → 403
      return res.status(403).json({ message: "Token invalide" });
    }

    // 4. Stocker le payload dans req.user
    req.user = decoded;

    // 5. Continuer
    next();
  });
};
