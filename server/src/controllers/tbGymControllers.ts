import type { Request, Response } from "express";
import { tbGyms } from "../models";

// GET ALL Gyms
export const getAllGyms = async (req : Request,res : Response ) =>{
    try {
        const gymsAll = await tbGyms.findAll();
        res.status(200).json(gymsAll);

    } catch (error) {
    res.status(500).json({ error: (error as any).message });
};  
};

// POST Gyms
export const postGym = async (req: Request,res : Response) => {
    try {
        const gym = await tbGyms.create(req.body);
        res.status(201).json(gym);
    } catch (error) {
        res.status(500).json({ error: (error as any).message });
    }
};

// DEL Gyms
export const delGym = async (req: Request,res : Response) => {
    try {
         const id = req.params.id as string;
            const gym = await tbGyms.findByPk(id);
            if (!gym) return res.status(404).json({error : "pas de gym ayant cet ID"});
            await gym.destroy();
            res.status(204).json({message: `User ${id} a été supprimé`});
    } catch (error) {
        res.status(500).json({ error: (error as any).message });
    }
};