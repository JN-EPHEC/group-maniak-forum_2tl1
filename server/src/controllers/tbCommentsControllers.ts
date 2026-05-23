import type { Request, Response } from "express";
import * as tbCommentsServices from '../services/tbCommentsServices.js'

export const getAllComments = async (req : Request,res : Response ) =>{
    try {
        const json = await tbCommentsServices.getAllService();
        res.status(200).json(json);
    } catch (error) {
    res.status(500).json({ error: (error as any).message });
};  
};
export const getCommentsbyPk = async (req:Request,res: Response) =>{
    try {
        const id = Number(req.params.id);
        const json = await tbCommentsServices.getByPkService(id);
        res.status(200).json(json);
    } catch (error) {
        res.status(500).json({ error: (error as any).message })
    }
};
export const getCommentsbyUser = async (req:Request,res: Response) =>{
    try {
        const id = Number(req.params.id);
        const json = await tbCommentsServices.getByUserService(id) ;
        res.status(200).json(json);
    } catch (error) {
        res.status(500).json({ error: (error as any).message })
    }
};
export const getCommentsbyBoulders = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const json = await tbCommentsServices.getByBoulderService(id);
    res.status(200).json(json);

  } catch (error) {
    res.status(500).json({ error: (error as any).message });
  }
};
export const postComments = async (req:Request,res:Response) => {
      try {
        const data = req.body;
        const json = await tbCommentsServices.postCommentService(data);
        res.status(201).json(json);
      } catch (error) {
        res.status(500).json({ error: (error as any).message });
      }
};
export const deleteComments = async (req:Request,res:Response)=>{
      try {
        const id = Number(req.params.id);
        const deleted = await tbCommentsServices.delCommentService(id);
    
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
