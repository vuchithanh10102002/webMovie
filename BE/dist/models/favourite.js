"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const favouriteSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        require: true,
    },
    mediaType: {
        type: String,
        enum: ["tv", "movie"],
        require: true,
    },
    mediaId: {
        type: String,
        require: true,
    },
    mediaTitle: {
        type: String,
        require: true,
    },
    mediaPoster: {
        type: String,
        require: true,
    },
    mediaRate: {
        type: Number,
        require: true,
    },
}, {
    toObject: {
        virtuals: true,
        transform: (_, obj) => {
            delete obj._id;
            return obj;
        },
    },
    timestamps: true
});
exports.default = (0, mongoose_1.model)("Favorite", favouriteSchema);
//# sourceMappingURL=favourite.js.map