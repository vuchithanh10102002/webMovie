"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const filmSchema = new mongoose_1.Schema({
    type: {
        type: String,
        default: "movie"
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
    toprate: {
        type: Number,
        default: 0
    },
    popular: {
        type: Number,
        default: 0
    },
    upcoming: {
        type: Number,
        default: 0
    },
    realeaseDate: {
        type: String,
        required: true,
    },
    genres: [{
            type: String,
            required: true,
        }],
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
    status: {
        type: Number,
        default: 1
    }
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