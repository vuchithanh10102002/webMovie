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
const comment_1 = __importDefault(require("../models/comment"));
class commentController {
    static getComments(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userID = req.params.user;
                const comments = yield comment_1.default.find({
                    user: userID
                });
                if (!comments)
                    return res.status(404).json("Not found");
                return res.status(200).json(comments);
            }
            catch (err) {
                return res.status(500).json(err);
            }
        });
    }
    static getAllComments(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const idFilm = req.params.id;
                const comments = yield comment_1.default.find({
                    idFilm: idFilm
                });
                if (!comments)
                    return res.status(404).json("Not found");
                return res.status(200).json(comments);
            }
            catch (err) {
                return res.status(500).json(err.message);
            }
        });
    }
    static addComment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newComment = yield new comment_1.default({
                    user: req.body.user,
                    idFilm: req.body.idFilm,
                    comment: req.body.comment,
                    rate: req.body.rate,
                    status: req.body.status
                });
                const comment = yield newComment.save();
                return res.status(200).json(comment);
            }
            catch (err) {
                return res.status(500).json(err);
            }
        });
    }
    static removeComment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const commentID = req.params.id;
                const comment = yield comment_1.default.findOne({
                    user: req.body.user,
                    _id: commentID
                });
                if (!comment)
                    return res.status(404).json("Comment not found");
                yield comment.deleteOne();
                return res.status(200).json("Delete Comment Success");
            }
            catch (err) {
                return res.status(500).json(err);
            }
        });
    }
}
exports.default = commentController;
//# sourceMappingURL=comment.controller.js.map