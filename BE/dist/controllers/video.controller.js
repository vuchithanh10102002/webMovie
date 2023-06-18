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
const video_1 = __importDefault(require("../models/video"));
class videoController {
    static getVideo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const idFilm = req.body.idFilm;
                const video = yield video_1.default.find(idFilm);
                if (!video)
                    return res.status(404).json("Video not found");
                return res.status(200).json(video);
            }
            catch (err) {
                return res.status(500).json(err);
            }
        });
    }
    static addVideo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newVideo = yield new video_1.default({
                    idFilm: req.body.idFilm,
                    title: req.body.title,
                    link: req.body.link,
                    description: req.body.description
                });
                const video = yield newVideo.save();
                return res.status(200).json(video);
            }
            catch (err) {
                return res.status(500).json(err);
            }
        });
    }
    static updateVideo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const idVideo = req.params.id;
                const video = yield video_1.default.findById(idVideo);
                if (!video)
                    return res.status(404).json("Video not found");
                const newVideo = {
                    idFilm: req.body.idFilm,
                    title: req.body.title,
                    link: req.body.link,
                    description: req.body.description
                };
                yield (video === null || video === void 0 ? void 0 : video.updateOne(newVideo));
                return res.status(200).json("Update video success");
            }
            catch (err) {
                return res.status(500).json(err);
            }
        });
    }
    static removeVideo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const videoID = req.params.id;
                const video = yield video_1.default.findById(videoID);
                yield (video === null || video === void 0 ? void 0 : video.deleteOne());
                return res.status(200).json("Video deleted success");
            }
            catch (err) {
                return res.status(500).json(err);
            }
        });
    }
}
exports.default = videoController;
//# sourceMappingURL=video.controller.js.map