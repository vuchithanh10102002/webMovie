import mongoose, {Schema, model, Document} from "mongoose";

export interface IVideo extends Document {
    idFilm: string;
    title: string;
    link: string;
    description: string;
}

const videoSchema = new Schema({
    idFilm: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: "",
    }
},{ timestamps: true })

export default model<IVideo>("Video", videoSchema);

