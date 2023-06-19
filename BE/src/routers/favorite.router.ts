import tokenMiddleware from "../middleware/token.middleware";
import favoriteController from "../controllers/favorite.controller";
import express from "express";

const router = express.Router();

router.get("/favorites/:user", tokenMiddleware.tokenAuth, favoriteController.getFavoriteOfUser);
router.post("/favorites", tokenMiddleware.tokenAuth, favoriteController.addFavorite);
router.delete("/favorites/:id", tokenMiddleware.tokenAuth, favoriteController.removeFavorite)


export default router