"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cast_controller_1 = __importDefault(require("../controllers/cast.controller"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/cast', cast_controller_1.default.getListCast);
router.get('/cast/:id', cast_controller_1.default.getDetail);
router.post('/cast', cast_controller_1.default.addCast);
router.delete('/cast/:id', cast_controller_1.default.removeCast);
router.put('/cast/:id', cast_controller_1.default.updateCast);
exports.default = router;
//# sourceMappingURL=cast.router.js.map