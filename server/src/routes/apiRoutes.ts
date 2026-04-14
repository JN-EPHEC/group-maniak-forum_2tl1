import express from 'express';
import type { Request,Response } from "express";
import userRoutes from './userRoutes.js';
import apiTestJWT from "./apiTestJWT.js";
import apiUser from "./apiUser.js";
import apiDifficulties from './apiDifficulties.js';
import apiGyms from './apiGyms.js'
import apiAreaGyms from './apiAreaGyms.js';
import apiBoulders from './apiBoulders.js';
import apiRatings from './apiRatings.js';
import apiComments from "./apiComments.js"
const router = express.Router()
//Racine
router.get("/", (req : Request,res:Response) => {
    res.send('Salut c\'est jhonny Bienvenu sur mon API');
    console.log(typeof(req),typeof(res));
});
//Redirection
router.use('/comments',apiComments);
router.use("/ratings",apiRatings);
router.use("/gyms",apiGyms);
router.use("/boulders",apiBoulders);
router.use("/difficulties",apiDifficulties);
router.use("/areagyms",apiAreaGyms);
router.use('/users',userRoutes);
router.use('/auth',apiTestJWT);
router.use('/profile',apiUser);

export default router;