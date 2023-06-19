import tokenMiddleware from "../middleware/token.middleware";
import filmController from "../controllers/film.controller";
import express from "express";

const router = express.Router();

router.get("/film", filmController.getListFilms);
router.post("/film", tokenMiddleware.tokenAuth, filmController.addFilm);
router.delete("/film/:id", tokenMiddleware.tokenAuth, filmController.removeFilm);
router.put("/film/:id", tokenMiddleware.tokenAuth, filmController.updateFilm);
router.get("/film/:id", tokenMiddleware.tokenAuth, filmController.getDetail);
router.get("/film/genres/:id", tokenMiddleware.tokenAuth, filmController.getFilmForGenres);

export default router;