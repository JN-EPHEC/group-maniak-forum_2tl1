import express from 'express';
import * as tbGymControllers from "../controllers/tbGymControllers";

const router = express.Router()

router.get("/",tbGymControllers.getAllGyms);


router.get("/:id",tbGymControllers.getGymbyPk);
///post 


router.post("/", tbGymControllers.postGym);
// ici je supprime selon son id
router.delete("/:id", tbGymControllers.delGym);

export default router;
