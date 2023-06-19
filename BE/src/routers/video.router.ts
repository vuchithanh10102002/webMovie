import express from "express";
import tokenMiddleware from "../middleware/token.middleware";
import videoController from "../controllers/video.controller";

const router = express.Router();

router.get("/video/:id", videoController.getVideo);
router.post("/video", tokenMiddleware.tokenAuth, videoController.addVideo);
router.put("/video/:id", tokenMiddleware.tokenAuth, videoController.updateVideo);
router.delete("/video/:id", tokenMiddleware.tokenAuth, videoController.removeVideo);

export default router;