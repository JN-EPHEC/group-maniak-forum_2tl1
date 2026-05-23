
import { tbUsers,tbComments,tbBoulders,tbAreaGyms,tbReplies} from  "../models/index.js";
import { Op, Sequelize } from "sequelize"

export async function getAllService() {
  return tbComments.findAll({
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
}
export async function getByPkService(id:number){
    return tbComments.findAll({
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
}
export async function getByUserService(id:number){
    return tbComments.findAll({
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
}
export async function getByBoulderService(id:number){
    return tbComments.findAll({
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

}
export async function postCommentService(data:any) {
  return tbComments.create(data);
}
export async function delCommentService(id: number) {
  const element = await tbComments.findByPk(id);
  if (!element) return null;

  await element.destroy();
  return element;
}