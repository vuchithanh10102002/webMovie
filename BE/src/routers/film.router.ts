import tokenMiddleware from "../middleware/token.middleware";
import filmController from "../controllers/film.controller";
import express from "express";

const router = express.Router();

router.get("/film", filmController.getListFilms);
router.post("/film", filmController.addFilm);
router.delete("/film/:id", filmController.removeFilm);
router.put("/film/:id", filmController.updateFilm);
router.get("/film/:id", filmController.getDetail);

export default router;