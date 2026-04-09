import express from 'express';
import type { Request,Response } from "express";
import userRoutes from './userRoutes.js';
import apiGroupes from './apiGroupes.js';
import apiTestJWT from "./apiTestJWT.js";
import apiUser from "./apiUser.js"
const router = express.Router()
//Racine
router.get("/", (req : Request,res:Response) => {
    res.send('Salut c\'est jhonny Bienvenu sur mon API');
    console.log(typeof(req),typeof(res));
});
//Redirection
router.use('/users',userRoutes);
router.use('/groupes',apiGroupes);
router.use('/auth',apiTestJWT);
router.use('/profile',apiUser)
export default router;