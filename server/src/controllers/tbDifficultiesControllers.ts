import type { Request, Response } from "express";
import * as tbDifficultieServices from "../services/tbDifficultiesServices.js"
// GET ALL Difficulties
export const getAllDifficulties = async (req : Request,res : Response ) =>{
    try {
            const json = await tbDifficultieServices.getAllService();
            res.status(200).json(json);
        } catch (error) {
        res.status(500).json({ error: (error as any).message });
    }; 
};
// GET Difficulty by PK
export const getDifficultybyPk = async (req:Request,res: Response) =>{
       try {
           const id = Number(req.params.id);
           const json = await tbDifficultieServices.getByPkService(id);
           res.status(200).json(json);
       } catch (error) {
           res.status(500).json({ error: (error as any).message })
       }
};
// POST difficulty
export const postDifficulty = async (req: Request,res : Response) => {
          try {
            const data = req.body;
            const json = await tbDifficultieServices.postDifficultyService(data);
            res.status(201).json(json);
          } catch (error) {
            res.status(500).json({ error: (error as any).message });
          }
};

// DEL Difficulty
export const delDifficulty = async (req: Request,res : Response) => {
          try {
            const id = Number(req.params.id);
            const deleted = await tbDifficultieServices.delDifficultyService(id);
        
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