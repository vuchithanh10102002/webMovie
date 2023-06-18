import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import mongoose from "mongoose"
import "dotenv/config"
import router from "./routers/user.router"
import routerFavorite from "./routers/favorite.router"
import routerGenres from "./routers/genres.router"
import routerFilm from "./routers/film.router"
import routerCast from "./routers/cast.router"
import routerComment from "./routers/comment.router"
import routerVideo from "./routers/video.router"

const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use("/v1/auth", router)
app.use("/v1/auth", routerFavorite)
app.use("/v1/auth", routerGenres)
app.use("/v1/auth", routerFilm)
app.use("/v1/auth", routerCast)
app.use("/v1/auth", routerComment)
app.use("/v1/auth", routerVideo)

const port: any = process.env.PORT;
const url: any =  process.env.MONGODB_URL;


mongoose
    .connect(url)
    .then(() => {
        console.log("Mongodb connected")
        app.listen(port, () => {
            console.log("Server listen port", port);
        })
    })
    .catch((err) => {
        console.log(err)
    })
