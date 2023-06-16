import { timeStamp } from "console";
import mongoose, {Schema, model, Document} from "mongoose";

export interface IGenres extends Document {
    genreId: number;
    genre: string;
}

const genresSchema = new Schema({
    // genreId: {
    //     type: Schema.Types.ObjectId,
    //     require: true
    // },
    genre: {
        type: String,
        require: true
    }
},{
    timestamps: true
}
)

export default model<IGenres>("Genres", genresSchema);