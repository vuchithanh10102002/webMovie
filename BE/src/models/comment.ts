import mongoose, {Schema, model, Document} from "mongoose";

export interface IComment extends Document{
    idFilm: string;
    comment: string;
    rate: number;
    status: number;
}

const commentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        required: true
    },
    idFilm: {
        type: String,
        require: true
    },
    comment: {
        type: String,
        require: true
    },
    rate: {
        type: Number,
        required: true
    },
    status: {
        type: Number,
        default: 1
    }
},{ timestamps: true })

export default model<IComment>("Comment", commentSchema);

