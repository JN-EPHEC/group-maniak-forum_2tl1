import type { Request, Response, NextFunction } from "express";
import type { Model, ModelStatic } from "sequelize";

export const checkOwnerOrAdmin = (
  model: ModelStatic<Model>,
  ownerKey: string
) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        return res.status(401).json({ message: "Veuillez vous connecter" });
      }

      const resourceId = Number(req.params.id);
      if (isNaN(resourceId)) {
        return res.status(400).json({ message: "ID invalide" });
      }

      // On récupère la ressource générique
      const resource = await model.findByPk(resourceId);

      if (!resource) {
        return res.status(404).json({ message: "Ressource introuvable" });
      }

      // Si admin → OK
      if (req.user.role === 1) {
        return next();
      }

      // Sinon → vérifier que c'est bien son élément
      const ownerId = (resource as any)[ownerKey];

      if (ownerId !== req.user.id) {
        return res.status(403).json({
          message: "Accès refusé : cette ressource ne vous appartient pas",
        });
      }

      next();
    } catch (err) {
      console.error("Erreur ownerOrAdmin:", err);
      return res.status(500).json({
        message: "Erreur interne middleware ownerOrAdmin",
      });
    }
  };
};
