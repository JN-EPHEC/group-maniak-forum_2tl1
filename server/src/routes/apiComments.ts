import express from 'express';
import * as tbComments from "../controllers/tbCommentsControllers";

const router = express.Router()


//GET
router.get("/",tbComments.getAllComments);
router.get("/:id",tbComments.getCommentsbyPk);
router.get("/author/:id",tbComments.getCommentsbyUser);
router.get("/boulder/:id",tbComments.getCommentsbyBoulders);

//POST 
router.post("/",tbComments.postComments);
//DEL
router.delete("/:id",tbComments.deleteComments);
export default router