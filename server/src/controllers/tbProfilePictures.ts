import type { Request, Response } from "express";
import { tbProfilePictures } from "../models/index.js";
import { postElement,getAll,getByPk,delElement } from "../utils/simpleControllers.js";
// GET ALL ProfilePictures
export const getAllProfilePictures = async (req : Request,res : Response ) =>{
    getAll(req,res,tbProfilePictures);
};
// GET ProfilePicture by PK
export const getProfilePicturebyPk = async (req:Request,res: Response) =>{
   getByPk(req,res,tbProfilePictures);
};
// POST ProfilePicture
export const postProfilePicture = async (req: Request,res : Response) => {
    postElement(req,res,tbProfilePictures);
};

// DEL ProfilePicture
export const delProfilePicture = async (req: Request,res : Response) => {
    delElement(req,res,tbProfilePictures);
};