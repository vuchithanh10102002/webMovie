"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class tokenMiddleware {
    static tokenAuth(req, res, next) {
        const token = req.headers["token"];
        if (token) {
            const accessToken = token.split(" ")[1];
            const jwtKey = process.env.JWT_ACCESS_KEY;
            jsonwebtoken_1.default.verify(accessToken, jwtKey, (err, user) => {
                if (err) {
                    return res.status(403).json("Token is not valid");
                }
                req.body.user = user;
                next();
            });
        }
        else {
            return res.status(401).json("You are not authenrication");
        }
    }
}
exports.default = tokenMiddleware;
//# sourceMappingURL=token.middleware.js.map