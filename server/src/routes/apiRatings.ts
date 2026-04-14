import express from 'express';
import * as tbRatings from "../controllers/tbRatingsControllers";

const router = express.Router()
//GET
router.get("/",tbRatings.getAllRatings);
router.get("/:id",tbRatings.getRatingsbyPk);
router.get("/author/:id",tbRatings.getRatingsByUser);
router.get("/boulder/:id",tbRatings.getRatingsByBoulders);
router.get("/area/:id",tbRatings.getRatingsByAreaGym);
//POST 
router.post("/",tbRatings.postRatings);
//DEL
router.delete("/:id",tbRatings.delRatings);
export default router
