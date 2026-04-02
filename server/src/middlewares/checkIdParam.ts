import express from "express";
import type { Request,Response,NextFunction } from "express";

export const checkIdParam = (req:Request, res: Response,next:NextFunction) => {
    let convNum = Number(req.params.id);
    if(Number.isInteger(convNum) && convNum >= 0) {
        next()
    }else{
        res.status(404).json({"message" : "L'id est invalide"})
    }
};