import type { Request, Response } from "express";
import { tbUsers,tbComments,tbBoulders,tbAreaGyms,tbReplies} from "../models";
import { postElement,delElement } from "../utils/simpleControllers";
import { Op, Sequelize } from "sequelize"

export const getAllComments = async (req : Request,res : Response ) =>{
    try {
        const json = await tbComments.findAll({
            include: 
            [  
                {
                model: tbUsers,
                as: "author",
                attributes: ["userId","userFName","userLName","userPseudo"]
                },{
                model: tbBoulders,
                as:"boulder",
                attributes: ["boulderId","boulderDesc","boulderLink","boulderReleaseDate","boulderEndDate","difficultyId","userId","areaId","boulderImageUrl"],
                include :[ {
                model: tbAreaGyms,
                as: "area",
                attributes: ["areaId","areaName"]
                            }]
                },{
                model: tbReplies,
                as: "isReplyOf",
                required: false,
                attributes: []
                },
            ],
            where: Sequelize.where(
                    Sequelize.col("isReplyOf.commentsrepliesId"),
                    null
                )
        });
        res.status(200).json(json);

    } catch (error) {
    res.status(500).json({ error: (error as any).message });
};  
};
export const getCommentsbyPk = async (req:Request,res: Response) =>{
    try {
        const id = req.params.id as string;
        const json = await tbComments.findByPk(id,{
            include:
            [  
                {
                model: tbUsers,
                as: "author",
                attributes: ["userId","userFName","userLName","userPseudo"]
                },{
                model: tbBoulders,
                as:"boulder",
                attributes: ["boulderId","boulderDesc","boulderLink","boulderReleaseDate","boulderEndDate","difficultyId","userId","areaId","boulderImageUrl"],
                include :[ {
                model: tbAreaGyms,
                as: "area",
                attributes: ["areaId","areaName"]
                            }]
                },{
                model: tbReplies,
                as: "isReplyOf",
                required: false,
                attributes: []
                },
            ],
        })
        res.status(200).json(json);
    } catch (error) {
        res.status(500).json({ error: (error as any).message })
    }
};
export const getCommentsbyUser = async (req:Request,res: Response) =>{
    try {
        const id = req.params.id as string;
        const json = await tbComments.findAll({
            where:{userId:id},
            include:
            [  
                {
                model: tbUsers,
                as: "author",
                attributes: ["userId","userFName","userLName","userPseudo"]
                },{
                model: tbBoulders,
                as:"boulder",
                attributes: ["boulderId","boulderDesc","boulderLink","boulderReleaseDate","boulderEndDate","difficultyId","userId","areaId","boulderImageUrl"],
                include :[ {
                model: tbAreaGyms,
                as: "area",
                attributes: ["areaId","areaName"]
                            }]
                },{
                model: tbReplies,
                as: "isReplyOf",
                required: false,
                attributes: []
                },
            ],
        })
        res.status(200).json(json);
    } catch (error) {
        res.status(500).json({ error: (error as any).message })
    }
};
export const getCommentsbyBoulders = async (req:Request,res: Response) =>{
    try {
        const id = req.params.id as string;
        const json = await tbComments.findAll({
            where:{[Op.and]: [
          { userId: id },
          Sequelize.where(
            Sequelize.col("isReplyOf.commentsrepliesId"),
            null
          )
        ]},
            include:
            [  
                {
                model: tbUsers,
                as: "author",
                attributes: ["userId","userFName","userLName","userPseudo"]
                },{
                model: tbBoulders,
                as:"boulder",
                attributes: ["boulderId","boulderDesc","boulderLink","boulderReleaseDate","boulderEndDate","difficultyId","userId","areaId","boulderImageUrl"],
                include :[ {
                model: tbAreaGyms,
                as: "area",
                attributes: ["areaId","areaName"]
                            }]
                },{
                model: tbReplies,
                as: "isReplyOf",
                required: false,
                attributes: []
                },
            ],
        })
        res.status(200).json(json);
    } catch (error) {
        res.status(500).json({ error: (error as any).message })
    }
};

export const postComments = async (req:Request,res:Response) => {
    postElement(req,res,tbComments)
};
export const deleteComments = async (req:Request,res:Response)=>{
    delElement(req,res,tbComments)
};
