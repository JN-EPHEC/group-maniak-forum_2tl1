import type { Request, Response } from "express";
import { tbAreaGyms,tbGyms } from "../models";
import { postElement,delElement } from "../utils/simpleControllers";
// GET ALL Difficulties
export const getAllAreaGyms = async (req : Request,res : Response ) =>{
     try {
        const json = await tbAreaGyms.findAll({
                include: {
            model: tbGyms,
            as: "gym",
            attributes: ["gymId","gymName"]
        }
        });
        res.status(200).json(json);
    } catch (error) {
    res.status(500).json({ error: (error as any).message });
};  
};
// GET Difficulty by PK
export const getAreaGymbyPk = async (req:Request,res: Response) =>{
   try {
        const id = req.params.id as string;
        const json = await tbAreaGyms.findByPk(id,{
                include: {
            model: tbGyms,
            as: "gym",
            attributes: ["gymId","gymName"]
        }
        });
        res.status(200).json(json);
    } catch (error) {
    res.status(500).json({ error: (error as any).message });
};  
};
// POST difficulty
export const postAreaGym = async (req: Request,res : Response) => {
    postElement(req,res,tbAreaGyms)
};

// DEL Difficulty
export const delAreaGym = async (req: Request,res : Response) => {
    delElement(req,res,tbAreaGyms)
};