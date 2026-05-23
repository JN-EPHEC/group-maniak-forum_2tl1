import type { Request, Response, NextFunction } from "express";

export const requireAdmin = (req: Request, res: Response, next: NextFunction) => {
    try {
        // Si le middleware jwtAuth n'a pas injecté req.user : pas connecté
        if (!req.user) {
            return res.status(401).json({ message: "Veuillez vous connecter" });
        }

        // Vérification du rôle
        if (req.user.role !== 1) {
            return res.status(403).json({ message: "Accès refusé : rôle insuffisant" });
        }

        next();
    } catch (err) {
        return res.status(500).json({ message: "Erreur interne middleware rôle" });
    }
};
