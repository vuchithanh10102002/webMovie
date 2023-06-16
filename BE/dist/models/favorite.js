"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const favoriteSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        require: true,
    },
    type: {
        type: String,
        enum: ["tv", "movie"],
        require: true,
    },
    idFilm: {
        type: String,
        require: true,
    },
    title: {
        type: String,
        require: true,
    },
    poster: {
        type: String,
        require: true,
    },
    rate: {
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
exports.default = (0, mongoose_1.model)("Favorite", favoriteSchema);
//# sourceMappingURL=favorite.js.map