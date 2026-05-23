import type { Request, Response, NextFunction } from "express";
import type { Model, ModelStatic } from "sequelize";
import tbComments from "../models/tbComments.js";
import tbReplies from "../models/tbReplies.js";

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

      // Récupération générique
      const resource = await model.findByPk(resourceId);
      if (!resource) {
        return res.status(404).json({ message: "Ressource introuvable" });
      }

      // Admin = OK
      if (req.user.role === 1) {
        return next();
      }

      // tbReplies
      if (model === tbReplies) {
        const reply = resource as any;

        // On récupère le commentaire enfant (la vraie reply)
        const childCommentId = reply.commentsrepliesId;

        const childComment = await tbComments.findByPk(childCommentId);

        if (!childComment) {
          return res.status(404).json({ message: "Commentaire lié introuvable" });
        }

        // Vérifier si l'utilisateur est bien le propriétaire du commentaire
        if (childComment.userId !== req.user.id) {
          return res.status(403).json({
            message: "Accès refusé : cette réponse ne vous appartient pas",
          });
        }

        return next();
      }

      // modèle classique avec ownerKey
      const ownerId = (resource as any)[ownerKey];

      if (ownerId !== req.user.id) {
        return res.status(403).json({
          message: "Accès refusé : cette ressource ne vous appartient pas",
        });
      }

      return next();

    } catch (err) {
      console.error("Erreur ownerOrAdmin:", err);
      return res.status(500).json({
        message: "Erreur interne middleware ownerOrAdmin",
      });
    }
  };
};
