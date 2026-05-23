import type { Request, Response } from "express";
import * as tbStatusServices from "../services/tbStatusServices.js"
// GET ALL status
export const getAllstatus = async (req : Request,res : Response ) =>{
            try {
                    const json = await tbStatusServices.getAllService();
                    res.status(200).json(json);
                } catch (error) {
                res.status(500).json({ error: (error as any).message });
            }; 
};
// GET status by PK
export const getStatusbyPk = async (req:Request,res: Response) =>{
          try {
              const id = Number(req.params.id);
              const json = await tbStatusServices.getByPkService(id);
              res.status(200).json(json);
          } catch (error) {
              res.status(500).json({ error: (error as any).message })
          }
};
// POST status
export const postStatus = async (req: Request,res : Response) => {
              try {
                const data = req.body;
                const json = await tbStatusServices.postService(data);
                res.status(201).json(json);
              } catch (error) {
                res.status(500).json({ error: (error as any).message });
              }
};

// DEL status
export const delStatus = async (req: Request,res : Response) => {
                  try {
                    const id = Number(req.params.id);
                    const deleted = await tbStatusServices.delService(id);
                
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