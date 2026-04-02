import express from "express";
import type { Request,Response,NextFunction } from "express";

export const basicAuth = (req:Request,res:Response,next:NextFunction) => {
    let header = req.headers.authorization;
    if(!header || !header.startsWith("Basic ")){
        res.setHeader("WWW-Authenticate", 'Basic realm="Zone Admin');
        return res.status(401).send("Unauthorized");
    };
    
    let base64String = header.split("Basic")[1]?.trim();
    const credentials = Buffer.from(base64String!,'base64').toString('utf-8');
    let [user,psw] = credentials.split(':');
    let valideUser = "admin";
    let validpwd = "supersecret";
    if(user === valideUser && psw ===  validpwd ){return next();}else{
        return res.status(401).send("Unauthorized");
    };
};