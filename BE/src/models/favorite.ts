import mongoose, { Schema, model, Document } from "mongoose";
import { IUser } from "./User";

export interface IFavorite extends Document {
    user: IUser;
    type: string;
    idFilm: string;
    title: string;
    poster: string;
    rate: number;
}


const favoriteSchema  = new Schema({
    user: {
        type: Schema.Types.ObjectId,
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
}) 


export default model<IFavorite>("Favorite", favoriteSchema);