import type { Request, Response } from "express";
import * as tbUsersServices from "../services/tbUsersServices.js"


export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const usersAll = await tbUsersServices.getAllService()

        res.status(200).json(usersAll);

    } catch (error) {
        res.status(500).json({ error: (error as any).message });
    }
};


export const getUserbyPk = async (req:Request,res: Response) =>{
    try {
        const id = Number(req.params.id);
        const user = await tbUsersServices.getByPkService(id);
        res.status(200).json(user);

    } catch (error) {
        res.status(500).json({ error: (error as any).message })
    }
};

export const getUserbyStatus = async (req:Request,res: Response) =>{
    try {
        const id = Number(req.params.id);
        const user = await tbUsersServices.getByStatusService(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: (error as any).message })
    }
};
export const postUsers = async (req:Request,res:Response) => {
    try {
    const { userMail, userLName, userFName, userPseudo, password, pictureId, statusId } = req.body;

    if (!password) {
      return res.status(400).json({ message: "Password manquant" });
    }

    const newUser = await tbUsersServices.postService({
      userMail,
      userLName,
      userFName,
      userPseudo,
      password,
      pictureId,
      statusId,
    });

    return res.status(201).json({
      message: "Utilisateur créé",
      user: {
        pseudo: newUser.userPseudo,
        mail: newUser.userMail,
      },
    });

  } catch (error) {
    return res.status(500).json({ error: (error as any).message });
  }
};
export const deleteUsers = async (req:Request,res:Response)=>{
              try {
                const id = Number(req.params.id);
                const deleted = await tbUsersServices.delService(id);
                if (!deleted) {
                  return res.status(404).json({ error: "pas d'élement ayant cet ID" });
                }
                res.status(204).json({
                  message: `l'élement ${id} a été supprimé`
                });
              } catch (error) {
                res.status(500).json({ error: (error as any).message });
              }
};
