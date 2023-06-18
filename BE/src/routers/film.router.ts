import tokenMiddleware from "../middleware/token.middleware";
import filmController from "../controllers/film.controller";
import express from "express";

const router = express.Router();

router.get("/film", tokenMiddleware.tokenAuth, filmController.getListFilms);
router.post("/film", tokenMiddleware.tokenAuth, filmController.addFilm);
router.delete("/film/:id", tokenMiddleware.tokenAuth, filmController.removeFilm);
router.put("/film/:id", tokenMiddleware.tokenAuth, filmController.updateFilm);
router.get("/film/:id", tokenMiddleware.tokenAuth, filmController.getDetail);

export default router;