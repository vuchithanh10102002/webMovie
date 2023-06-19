"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const genres_1 = __importDefault(require("../models/genres"));
class genresController {
    static getListGenres(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const genres = yield genres_1.default.find();
                if (!genres)
                    return res.status(404).json("genres not found");
                return res.status(200).json(genres);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    static addGenres(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newGenre = yield new genres_1.default({
                    genre: req.body.genre,
                    pathname: req.params.pathname,
                    status: req.body.status
                });
                const genres = yield newGenre.save();
                return res.status(200).json(genres);
            }
            catch (error) {
                return res.status(500).json(error.message);
            }
        });
    }
    static removeGenres(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const genreID = req.params.id;
                const genre = yield genres_1.default.findById(genreID);
                if (!genre)
                    return res.status(404).json("genre not found");
                yield genre.deleteOne();
                return res.status(200).json("Remove favorite success");
            }
            catch (error) {
                return res.status(500).json(error.message);
            }
        });
    }
    static updateGenres(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const genreID = req.params.id;
                const genre = yield genres_1.default.findById(genreID);
                if (!genre)
                    return res.status(404).json("genre not found");
                const newGenre = {
                    genre: req.body.genre,
                    pathname: req.params.pathname,
                    status: req.body.status
                };
                yield genre.updateOne(newGenre);
                return res.status(200).json("Update favorite success");
            }
            catch (error) {
                res.status(500).json(error.message);
            }
        });
    }
}
exports.default = genresController;
//# sourceMappingURL=genres.controller.js.map