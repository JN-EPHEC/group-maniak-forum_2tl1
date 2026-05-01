import type { Request, Response } from "express";
import * as tbBouldersServices from "../services/tbBouldersServices.js"
export const getAllBoulders = async (req : Request,res : Response ) =>{
    try {
        const json = await tbBouldersServices.getAllService()
        res.status(200).json(json);
    } catch (error) {
    res.status(500).json({ error: (error as any).message });
};  
};

export const getBoulderbyPk = async (req:Request,res: Response) =>{
    try {
        const id = Number(req.params.id);

        const json = await tbBouldersServices.getByPkService(id);

        res.status(200).json(json);

    } catch (error) {
        res.status(500).json({ error: (error as any).message })
    }
};
export const getBoulderByArea = async (req:Request,res:Response) => {
    try {
        const id = Number(req.params.id);
        const json = await tbBouldersServices.getByAreaService(id);
        res.status(200).json(json);
    } catch (error) {
    res.status(500).json({ error: (error as any).message });
};  
};

export const getBoulderByGym = async (req:Request,res:Response) => {
    try {
        const id = Number(req.params.id);
        const json = await tbBouldersServices.getByGymService(id)
        res.status(200).json(json);

    } catch (error) {
    res.status(500).json({ error: (error as any).message });
};  
};
export const getBoulderBySetter = async (req:Request,res:Response) => {
    try {
        const id = Number(req.params.id);
        const json = await tbBouldersServices.getBySetterService(id)
        res.status(200).json(json);

    } catch (error) {
    res.status(500).json({ error: (error as any).message });
};  
};
export const getBoulderByDifficulty = async (req:Request,res:Response) => {
    try {
        const id = Number(req.params.id);
        const json = await tbBouldersServices.getByDifficultyService(id);
        res.status(200).json(json);

    } catch (error) {
    res.status(500).json({ error: (error as any).message });
};  
};
export const postBoulder = async (req:Request,res:Response) => {
          try {
            const data = req.body;
            const json = await tbBouldersServices.postBoulderService(data);
            res.status(201).json(json);
          } catch (error) {
            res.status(500).json({ error: (error as any).message });
          }
};
export const deleteBoulder = async (req:Request,res:Response)=>{
      try {
        const id = Number(req.params.id);
        const deleted = await tbBouldersServices.delBoulderService(id);
    
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
