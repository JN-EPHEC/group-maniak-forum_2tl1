import type { Request, Response } from "express";
import { tbUsers } from "../models";

export const getAllUsers = async (req : Request,res : Response ) =>{
    try {
        const usersAll = await tbUsers.findAll({include: ["difficulty", "profilePicture", "status"]});
        res.status(200).json(usersAll);

    } catch (error) {
    res.status(500).json({ error: (error as any).message });
};  
};
export const getUserbyPk = async (req:Request,res: Response) =>{
    try {
        const id = req.params.id as string;
        const user = await tbUsers.findByPk(id,{include:["difficulty", "profilePicture", "status"]});
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: (error as any).message })
    }
};
export const postUsers = async (req:Request,res:Response) => {
    try {
        const user = await tbUsers.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: (error as any).message });
    }
    
};
export const deleteUsers = async (req:Request,res:Response)=>{
    try {
            const id = req.params.id as string;
            const user = await tbUsers.findByPk(id);
            if (!user) return res.status(404).json({error : "pas de user ayant cet ID"});
            await user.destroy();
            res.status(204).json({message: `User ${id} a été supprimé`});
    } catch (error) {
        res.status(500).json({ error: (error as any).message });
    };

};
