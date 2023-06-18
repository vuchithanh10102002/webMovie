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
const User_1 = __importDefault(require("./../models/User"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
let refreshTokens = [];
class authController {
    static signup(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newUser = yield new User_1.default({
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password,
                    displayname: req.body.displayname
                });
                newUser.password = yield newUser.encryptPassword(newUser.password);
                const user = yield newUser.save();
                const token = jsonwebtoken_1.default.sign({ _id: user._id }, process.env.JWT_ACCESS_KEY || 'token', { expiresIn: "24h" });
                return res.status(200).json({ user, token });
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
    }
    static signin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield User_1.default.findOne({ username: req.body.username });
                if (!user) {
                    return res.status(401).json("Wrong username!");
                }
                if (user) {
                    const isPassword = yield user.validPassword(req.body.password);
                    if (!isPassword) {
                        return res.status(404).json("Wrong password!");
                    }
                    const token = jsonwebtoken_1.default.sign({ _id: user._id }, process.env.JWT_ACCESS_KEY || 'token', { expiresIn: "24h" });
                    return res.status(200).json({ user, token });
                }
            }
            catch (err) {
                return res.status(500).json(err);
            }
        });
    }
    static profile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userID = req.params.id;
                const user = yield User_1.default.findById(userID);
                if (!user)
                    return res.status(404).json("User not found");
                return res.status(200).json(user);
            }
            catch (err) {
                return res.status(500).json(err);
            }
        });
    }
}
exports.default = authController;
//# sourceMappingURL=user.controller.js.map