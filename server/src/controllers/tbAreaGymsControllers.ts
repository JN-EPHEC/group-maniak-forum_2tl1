import type { Request, Response } from "express";
import * as tbAreaGymsServices from "../services/tbAreaGymsServices.js"
// GET ALL Difficulties
export const getAllAreaGyms = async (req : Request,res : Response ) =>{
     try {
        const json = await tbAreaGymsServices.getAllService();
        res.status(200).json(json);
    } catch (error) {
    res.status(500).json({ error: (error as any).message });
};  
};
// GET AreaGym by PK
export const getAreaGymbyPk = async (req:Request,res: Response) =>{
   try {
        const id = Number(req.params.id);
        const json = await tbAreaGymsServices.getByPkService(id);
        res.status(200).json(json);
    } catch (error) {
    res.status(500).json({ error: (error as any).message });
};  
};
// POST difficulty
export const postAreaGym = async (req: Request,res : Response) => {
              try {
                const data = req.body;
                const json = await tbAreaGymsServices.postAreaGymService(data);
                res.status(201).json(json);
              } catch (error) {
                res.status(500).json({ error: (error as any).message });
              }
};

// DEL Difficulty
export const delAreaGym = async (req: Request,res : Response) => {
      try {
        const id = Number(req.params.id);
        const deleted = await tbAreaGymsServices.delAreaGymService(id);
    
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