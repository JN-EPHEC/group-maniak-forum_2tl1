import express from "express";
import type { Request,Response,NextFunction } from "express";

export const checkSexeParam = (req:Request, res: Response,next:NextFunction) => {
    if(req.params.sexe == "M" || req.params.sexe == "F" || req.params.sexe == "X") {
        next()
    }else{
        res.status(404).json({"message" : "Le sexe n'est pas valide"})
    }
};