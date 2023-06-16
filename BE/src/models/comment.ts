import mongoose, {Schema, model, Document} from "mongoose";

export interface IComment extends Document{
    comment: string;
    rate: number;
}

const commentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        required: true
    },
    comment: {
        type: String,
        require: true
    },
    rate: {
        type: Number,
        required: true
    }
},{ timestamps: true })

export default model<IComment>("Comment", commentSchema);

