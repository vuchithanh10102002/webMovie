"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const token_middleware_1 = __importDefault(require("../middleware/token.middleware"));
const film_controller_1 = __importDefault(require("../controllers/film.controller"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/film", token_middleware_1.default.tokenAuth, film_controller_1.default.getListFilms);
router.post("/film", token_middleware_1.default.tokenAuth, film_controller_1.default.addFilm);
router.delete("/film/:id", token_middleware_1.default.tokenAuth, film_controller_1.default.removeFilm);
router.put("/film/:id", token_middleware_1.default.tokenAuth, film_controller_1.default.updateFilm);
router.get("/film/:id", token_middleware_1.default.tokenAuth, film_controller_1.default.getDetail);
router.get("/film/genres/:id", token_middleware_1.default.tokenAuth, film_controller_1.default.getFilmForGenres);
exports.default = router;
//# sourceMappingURL=film.router.js.map