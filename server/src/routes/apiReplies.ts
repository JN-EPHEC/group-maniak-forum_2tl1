import express from 'express';
import * as tbReplies from "../controllers/tbRepliesControllers";

const router = express.Router()
//GET
router.get("/",tbReplies.getAllReplies);
router.get("/comment/:id",tbReplies.getRepliesbyComments);
//POST
router.post("/",tbReplies.postReplies);
//DELETE
router.delete("/:id",tbReplies.deleteReplies);

export default router