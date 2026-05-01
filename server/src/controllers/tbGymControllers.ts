import type { Request, Response } from "express";
import * as tbGymServices from "../services/tbGymServices.js"
// GET ALL Gyms
export const getAllGyms = async (req : Request,res : Response ) =>{
        try {
                const json = await tbGymServices.getAllService();
                res.status(200).json(json);
            } catch (error) {
            res.status(500).json({ error: (error as any).message });
        }; 
};
// GET gym by PK
export const getGymbyPk = async (req:Request,res: Response) =>{
       try {
           const id = Number(req.params.id);
           const json = await tbGymServices.getByPkService(id);
           res.status(200).json(json);
       } catch (error) {
           res.status(500).json({ error: (error as any).message })
       }
};
// POST gym
export const postGym = async (req: Request,res : Response) => {
          try {
            const data = req.body;
            const json = await tbGymServices.postGymService(data);
            res.status(201).json(json);
          } catch (error) {
            res.status(500).json({ error: (error as any).message });
          }
};

// DEL gym
export const delGym = async (req: Request,res : Response) => {
  try {
    const id = Number(req.params.id);
    const deleted = await tbGymServices.delGymService(id);
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