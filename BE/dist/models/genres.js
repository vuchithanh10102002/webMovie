"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const genresSchema = new mongoose_1.Schema({
    // genreId: {
    //     type: Schema.Types.ObjectId,
    //     require: true
    // },
    genre: {
        type: String,
        require: true
    }
}, {
    timestamps: true
});
exports.default = (0, mongoose_1.model)("Genres", genresSchema);
//# sourceMappingURL=genres.js.map