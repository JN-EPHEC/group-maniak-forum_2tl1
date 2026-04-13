import express from 'express';
import * as tbDifficulties from "../controllers/tbDifficultiesControllers.js";

const router = express.Router()

router.get("/",tbDifficulties.getAllDifficulties);

router.get("/:id",tbDifficulties.getDifficultybyPk);
///post 
router.post("/", tbDifficulties.postDifficulty);
// ici je supprime un user dans Users selon son id
router.delete("/:id", tbDifficulties.delDifficulty);

export default router;
