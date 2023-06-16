import tokenMiddleware from "../middleware/token.middleware";
import castController from "../controllers/cast.controller";
import express from "express";

const router = express.Router();

router.get('/cast', castController.getListCast)
router.get('/cast/:id', castController.getDetail)
router.post('/cast', castController.addCast)
router.delete('/cast/:id', castController.removeCast)
router.put('/cast/:id', castController.updateCast)

export default router;