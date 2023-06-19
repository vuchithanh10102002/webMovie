import tokenMiddleware from "../middleware/token.middleware";
import GenresController from "../controllers/genres.controller";
import express from "express";

const router = express.Router();

router.get("/genres", GenresController.getListGenres);
router.post("/genres", tokenMiddleware.tokenAuth, GenresController.addGenres);
router.delete("/genres/:id", tokenMiddleware.tokenAuth, GenresController.removeGenres);
router.put("/genres/:id", tokenMiddleware.tokenAuth, GenresController.updateGenres);

export default router;
