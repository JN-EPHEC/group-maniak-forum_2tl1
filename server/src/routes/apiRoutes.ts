import express from 'express';
import type { Request,Response } from "express";
import apiLogin from "./apiLogin.js";
import apiUser from "./apiUsers.js";
import apiDifficulties from './apiDifficulties.js';
import apiGyms from './apiGyms.js'
import apiAreaGyms from './apiAreaGyms.js';
import apiBoulders from './apiBoulders.js';
import apiRatings from './apiRatings.js';
import apiComments from "./apiComments.js";
import apiReplies from "./apiReplies.js";
import apiAvatar from "./apiAvatar.js";
import apiStatus from "./apiStatus.js"
const router = express.Router()
//Racine
router.get("/", (req : Request,res:Response) => {
    res.send('Salut c\'est jhonny Bienvenu sur mon API');
    console.log(typeof(req),typeof(res));
});
//Redirection
router.use("/status",apiStatus);
router.use("/avatar",apiAvatar);
router.use('/replies',apiReplies)
router.use('/comments',apiComments);
router.use("/ratings",apiRatings);
router.use("/gyms",apiGyms);
router.use("/boulders",apiBoulders);
router.use("/difficulties",apiDifficulties);
router.use("/areagyms",apiAreaGyms);
router.use('/users',apiUser);
router.use('/profile',apiUser);

router.use('/auth',apiLogin);
export default router;