"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const token_middleware_1 = __importDefault(require("../middleware/token.middleware"));
const cast_controller_1 = __importDefault(require("../controllers/cast.controller"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/cast', token_middleware_1.default.tokenAuth, cast_controller_1.default.getListCast);
router.get('/cast/:id', token_middleware_1.default.tokenAuth, cast_controller_1.default.getDetail);
router.post('/cast', token_middleware_1.default.tokenAuth, cast_controller_1.default.addCast);
router.delete('/cast/:id', token_middleware_1.default.tokenAuth, cast_controller_1.default.removeCast);
router.put('/cast/:id', token_middleware_1.default.tokenAuth, cast_controller_1.default.updateCast);
exports.default = router;
//# sourceMappingURL=cast.router.js.map