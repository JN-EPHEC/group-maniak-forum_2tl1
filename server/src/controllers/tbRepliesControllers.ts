import type { Request, Response } from "express";
import { tbUsers,tbComments,tbReplies} from  "../models/index.js";
import { postElement,delElement } from "../utils/simpleControllers.js";

export const getAllReplies = async (req : Request,res : Response ) =>{
    try {
        const json = await tbReplies.findAll({
            include: 
            [  
                {
                model: tbComments,
                as: "parentComment",
                attributes: ["commentsId"] 
                },
                                {
                model: tbComments,
                as: "childComment",
                attributes: ["commentsId","commentsTxt","userId","boulderId"],
                include:  [{
                model: tbUsers,
                as: "author",
                attributes: ["userId","userFName","userLName","userPseudo"]
                }]
                }
            ],
        });
        res.status(200).json(json);

    } catch (error) {
    res.status(500).json({ error: (error as any).message });
};  
};
export const getRepliesbyComments = async (req:Request,res: Response) =>{
    try {
        const id = req.params.id as string;
        const json = await tbReplies.findAll({
            where : {commentsId:id},
            include:
                [{
                model: tbComments,
                as: "parentComment",
                attributes: ["commentsId"] 
                },{
                model: tbComments,
                as: "childComment",
                attributes: ["commentsId","commentsTxt","userId","boulderId"],
                include:  [{
                model: tbUsers,
                as: "author",
                attributes: ["userId","userFName","userLName","userPseudo"]
                }]
                }]
        })
        res.status(200).json(json);
    } catch (error) {
        res.status(500).json({ error: (error as any).message })
    }
};
export const postReplies = async (req:Request,res:Response) => {
    postElement(req,res,tbReplies)
};
export const deleteReplies = async (req:Request,res:Response)=>{
    delElement(req,res,tbReplies)
};