import type { Request, Response, NextFunction } from "express";
export const checkIfConnected = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        return res.status(401).json({ message: "Veuillez vous connecter" });
      }
      return next();
    } catch (err) {
      console.error("Erreur checkIfConnected:", err);
      return res.status(500).json({
        message: "Erreur interne middleware checkIfConnected",
      });
    }
  };