import type { Request, Response } from "express";
import { tbUsers,tbDifficultyUsers,tbStatus,tbProfilePictures,tbDifficulties } from  "../models/index.js";
import { postElement,delElement } from "../utils/simpleControllers.js";
import bcrypt from "bcrypt";

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const usersAll = await tbUsers.findAll({
            attributes: { exclude: ["userPassHashed"] },
            include: [
                {
                    model: tbDifficultyUsers,
                    as: "difficultyUsers",
                    attributes: ["difficultyId", "createdAt"],
                    limit: 1,
                    order: [["createdAt", "DESC"]],
                    include: [
                        {
                            model: tbDifficulties,
                            as: "difficulty",
                            attributes: ["difficultyId", "difficultyColorName","difficultyFrenchScale","difficultyVerminScale"]
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

        res.status(200).json(usersAll);

    } catch (error) {
        res.status(500).json({ error: (error as any).message });
    }
};

export const getUserbyPk = async (req:Request,res: Response) =>{
    try {
        const id = req.params.id as string;
        const user = await tbUsers.findByPk(id,{
                        include: [
                {
                    model: tbDifficultyUsers,
                    as: "difficultyUsers",
                    attributes: ["difficultyId", "createdAt"],
                    limit: 1,
                    order: [["createdAt", "DESC"]],
                    include: [
                        {
                            model: tbDifficulties,
                            as: "difficulty",
                            attributes: ["difficultyId", "difficultyColorName","difficultyFrenchScale","difficultyVerminScale"]
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

        res.status(200).json(user);

    } catch (error) {
        res.status(500).json({ error: (error as any).message })
    }
};

export const getUserbyStatus = async (req:Request,res: Response) =>{
    try {
        const id = req.params.id as string;
        const user = await tbUsers.findAll({
            where:{statusId:id},
            include: [{model: tbDifficultyUsers,
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
    try {
    const { password, ...rest } = req.body;

    if (!password) {
      return res.status(400).json({ message: "Password manquant" });
    }

    // Hash du mot de passe
    const hashed = await bcrypt.hash(password, 10);

    // Création de l'utilisateur
    const newUser = await tbUsers.create({
      ...rest,
      userPassHashed: hashed,
    });

    return res.status(201).json({
      message: "Utilisateur créé",
      user: {
        id: newUser.userId,
        pseudo: newUser.userPseudo,
        mail: newUser.userMail,
      },
    });
    } catch (error) {
        res.status(500).json({ error: (error as any).message });
    }
};
export const deleteUsers = async (req:Request,res:Response)=>{
    delElement(req,res,tbUsers)
};
