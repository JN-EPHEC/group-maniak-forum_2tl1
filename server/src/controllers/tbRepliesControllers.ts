import type { Request, Response } from "express";
import * as tbRepliesServices from "../services/tbRepliesServices.js"

export const getAllReplies = async (req : Request,res : Response ) =>{
    try {
        const json = await tbRepliesServices.getAllService();
        res.status(200).json(json);

    } catch (error) {
    res.status(500).json({ error: (error as any).message });
};  
};
export const getRepliesbyComments = async (req:Request,res: Response) =>{
    try {
        const id = Number(req.params.id);
        const json = await tbRepliesServices.getByPkService(id)
        res.status(200).json(json);
    } catch (error) {
        res.status(500).json({ error: (error as any).message })
    }
};
export const postReplies = async (req:Request,res: Response) => {
    try {
    const { parentId, commentsTxt, userId, boulderId } = req.body;

    if (!parentId || !commentsTxt || !userId || !boulderId) {
      return res.status(400).json({ error: "Missing fields" });
    }

    const result = await tbRepliesServices.postService({
      parentId,
      commentsTxt,
      userId,
      boulderId,
    });

    return res.status(201).json({
      message: "Reply created successfully",
      result,
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to create reply" });
  }
};
export const deleteReplies = async (req:Request,res:Response)=>{
          try {
            const id = Number(req.params.id);
            const deleted = await tbRepliesServices.delService(id);
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