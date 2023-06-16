import mongoose, {Schema, model} from "mongoose";

export interface ICast {
    // id: number;
    name: string;
    birthdate: string;
    title: string;
    image: string;
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
    }
},{ timestamps: true })

export default model<ICast>("Cast", castSchema);

