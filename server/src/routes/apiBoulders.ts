import express from 'express';
import * as tbBoulders from "../controllers/tbBouldersControllers";

const router = express.Router()

//getters
router.get('/',tbBoulders.getAllBoulders);
router.get('/:id',tbBoulders.getBoulderbyPk);
router.get('/byArea/:id',tbBoulders.getBoulderByArea);
router.get('/bySetter/:id',tbBoulders.getBoulderBySetter);
router.get('/byDifficulty/:id',tbBoulders.getBoulderByDifficulty);
//post
router.post('/',tbBoulders.postBoulder);
//del
router.delete('/:id',tbBoulders.deleteBoulder);

export default router