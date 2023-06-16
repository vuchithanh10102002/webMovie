"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const castSchema = new mongoose_1.Schema({
    name: {
        type: String,
        require: true
    },
    birthdate: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    }
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("Cast", castSchema);
//# sourceMappingURL=cast.js.map