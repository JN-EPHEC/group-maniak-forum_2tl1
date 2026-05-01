
import { tbUsers,tbComments,tbReplies,sequelize} from  "../models/index.js";

export async function getAllService() {
return tbReplies.findAll({
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
}

export async function getByPkService(id:number){
    return tbReplies.findAll({
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
        });
}

export async function postService(data: {
  parentId: number;
  commentsTxt: string;
  userId: number;
  boulderId: number;
}) {
  const t = await sequelize.transaction();

  try {
    // 1) Créer le commentaire enfant
    const childComment = await tbComments.create(
      {
        commentsTxt: data.commentsTxt,
        userId: data.userId,
        boulderId: data.boulderId,
      },
      { transaction: t }
    );

    // 2) Créer la relation reply
    const reply = await tbReplies.create(
      {
        commentsId: data.parentId,
        commentsrepliesId: childComment.commentsId,
      },
      { transaction: t }
    );

    await t.commit();

    return {
      reply,
      childComment,
    };

  } catch (err) {
    await t.rollback();
    throw err;
  }
}
export async function delService(id: number) {
  const element = await tbReplies.findByPk(id);
  if (!element) return null;

  await element.destroy();
  return element;
}