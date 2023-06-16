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
const cast_1 = __importDefault(require("../models/cast"));
class castController {
    static getListCast(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cast = yield cast_1.default.find();
                if (!cast)
                    return res.status(404).json("Cast not found");
                return res.status(200).json(cast);
            }
            catch (error) {
                return res.status(500).json(error.message);
            }
        });
    }
    static getDetail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const castID = req.params.id;
                const cast = yield cast_1.default.findById(castID);
                if (!cast)
                    return res.status(404).json("Cast not found");
                return res.status(200).json(cast);
            }
            catch (error) {
                return res.status(500).json(error.message);
            }
        });
    }
    static addCast(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newCast = yield new cast_1.default({
                    name: req.body.name,
                    birthdate: req.body.birthdate,
                    title: req.body.title,
                    image: req.body.image
                });
                const cast = yield newCast.save();
                return res.status(200).json(cast);
            }
            catch (error) {
                return res.status(500).json(error.message);
            }
        });
    }
    static removeCast(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const castID = req.params.id;
                const cast = yield cast_1.default.findById(castID);
                if (!cast)
                    return res.status(404).json("Cast not found");
                yield cast.deleteOne();
                return res.status(200).json("Delete cast success");
            }
            catch (error) {
                return res.status(500).json(error.message);
            }
        });
    }
    static updateCast(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const castID = req.params.id;
                const cast = yield cast_1.default.findById(castID);
                if (!cast)
                    return res.status(404).json("Cast not found");
                const newCast = {
                    name: req.body.name,
                    birthdate: req.body.birthdate,
                    title: req.body.title,
                    image: req.body.image
                };
                yield (cast === null || cast === void 0 ? void 0 : cast.updateOne(newCast));
                return res.status(200).json("Update cast success");
            }
            catch (error) {
                return res.status(500).json(error.message);
            }
        });
    }
}
exports.default = castController;
//# sourceMappingURL=cast.controller.js.map