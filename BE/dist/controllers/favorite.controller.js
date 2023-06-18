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
const favorite_1 = __importDefault(require("../models/favorite"));
class favoriteController {
    static getFavoriteOfUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userID = req.params;
                const favorite = yield favorite_1.default.find(userID);
                return res.status(200).json(favorite);
            }
            catch (err) {
                return res.status(500).json(err);
            }
        });
    }
    static addFavorite(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const isFavorite = yield favorite_1.default.findOne({
                    user: req.body.user,
                    idFilm: req.body.idFilm,
                });
                if (isFavorite)
                    return res.status(200).json(isFavorite);
                const newFavorite = yield new favorite_1.default({
                    user: req.body.user,
                    type: req.body.type,
                    idFilm: req.body.idFilm,
                    title: req.body.title,
                    poster: req.body.poster,
                    rate: req.body.rate,
                    status: req.body.status
                });
                const favorite = yield newFavorite.save();
                return res.status(201).json(favorite);
            }
            catch (err) {
                return res.status(500).json(err);
            }
        });
    }
    static removeFavorite(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const favoriteId = req.params.id;
                const favorite = yield favorite_1.default.findOne({
                    user: req.body.user,
                    _id: favoriteId
                });
                if (!favorite)
                    return res.status(404).json("Not found");
                yield favorite.deleteOne();
                return res.status(200).json("Remove favorite success");
            }
            catch (err) {
                return res.status(500).json(err);
            }
        });
    }
}
exports.default = favoriteController;
//# sourceMappingURL=favorite.controller.js.map