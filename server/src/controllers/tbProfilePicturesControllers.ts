import type { Request, Response } from "express";
import * as tbProfilePictures from "../services/tbProfilePicturesServices.js"
// GET ALL ProfilePictures
export const getAllProfilePictures = async (req : Request,res : Response ) =>{
        try {
                const json = await tbProfilePictures.getAllService();
                res.status(200).json(json);
            } catch (error) {
            res.status(500).json({ error: (error as any).message });
        }; 
};
// GET ProfilePicture by PK
export const getProfilePicturebyPk = async (req:Request,res: Response) =>{
       try {
           const id = Number(req.params.id);
           const json = await tbProfilePictures.getByPkService(id);
           res.status(200).json(json);
       } catch (error) {
           res.status(500).json({ error: (error as any).message })
       }
};
// POST ProfilePicture
export const postProfilePicture = async (req: Request,res : Response) => {
          try {
            const data = req.body;
            const json = await tbProfilePictures.postService(data);
            res.status(201).json(json);
          } catch (error) {
            res.status(500).json({ error: (error as any).message });
          }
};

// DEL ProfilePicture
export const delProfilePicture = async (req: Request,res : Response) => {
              try {
                const id = Number(req.params.id);
                const deleted = await tbProfilePictures.delService(id);
            
                if (!deleted) {
                  return res.status(404).json({ error: "pas d'élement ayant cet ID" });
                }
            
                res.status(204).json({
                  message: `l'élement ${id} a été supprimé`
                });
              } catch (error) {
                res.status(500).json({ error: (error as any).message });
              }
};