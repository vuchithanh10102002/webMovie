"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
const user_router_1 = __importDefault(require("./routers/user.router"));
const favorite_router_1 = __importDefault(require("./routers/favorite.router"));
const genres_router_1 = __importDefault(require("./routers/genres.router"));
const film_router_1 = __importDefault(require("./routers/film.router"));
const cast_router_1 = __importDefault(require("./routers/cast.router"));
const comment_router_1 = __importDefault(require("./routers/comment.router"));
const video_router_1 = __importDefault(require("./routers/video.router"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
app.use("/v1/auth", user_router_1.default);
app.use("/v1/auth", favorite_router_1.default);
app.use("/v1/auth", genres_router_1.default);
app.use("/v1/auth", film_router_1.default);
app.use("/v1/auth", cast_router_1.default);
app.use("/v1/auth", comment_router_1.default);
app.use("/v1/auth", video_router_1.default);
const port = process.env.PORT;
const url = process.env.MONGODB_URL;
mongoose_1.default
    .connect(url)
    .then(() => {
    console.log("Mongodb connected");
    app.listen(port, () => {
        console.log("Server listen port", port);
    });
})
    .catch((err) => {
    console.log(err);
});
//# sourceMappingURL=index.js.map