import tokenMiddleware from "middleware/token.middleware";
import GenresController from "../controllers/genres.controller";
import express from "express";

const router = express.Router();

router.get("/genres", GenresController.getListGenres);
router.post("/genres", GenresController.addGenres);
router.delete("/genres/:id", GenresController.removeGenres);
router.put("/genres/:id", GenresController.updateGenres);

export default router;
