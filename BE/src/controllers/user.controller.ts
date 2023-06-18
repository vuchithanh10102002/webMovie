import bcrypt from "bcrypt";
import User, { IUser } from './../models/User';
import {Request, Response} from "express";
import jwt from "jsonwebtoken";

let refreshTokens: Array<string> = [];
class authController  {
    static async signup (req: Request, res: Response) {
        try {
            const newUser: IUser = await new User({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                displayname: req.body.displayname
            })
            newUser.password = await newUser.encryptPassword(newUser.password)
            const user = await newUser.save();
            const token: string = jwt.sign({_id: user._id}, process.env.JWT_ACCESS_KEY || 'token', {expiresIn:"24h"})
            return res.status(200).json({user, token})
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    static async signin(req: Request, res: Response) {
        try {
            const user = await User.findOne({ username: req.body.username });
            if(!user) {
                return res.status(401).json("Wrong username!");
            }

            if (user) {
                const isPassword: boolean = await user.validPassword(req.body.password)
                if(!isPassword) {
                    return res.status(404).json("Wrong password!"); 
                }

                const token: string = jwt.sign({_id: user._id}, process.env.JWT_ACCESS_KEY || 'token', {expiresIn:"24h"})
                
                return res.status(200).json({ user, token })
            }
            

        } catch(err) {
            return res.status(500).json(err)
        }
    }

    static async profile(req: Request, res: Response) {
        try {
            const userID = req.params.id;
            const user = await User.findById(userID);

            if (!user) return res.status(404).json("User not found");

            return res.status(200).json(user);
        } catch(err) {
            return res.status(500).json(err)
        }
    }
}

export default authController