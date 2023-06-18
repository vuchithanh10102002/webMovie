import mongoose, {Schema, model} from "mongoose";

export interface ICast {
    name: string;
    birthdate: string;
    title: string;
    image: string;
    status: number;
}

const castSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    birthdate: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    status: {
        type: Number,
        default: 1
    }
},{ timestamps: true })

export default model<ICast>("Cast", castSchema);

