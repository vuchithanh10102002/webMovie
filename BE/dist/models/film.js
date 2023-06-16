"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const filmSchema = new mongoose_1.Schema({
    type: {
        type: String,
        enum: ["movie", "tv"],
        require: true
    },
    imageUrl: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    overview: {
        type: String,
        required: true,
    },
    rate: {
        type: String,
        required: true,
    },
    feature: {
        type: String,
        enum: ["Popular", "Upcomming", "TopRate"],
        require: true
    },
    realeaseDate: {
        type: String,
        required: true,
    },
    genres: {
        type: Array,
        required: true,
    },
    background: {
        type: String,
        required: true,
    },
    runtime: {
        type: String,
        required: true,
    },
    cast: {
        type: Array,
        required: true,
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
exports.default = (0, mongoose_1.model)("Film", filmSchema);
//# sourceMappingURL=film.js.map