import bcrypt from 'bcrypt';
import { Schema, model, Document } from "mongoose";

export interface IUser extends Document{
    username: string;
    email: string;
    password: string;
    encryptPassword(password: string): Promise<string>;
    validPassword(password: string): Promise<boolean>;
}

const userSchema = new Schema({
    username: {
        type: String,
        require: true,
        minLength: 8,
        unique: true 
    },
    email: {
        type: String,
        require: true,
        minLength: 8,
        unique: true 
    },
    password: {
        type: String,
        require: true,
        minLength: 8,
    },
}, { timestamps: true }
)

userSchema.methods.encryptPassword = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt)
}

userSchema.methods.validPassword = async function (password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password)
}

export default model<IUser>("User", userSchema)