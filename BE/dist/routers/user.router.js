"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const token_middleware_1 = __importDefault(require("../middleware/token.middleware"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post('/signup', user_controller_1.default.signup);
router.post("/signin", user_controller_1.default.signin);
router.get("/profile", token_middleware_1.default.tokenAuth, user_controller_1.default.profile);
// router.post("/refresh", userController.requestRefreshToken)
// router.post("/signout", tokenMiddleware.tokenAuth ,userController.signout)
exports.default = router;
//# sourceMappingURL=user.router.js.map