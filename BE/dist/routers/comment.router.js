"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const comment_controller_1 = __importDefault(require("../controllers/comment.controller"));
const token_middleware_1 = __importDefault(require("../middleware/token.middleware"));
const router = express_1.default.Router();
router.get('/comment/:user', comment_controller_1.default.getComments);
router.post("/comment", token_middleware_1.default.tokenAuth, comment_controller_1.default.addComment);
router.delete("/comment/:id", token_middleware_1.default.tokenAuth, comment_controller_1.default.removeComment);
exports.default = router;
//# sourceMappingURL=comment.router.js.map