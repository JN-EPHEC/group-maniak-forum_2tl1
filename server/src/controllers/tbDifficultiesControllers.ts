import type { Request, Response } from "express";
import { tbDifficulties } from  "../models/index.js";
import { postElement,getAll,getByPk,delElement } from "../utils/simpleControllers.js";
// GET ALL Difficulties
export const getAllDifficulties = async (req : Request,res : Response ) =>{
    getAll(req,res,tbDifficulties);
};
// GET Difficulty by PK
export const getDifficultybyPk = async (req:Request,res: Response) =>{
   getByPk(req,res,tbDifficulties);
};
// POST difficulty
export const postDifficulty = async (req: Request,res : Response) => {
    postElement(req,res,tbDifficulties);
};

// DEL Difficulty
export const delDifficulty = async (req: Request,res : Response) => {
    delElement(req,res,tbDifficulties);
};