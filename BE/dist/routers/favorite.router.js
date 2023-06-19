"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const token_middleware_1 = __importDefault(require("../middleware/token.middleware"));
const favorite_controller_1 = __importDefault(require("../controllers/favorite.controller"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/favorites/:user", token_middleware_1.default.tokenAuth, favorite_controller_1.default.getFavoriteOfUser);
router.post("/favorites", token_middleware_1.default.tokenAuth, favorite_controller_1.default.addFavorite);
router.delete("/favorites/:id", token_middleware_1.default.tokenAuth, favorite_controller_1.default.removeFavorite);
exports.default = router;
//# sourceMappingURL=favorite.router.js.map