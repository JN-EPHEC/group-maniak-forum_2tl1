
import { sequelize,tbRatings,tbUsers,tbBoulders,tbAreaGyms,tbDifficultyUsers  } from "../models/index.js";

export async function getAllService() {
  return tbRatings.findAll({
    include: [{
      model: tbUsers,
      as: "author",
      attributes: ["userId","userFName","userLName","userPseudo"]
        },{
          model: tbBoulders,
          as:"boulder",
          attributes: ["boulderId","boulderName","boulderDesc","boulderLink","boulderReleaseDate","boulderEndDate","difficultyId","userId","areaId","boulderImageUrl"],
          include :[ {
          model: tbAreaGyms,
          as: "area",
          attributes: ["areaId","areaName"]
        }]
      }]
  });
}
export async function getByPkService(id:number){
    return tbRatings.findByPk(id,{
                include:  [{
            model: tbUsers,
            as: "author",
            attributes: ["userId","userFName","userLName","userPseudo"]
            },{
                model: tbBoulders,
                as:"boulder",
                attributes: ["boulderId","boulderName","boulderDesc","boulderLink","boulderReleaseDate","boulderEndDate","difficultyId","userId","areaId","boulderImageUrl"],
                include :[ {
                model: tbAreaGyms,
                as: "area",
                attributes: ["areaId","areaName"]
            }]
            }]
        });
}
export async function getByUserService(id:number){
    return tbRatings.findAll({
            where : {userId:id},
            include: [{
            model: tbUsers,
            as: "author",
            attributes: ["userId","userFName","userLName","userPseudo"]
            },{
                model: tbBoulders,
                as:"boulder",
                attributes: ["boulderId","boulderName","boulderDesc","boulderLink","boulderReleaseDate","boulderEndDate","difficultyId","userId","areaId","boulderImageUrl"],
                include :[ {
                model: tbAreaGyms,
                as: "area",
                attributes: ["areaId","areaName"]
            }]
            }]
        });
}
export async function getByBoulderService(id:number){
    return tbRatings.findAll({
            where : {boulderId:id},
            include: [{
            model: tbUsers,
            as: "author",
            attributes: ["userId","userFName","userLName","userPseudo"]
            },{
                model: tbBoulders,
                as:"boulder",
                attributes: ["boulderId","boulderName","boulderDesc","boulderLink","boulderReleaseDate","boulderEndDate","difficultyId","userId","areaId","boulderImageUrl"],
                include :[ {
                model: tbAreaGyms,
                as: "area",
                attributes: ["areaId","areaName"]
            }]
            }]
        });
}
export async function getByAreaService(id:number){
    return tbRatings.findAll({
            where : {areaId:id},
            include: [{
            model: tbUsers,
            as: "author",
            attributes: ["userId","userFName","userLName","userPseudo"]
            },{
                model: tbBoulders,
                as:"boulder",
                attributes: ["boulderId","boulderName","boulderDesc","boulderLink","boulderReleaseDate","boulderEndDate","difficultyId","userId","areaId","boulderImageUrl"],
                include :[ {
                model: tbAreaGyms,
                as: "area",
                attributes: ["areaId","areaName"]
            }]
            }]
        });
}
export async function postService(data: {
  rateNote: number;
  difficultyId: number;
  rateTxt: string;
  videoLink: string | null;
  userId: number;
  boulderId: number;
}) {
  const t = await sequelize.transaction();

  try {
    const rating = await tbRatings.create(
      {
        rateNote: data.rateNote,
        difficultyId: data.difficultyId,
        rateTxt: data.rateTxt,
        videoLink: data.videoLink,
        userId: data.userId,
        boulderId: data.boulderId,
      },
      { transaction: t }
    );

    await tbDifficultyUsers.findOrCreate({
      where: { userId: data.userId, boulderId: data.boulderId },
      defaults: { userId: data.userId, boulderId: data.boulderId },
      transaction: t,
    });

    await t.commit();
    return rating;

  } catch (err) {
    await t.rollback();
    throw err;
  }
};

export async function delService(id: number) {
  const element = await tbRatings.findByPk(id);
  if (!element) return null;

  await element.destroy();
  return element;
}