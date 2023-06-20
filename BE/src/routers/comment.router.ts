import express from "express";
import commentController from "../controllers/comment.controller";
import tokenMiddleware from "../middleware/token.middleware";

const router = express.Router();

router.get('/comment/:user',commentController.getComments);
router.get('/comment/film/:id',commentController.getAllComments);
router.post("/comment", tokenMiddleware.tokenAuth , commentController.addComment);
router.delete("/comment/:id", tokenMiddleware.tokenAuth , commentController.removeComment);

export default router;