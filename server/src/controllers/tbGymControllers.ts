import type { Request, Response } from "express";
import { tbGyms } from "../models";
import { postElement,getAll,getByPk,delElement } from "../utils/simpleControllers";
// GET ALL Gyms
export const getAllGyms = async (req : Request,res : Response ) =>{
    getAll(req,res,tbGyms);
};
// GET gym by PK
export const getGymbyPk = async (req:Request,res: Response) =>{
   getByPk(req,res,tbGyms);
};
// POST gym
export const postGym = async (req: Request,res : Response) => {
    postElement(req,res,tbGyms);
};

// DEL gym
export const delGym = async (req: Request,res : Response) => {
    delElement(req,res,tbGyms);
};