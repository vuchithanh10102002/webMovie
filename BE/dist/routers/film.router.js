"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const film_controller_1 = __importDefault(require("../controllers/film.controller"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/film", film_controller_1.default.getListFilms);
router.post("/film", film_controller_1.default.addFilm);
router.delete("/film/:id", film_controller_1.default.removeFilm);
router.put("/film/:id", film_controller_1.default.updateFilm);
router.get("/film/:id", film_controller_1.default.getDetail);
exports.default = router;
//# sourceMappingURL=film.router.js.map