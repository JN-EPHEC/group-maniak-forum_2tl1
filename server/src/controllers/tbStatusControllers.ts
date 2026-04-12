import type { Request, Response } from "express";
import { tbStatus } from "../models";

// GET ALL STATUS
export const getAllStatus = async (req : Request,res : Response ) =>{
    try {
        const statusAll = await tbStatus.findAll();
        res.status(200).json(statusAll);

    } catch (error) {
    res.status(500).json({ error: (error as any).message });
};  
};

// POST STATUS
export const postStatus = async (req: Request,res : Response) => {
    try {
        const status = await tbStatus.create(req.body);
        res.status(201).json(status);
    } catch (error) {
        res.status(500).json({ error: (error as any).message });
    }
};

// DEL STATUS
export const delStatus = async (req: Request,res : Response) => {
    try {
         const id = req.params.id as string;
            const status = await tbStatus.findByPk(id);
            if (!status) return res.status(404).json({error : "pas de status ayant cet ID"});
            await status.destroy();
            res.status(204).json({message: `User ${id} a été supprimé`});
    } catch (error) {
        res.status(500).json({ error: (error as any).message });
    }
};