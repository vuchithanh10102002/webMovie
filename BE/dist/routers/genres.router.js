"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const genres_controller_1 = __importDefault(require("../controllers/genres.controller"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/genres", genres_controller_1.default.getListGenres);
router.post("/genres", genres_controller_1.default.addGenres);
router.delete("/genres/:id", genres_controller_1.default.removeGenres);
router.put("/genres/:id", genres_controller_1.default.updateGenres);
exports.default = router;
//# sourceMappingURL=genres.router.js.map