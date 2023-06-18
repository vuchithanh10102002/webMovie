import tokenMiddleware from "../middleware/token.middleware";
import castController from "../controllers/cast.controller";
import express from "express";

const router = express.Router();

router.get('/cast', tokenMiddleware.tokenAuth, castController.getListCast)
router.get('/cast/:id', tokenMiddleware.tokenAuth, castController.getDetail)
router.post('/cast', tokenMiddleware.tokenAuth, castController.addCast)
router.delete('/cast/:id', tokenMiddleware.tokenAuth, castController.removeCast)
router.put('/cast/:id', tokenMiddleware.tokenAuth, castController.updateCast)

export default router;