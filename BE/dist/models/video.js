"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const videoSchema = new mongoose_1.Schema({
    idFilm: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: "",
    }
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("Video", videoSchema);
//# sourceMappingURL=video.js.map