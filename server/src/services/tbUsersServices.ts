
import { tbUsers,tbDifficultyUsers,tbStatus,tbProfilePictures,tbDifficulties, tbBoulders,sequelize } from  "../models/index.js";
import bcrypt from "bcrypt";

export async function getAllService() {
return tbUsers.findAll({
            attributes: { exclude: ["userPassHashed"] },
            include: [
                {
                    model: tbDifficultyUsers,
                    as: "HighestLvl",
                    attributes: ["boulderId", "createdAt"],
                    separate: true,
                    limit: 1,
                    include: [
                        {
                            model: tbBoulders,
                            as: "boulder",
                            attributes: ["difficultyId", "boulderId","boulderName"],
                            include: [
                                {
                                    model: tbDifficulties,
                                    as: "difficulty",
                                    attributes: [
                                        "difficultyId",
                                        "difficultyColorName",
                                        "difficultyFrenchScale",
                                        "difficultyVerminScale"
                                    ]
                                }
                            ],
                            order: [["difficultyId", "DESC"]]
                        }
                    ]
                },
                {
                    model: tbProfilePictures,
                    as: "profilePicture",
                    attributes: ["pictureId", "pictureLink", "pictureLegend"]
                },
                {
                    model: tbStatus,
                    as: "status",
                    attributes: ["statusId", "statusName"]
                }
            ]
        });
}
export async function getByPkService(id:number){
    return tbUsers.findByPk(id,{
            attributes: { exclude: ["userPassHashed"] },
            include: [
                    {
                        model: tbDifficultyUsers,
                        as: "HighestLvl",
                        attributes: ["boulderId", "createdAt"],
                        separate: true,
                        limit: 1,
                        order: [[{ model: tbBoulders, as: "boulder" }, "difficultyId", "DESC"]],
                        include: [
                            {
                                model: tbBoulders,
                                as: "boulder",
                                attributes: ["difficultyId", "boulderId", "boulderName"],
                                include: [
                                    {
                                        model: tbDifficulties,
                                        as: "difficulty",
                                        attributes: [
                                            "difficultyId",
                                            "difficultyColorName",
                                            "difficultyFrenchScale",
                                            "difficultyVerminScale"
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                {
                    model: tbProfilePictures,
                    as: "profilePicture",
                    attributes: ["pictureId", "pictureLink", "pictureLegend"]
                },
                {
                    model: tbStatus,
                    as: "status",
                    attributes: ["statusId", "statusName"]
                }
            ]
        });

}
export async function getByStatusService(id:number){
    return tbUsers.findAll({
        where : {statusId:id},
            attributes: { exclude: ["userPassHashed"] },
            include: [
                {
                    model: tbDifficultyUsers,
                    as: "HighestLvl",
                    attributes: ["boulderId", "createdAt"],
                    separate: true,
                    limit: 1,
                    include: [
                        {
                            model: tbBoulders,
                            as: "boulder",
                            attributes: ["difficultyId", "boulderId","boulderName"],
                            include: [
                                {
                                    model: tbDifficulties,
                                    as: "difficulty",
                                    attributes: [
                                        "difficultyId",
                                        "difficultyColorName",
                                        "difficultyFrenchScale",
                                        "difficultyVerminScale"
                                    ]
                                }
                            ],
                            order: [["difficultyId", "DESC"]]
                        }
                    ]
                },
                {
                    model: tbProfilePictures,
                    as: "profilePicture",
                    attributes: ["pictureId", "pictureLink", "pictureLegend"]
                },
                {
                    model: tbStatus,
                    as: "status",
                    attributes: ["statusId", "statusName"]
                }
            ]
        });

}
export async function postService(data: {
  userMail: string;
  userLName: string | null;
  userFName: string | null;
  userPseudo: string;
  password: string;
  pictureId: number | null;
  statusId: number;
}) {
  // 1) Hash du mot de passe
  const hashed = await bcrypt.hash(data.password, 10);
  // 2) Création de l'utilisateur
  const newUser = await tbUsers.create({
    userMail: data.userMail,
    userLName: data.userLName,
    userFName: data.userFName,
    userPseudo: data.userPseudo,
    userPassHashed: hashed,
    pictureId: data.pictureId,
    statusId: data.statusId,
  });

  return newUser;
}
export const updateUser = async (userId: number, data: any) => {
  const user = await tbUsers.findByPk(userId);
  if (!user) return null;

  await user.update(data);
  return user;
};
export async function delService(id: number) {
  const element = await tbStatus.findByPk(id);
  if (!element) return null;

  await element.destroy();
  return element;
}