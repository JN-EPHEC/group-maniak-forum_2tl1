import type { Request, Response } from "express";
import { tbUsers,tbComments,tbReplies,sequelize} from  "../models/index.js";
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
export const postReplies = async (req:Request,res: Response) => {
    const t = await sequelize.transaction();

    try {
        const { parentId, commentsTxt, userId, boulderId } = req.body;

        if (!parentId || !commentsTxt || !userId || !boulderId) {
            return res.status(400).json({ error: "Missing fields" });
        }

        // Créer le commentaire enfant
        const childComment = await tbComments.create(
            {
                commentsTxt,
                userId,
                boulderId
            },
            { transaction: t }
        );

        // Créer la relation reply
        const reply = await tbReplies.create(
            {
                commentsId: parentId,
                commentsrepliesId: childComment.commentsId
            },
            { transaction: t }
        );

        await t.commit();

        return res.status(201).json({
            message: "Reply created successfully",
            reply,
            childComment
        });

    } catch (error) {
        await t.rollback();
        console.error(error);
        return res.status(500).json({ error: "Failed to create reply" });
    }
};
export const deleteReplies = async (req:Request,res:Response)=>{
    delElement(req,res,tbReplies)
};