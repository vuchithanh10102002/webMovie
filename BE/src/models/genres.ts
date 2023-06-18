import { timeStamp } from "console";
import mongoose, {Schema, model, Document} from "mongoose";

export interface IGenres extends Document{
    genre: string;
    status: number;
}

const genresSchema = new Schema({
    genre: {
        type: String,
        require: true
    },
    status: {
        type: Number,
        default: 1
    }
},{
    timestamps: true
}
)

export default model<IGenres>("Genres", genresSchema);