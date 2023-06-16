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
                    password: req.body.password
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
                    // const refreshToken = jwt.sign({_id: user._id}, process.env.JWT_ACCESS_KEY || 'token', {expiresIn:"24h"})
                    // refreshTokens.push(refreshToken)
                    // res.cookie("refreshToken", refreshToken, {
                    //     httpOnly: true,
                    //     secure: false,
                    //     path: "/",
                    //     sameSite: "strict"
                    // })
                    return res.status(200).json({ user, token });
                }
            }
            catch (err) {
                return res.status(500).json(err);
            }
        });
    }
    static requestRefreshToken(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const refreshToken = req.cookies.refreshToken;
            if (!refreshToken)
                return res.status(401).json("You're are not authenticated");
            const jwtRefreshKey = process.env.JWT_REFRESH_KEY;
            if (!refreshTokens.includes(refreshToken)) {
                return res.status(403).json("Refresh token is not valid");
            }
            jsonwebtoken_1.default.verify(refreshToken, jwtRefreshKey, (err, user) => {
                if (err) {
                    console.log(err);
                }
                refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
                const newToken = jsonwebtoken_1.default.sign({ _id: user._id }, process.env.JWT_ACCESS_KEY || 'token', { expiresIn: "30s" });
                const newRefreshToken = jsonwebtoken_1.default.sign({ _id: user._id }, process.env.JWT_ACCESS_KEY || 'token', { expiresIn: "30s" });
                res.cookie("refreshToken", newRefreshToken, {
                    httpOnly: true,
                    secure: false,
                    path: "/",
                    sameSite: "strict"
                });
                return res.status(200).json({ newToken: newToken });
            });
        });
    }
    static signout(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.clearCookie("refreshToken");
            refreshTokens = refreshTokens.filter(token => token !== req.cookies.refreshToken);
            return res.status(200).json("Logout!");
        });
    }
    static profile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return res.send("proofile");
            }
            catch (err) {
                return res.status(500).json(err);
            }
        });
    }
}
exports.default = authController;
//# sourceMappingURL=user.controller.js.map