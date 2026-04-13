import express from 'express';
import * as tbAreaGyms from "../controllers/tbAreaGymsControllers";

const router = express.Router()
//get
router.get("/",tbAreaGyms.getAllAreaGyms);

router.get("/:id",tbAreaGyms.getAreaGymbyPk);
///post 
router.post("/", tbAreaGyms.postAreaGym);
// del
router.delete("/:id", tbAreaGyms.delAreaGym);

export default router;
