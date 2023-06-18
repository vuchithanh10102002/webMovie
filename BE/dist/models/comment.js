"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const commentSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true
    },
    comment: {
        type: String,
        require: true
    },
    rate: {
        type: Number,
        required: true
    },
    status: {
        type: Number,
        default: 1
    }
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("Comment", commentSchema);
//# sourceMappingURL=comment.js.map