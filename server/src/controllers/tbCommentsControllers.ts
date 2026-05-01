import type { Request, Response } from "express";
import { tbUsers,tbComments,tbBoulders,tbAreaGyms,tbReplies} from  "../models/index.js";
import { postElement,delElement } from "../utils/simpleControllers.js";
import { Op, Sequelize } from "sequelize"

export const getAllComments = async (req : Request,res : Response ) =>{
    try {
        const json = await tbComments.findAll({
            where: {
        [Op.and]: [
          Sequelize.where(
            Sequelize.col("isReplyOf.commentsrepliesId"),
            null
          )
        ]
      },
      attributes: {
        include: [
          [
            Sequelize.fn("COUNT", Sequelize.col("replies.commentsId")),
            "replyCount"
          ]
        ]
      },
      include: [
        {
          model: tbUsers,
          as: "author",
          attributes: ["userId", "userFName", "userLName", "userPseudo"]
        },
        {
          model: tbBoulders,
          as: "boulder",
          attributes: [
            "boulderId", "boulderDesc", "boulderLink",
            "boulderReleaseDate", "boulderEndDate",
            "difficultyId", "userId", "areaId", "boulderImageUrl"
          ],
          include: [
            {
              model: tbAreaGyms,
              as: "area",
              attributes: ["areaId", "areaName"]
            }
          ]
        },
        // Filtre root comments
        {
          model: tbReplies,
          as: "isReplyOf",
          required: false,
          attributes: []
        },
        // Compte les replies
        {
          model: tbReplies,
          as: "replies",
          required: false,
          attributes: []
        }
      ],
      group: [
        "tbComments.commentsId",
        "author.userId",
        "boulder.boulderId",
        "boulder->area.areaId"
      ],
      order: [["commentsId", "DESC"]]
        });
        res.status(200).json(json);

    } catch (error) {
    res.status(500).json({ error: (error as any).message });
};  
};
export const getCommentsbyPk = async (req:Request,res: Response) =>{
    try {
        const id = req.params.id as string;
        const json = await tbComments.findAll({
            where: {
        [Op.and]: [
          { commentsId: id },
          Sequelize.where(
            Sequelize.col("isReplyOf.commentsrepliesId"),
            null
          )
        ]
      },
      attributes: {
        include: [
          [
            Sequelize.fn("COUNT", Sequelize.col("replies.commentsId")),
            "replyCount"
          ]
        ]
      },
      include: [
        {
          model: tbUsers,
          as: "author",
          attributes: ["userId", "userFName", "userLName", "userPseudo"]
        },
        {
          model: tbBoulders,
          as: "boulder",
          attributes: [
            "boulderId", "boulderDesc", "boulderLink",
            "boulderReleaseDate", "boulderEndDate",
            "difficultyId", "userId", "areaId", "boulderImageUrl"
          ],
          include: [
            {
              model: tbAreaGyms,
              as: "area",
              attributes: ["areaId", "areaName"]
            }
          ]
        },
        // Filtre root comments
        {
          model: tbReplies,
          as: "isReplyOf",
          required: false,
          attributes: []
        },
        // Compte les replies
        {
          model: tbReplies,
          as: "replies",
          required: false,
          attributes: []
        }
      ],
      group: [
        "tbComments.commentsId",
        "author.userId",
        "boulder.boulderId",
        "boulder->area.areaId"
      ],
      order: [["commentsId", "DESC"]]
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
           where: {
        [Op.and]: [
          { userId: id },
          Sequelize.where(
            Sequelize.col("isReplyOf.commentsrepliesId"),
            null
          )
        ]
      },
      attributes: {
        include: [
          [
            Sequelize.fn("COUNT", Sequelize.col("replies.commentsId")),
            "replyCount"
          ]
        ]
      },
      include: [
        {
          model: tbUsers,
          as: "author",
          attributes: ["userId", "userFName", "userLName", "userPseudo"]
        },
        {
          model: tbBoulders,
          as: "boulder",
          attributes: [
            "boulderId", "boulderDesc", "boulderLink",
            "boulderReleaseDate", "boulderEndDate",
            "difficultyId", "userId", "areaId", "boulderImageUrl"
          ],
          include: [
            {
              model: tbAreaGyms,
              as: "area",
              attributes: ["areaId", "areaName"]
            }
          ]
        },
        // Filtre root comments
        {
          model: tbReplies,
          as: "isReplyOf",
          required: false,
          attributes: []
        },
        // Compte les replies
        {
          model: tbReplies,
          as: "replies",
          required: false,
          attributes: []
        }
      ],
      group: [
        "tbComments.commentsId",
        "author.userId",
        "boulder.boulderId",
        "boulder->area.areaId"
      ],
      order: [["commentsId", "DESC"]]
        })
        res.status(200).json(json);
    } catch (error) {
        res.status(500).json({ error: (error as any).message })
    }
};
export const getCommentsbyBoulders = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;

    const json = await tbComments.findAll({
      where: {
        [Op.and]: [
          { boulderId: id },
          Sequelize.where(
            Sequelize.col("isReplyOf.commentsrepliesId"),
            null
          )
        ]
      },
      attributes: {
        include: [
          [
            Sequelize.fn("COUNT", Sequelize.col("replies.commentsId")),
            "replyCount"
          ]
        ]
      },
      include: [
        {
          model: tbUsers,
          as: "author",
          attributes: ["userId", "userFName", "userLName", "userPseudo"]
        },
        {
          model: tbBoulders,
          as: "boulder",
          attributes: [
            "boulderId", "boulderDesc", "boulderLink",
            "boulderReleaseDate", "boulderEndDate",
            "difficultyId", "userId", "areaId", "boulderImageUrl"
          ],
          include: [
            {
              model: tbAreaGyms,
              as: "area",
              attributes: ["areaId", "areaName"]
            }
          ]
        },
        // Filtre root comments
        {
          model: tbReplies,
          as: "isReplyOf",
          required: false,
          attributes: []
        },
        // Compte les replies
        {
          model: tbReplies,
          as: "replies",
          required: false,
          attributes: []
        }
      ],
      group: [
        "tbComments.commentsId",
        "author.userId",
        "boulder.boulderId",
        "boulder->area.areaId"
      ],
      order: [["commentsId", "DESC"]]
    });

    res.status(200).json(json);

  } catch (error) {
    res.status(500).json({ error: (error as any).message });
  }
};


export const postComments = async (req:Request,res:Response) => {
    postElement(req,res,tbComments)
};
export const deleteComments = async (req:Request,res:Response)=>{
    delElement(req,res,tbComments)
};
