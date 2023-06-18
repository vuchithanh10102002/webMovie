"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const token_middleware_1 = __importDefault(require("../middleware/token.middleware"));
const video_controller_1 = __importDefault(require("../controllers/video.controller"));
const router = express_1.default.Router();
router.get("/video/:id", token_middleware_1.default.tokenAuth, video_controller_1.default.getVideo);
router.post("/video", token_middleware_1.default.tokenAuth, video_controller_1.default.addVideo);
router.put("/video/:id", token_middleware_1.default.tokenAuth, video_controller_1.default.updateVideo);
router.delete("/video/:id", token_middleware_1.default.tokenAuth, video_controller_1.default.removeVideo);
exports.default = router;
//# sourceMappingURL=video.router.js.map