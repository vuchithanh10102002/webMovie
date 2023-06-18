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
const film_1 = __importDefault(require("../models/film"));
class filmController {
    static getListFilms(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const film = yield film_1.default.find();
                if (!film)
                    return res.status(404).json("Film not found");
                return res.status(200).json(film);
            }
            catch (error) {
                return res.status(500).json(error.message);
            }
        });
    }
    static getDetail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const filmID = req.params.id;
                const film = yield film_1.default.findById(filmID);
                if (!film)
                    return res.status(404).json("Film not found");
                return res.status(200).json(film);
            }
            catch (error) {
                return res.status(500).json(error.message);
            }
        });
    }
    static addFilm(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newFilm = yield new film_1.default({
                    type: req.body.mediaType,
                    imageUrl: req.body.imageUrl,
                    title: req.body.title,
                    overview: req.body.overview,
                    rate: req.body.rate,
                    toprate: req.body.toprate,
                    popular: req.body.popular,
                    upcoming: req.body.popular,
                    realeaseDate: req.body.realeaseDate,
                    genres: req.body.genres,
                    background: req.body.background,
                    runtime: req.body.runtime,
                    cast: req.body.cast,
                    status: req.body.status
                });
                const film = yield newFilm.save();
                return res.status(200).json(film);
            }
            catch (error) {
                return res.status(500).json(error.message);
            }
        });
    }
    static removeFilm(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const filmID = req.params.id;
                const film = yield film_1.default.findById(filmID);
                if (!film)
                    return res.status(404).json("film not found");
                yield film.deleteOne();
                return res.status(200).json("Delete film success");
            }
            catch (error) {
                res.status(500).json(error.message);
            }
        });
    }
    static updateFilm(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const filmID = req.params.id;
                const film = yield film_1.default.findById(filmID);
                if (!film)
                    return res.status(404).json("Film not found");
                const newFilm = {
                    type: req.body.mediaType,
                    imageUrl: req.body.imageUrl,
                    title: req.body.title,
                    overview: req.body.overview,
                    rate: req.body.rate,
                    toprate: req.body.toprate,
                    popular: req.body.popular,
                    upcoming: req.body.popular,
                    realeaseDate: req.body.realeaseDate,
                    genres: req.body.genres,
                    background: req.body.background,
                    runtime: req.body.runtime,
                    cast: req.body.cast,
                    status: req.body.status
                };
                yield film.updateOne(newFilm);
                return res.status(200).json("Update film success");
            }
            catch (error) {
                res.status(500).json(error.message);
            }
        });
    }
}
exports.default = filmController;
//# sourceMappingURL=film.controller.js.map