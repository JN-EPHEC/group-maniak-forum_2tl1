import type { Request, Response } from "express";
import { tbUsers,tbDifficulties,tbStatus,tbProfilePictures } from "../models";
import { postElement,delElement } from "../utils/simpleControllers";

export const getAllUsers = async (req : Request,res : Response ) =>{
    try {
        const usersAll = await tbUsers.findAll({
            include: 
            [{model: tbDifficulties,
            as: "difficulty",
            attributes: ["difficultyId","difficultyColorName","difficultyFrenchScale","difficultyVerminScale"]},
            {
            model: tbProfilePictures,
            as: "profilePicture",
            attributes: ["pictureId","pictureLink","pictureLegend"]
            },{
            model: tbStatus,
            as: "status",
            attributes: ["statusId","statusName"]
            }]
        });
        res.status(200).json(usersAll);

    } catch (error) {
    res.status(500).json({ error: (error as any).message });
};  
};
export const getUserbyPk = async (req:Request,res: Response) =>{
    try {
        const id = req.params.id as string;
        const user = await tbUsers.findByPk(id,{
            include: [{model: tbDifficulties,
            as: "averageDifficultiy",
            attributes: ["difficultyId","difficultyColorName","difficultyFrenchScale","difficultyVerminScale"]},
            {
            model: tbProfilePictures,
            as: "profilePicture",
            attributes: ["pictureId","pictureLink","pictureLegend"]
            },{
            model: tbStatus,
            as: "status",
            attributes: ["statusId","statusName"]
            }]});
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: (error as any).message })
    }
};
export const postUsers = async (req:Request,res:Response) => {
    postElement(req,res,tbUsers)
};
export const deleteUsers = async (req:Request,res:Response)=>{
    delElement(req,res,tbUsers)
};
