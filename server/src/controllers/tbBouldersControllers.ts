import type { Request, Response } from "express";
import { tbUsers,tbDifficulties,tbBoulders,tbAreaGyms,tbGyms} from  "../models/index.js";
import { postElement,delElement } from "../utils/simpleControllers.js";

export const getAllBoulders = async (req : Request,res : Response ) =>{
    try {
        const json = await tbBoulders.findAll({
            include: 
            [{model: tbDifficulties,
            as: "difficulty",
            attributes: ["difficultyId","difficultyColorName","difficultyFrenchScale","difficultyVerminScale"]},
            {
            model: tbUsers,
            as: "setter",
            attributes: ["userId","userFName","userLName","userPseudo"]
            },{
            model: tbAreaGyms,
            as: "area",
            attributes: ["areaId","areaName","areaDesc"],
            include :[ {
                model: tbGyms,
                as: "gym",
                attributes: ["gymId","gymName"]
            }]
            }]
        });
        res.status(200).json(json);

    } catch (error) {
    res.status(500).json({ error: (error as any).message });
};  
};
export const getBoulderbyPk = async (req:Request,res: Response) =>{
    try {
        const id = req.params.id as string;
        const json = await tbUsers.findByPk(id,{
            include:
            [{model: tbDifficulties,
            as: "difficulty",
            attributes: ["difficultyId","difficultyColorName","difficultyFrenchScale","difficultyVerminScale"]},
            {
            model: tbUsers,
            as: "setter",
            attributes: ["userId","userFName","userLName","userPseudo"]
            },{
            model: tbAreaGyms,
            as: "areaGyms",
            attributes: ["areaId","areaName","areaDesc"],
            include :[ {
                model: tbGyms,
                as: "gym",
                attributes: ["gymId","gymName"]
            }]
            }]
        })
        res.status(200).json(json);
    } catch (error) {
        res.status(500).json({ error: (error as any).message })
    }
};
export const getBoulderByArea = async (req:Request,res:Response) => {
    try {
        const id = req.params.id as string;
        const json = await tbBoulders.findAll({
            where : {areaId:id},
            include: 
            [{model: tbDifficulties,
            as: "difficulty",
            attributes: ["difficultyId","difficultyColorName","difficultyFrenchScale","difficultyVerminScale"]},
            {
            model: tbUsers,
            as: "setter",
            attributes: ["userId","userFName","userLName","userPseudo"]
            },{
            model: tbAreaGyms,
            as: "area",
            attributes: ["areaId","areaName","areaDesc"],
            include :[ {
                model: tbGyms,
                as: "gym",
                attributes: ["gymId","gymName"]
            }]
            }]
        });
        res.status(200).json(json);

    } catch (error) {
    res.status(500).json({ error: (error as any).message });
};  
};
export const getBoulderByGym = async (req:Request,res:Response) => {
    try {
        const id = req.params.id as string;
        const json = await tbBoulders.findAll({
            where : {gymId:id},
            include: 
            [{model: tbDifficulties,
            as: "difficulty",
            attributes: ["difficultyId","difficultyColorName","difficultyFrenchScale","difficultyVerminScale"]},
            {
            model: tbUsers,
            as: "setter",
            attributes: ["userId","userFName","userLName","userPseudo"]
            },{
            model: tbAreaGyms,
            as: "area",
            attributes: ["areaId","areaName","areaDesc"],
            include :[ {
                model: tbGyms,
                as: "gym",
                attributes: ["gymId","gymName"]
            }]
            }]
        });
        res.status(200).json(json);

    } catch (error) {
    res.status(500).json({ error: (error as any).message });
};  
};
export const getBoulderBySetter = async (req:Request,res:Response) => {
    try {
        const id = req.params.id as string;
        const json = await tbBoulders.findAll({
            where : {userId:id},
            include: 
            [{model: tbDifficulties,
            as: "difficulty",
            attributes: ["difficultyId","difficultyColorName","difficultyFrenchScale","difficultyVerminScale"]},
            {
            model: tbUsers,
            as: "setter",
            attributes: ["userId","userFName","userLName","userPseudo"]
            },{
            model: tbAreaGyms,
            as: "area",
            attributes: ["areaId","areaName","areaDesc"],
            include :[ {
                model: tbGyms,
                as: "gym",
                attributes: ["gymId","gymName"]
            }]
            }]
        });
        res.status(200).json(json);

    } catch (error) {
    res.status(500).json({ error: (error as any).message });
};  
};
export const getBoulderByDifficulty = async (req:Request,res:Response) => {
    try {
        const id = req.params.id as string;
        const json = await tbBoulders.findAll({
            where : {difficultyId:id},
            include: 
            [{model: tbDifficulties,
            as: "difficulty",
            attributes: ["difficultyId","difficultyColorName","difficultyFrenchScale","difficultyVerminScale"]},
            {
            model: tbUsers,
            as: "setter",
            attributes: ["userId","userFName","userLName","userPseudo"]
            },{
            model: tbAreaGyms,
            as: "area",
            attributes: ["areaId","areaName","areaDesc"],
            include :[ {
                model: tbGyms,
                as: "gym",
                attributes: ["gymId","gymName"]
            }]
            }]
        });
        res.status(200).json(json);

    } catch (error) {
    res.status(500).json({ error: (error as any).message });
};  
};
export const postBoulder = async (req:Request,res:Response) => {
    postElement(req,res,tbBoulders)
};
export const deleteBoulder = async (req:Request,res:Response)=>{
    delElement(req,res,tbBoulders)
};
