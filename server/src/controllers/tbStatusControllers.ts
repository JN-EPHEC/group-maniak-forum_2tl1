import type { Request, Response } from "express";
import { tbStatus } from "../models";
import { postElement,getAll,getByPk,delElement } from "../utils/simpleControllers";
// GET ALL status
export const getAllstatus = async (req : Request,res : Response ) =>{
    getAll(req,res,tbStatus);
};
// GET status by PK
export const getStatusbyPk = async (req:Request,res: Response) =>{
   getByPk(req,res,tbStatus);
};
// POST status
export const postStatus = async (req: Request,res : Response) => {
    postElement(req,res,tbStatus);
};

// DEL status
export const delStatus = async (req: Request,res : Response) => {
    delElement(req,res,tbStatus);
};