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
                password: req.body.password
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
                // const refreshToken = jwt.sign({_id: user._id}, process.env.JWT_ACCESS_KEY || 'token', {expiresIn:"24h"})
                // refreshTokens.push(refreshToken)


                // res.cookie("refreshToken", refreshToken, {
                //     httpOnly: true,
                //     secure: false,
                //     path: "/",
                //     sameSite: "strict"
                // })
                return res.status(200).json({ user, token })
            }
            

        } catch(err) {
            return res.status(500).json(err)
        }
    }

    static async requestRefreshToken(req: Request, res: Response) {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) return res.status(401).json("You're are not authenticated")
        const jwtRefreshKey: any = process.env.JWT_REFRESH_KEY
        
        if (!refreshTokens.includes(refreshToken)) {
            return res.status(403).json("Refresh token is not valid");
        }
        jwt.verify(refreshToken, jwtRefreshKey, (err: any, user: any) => {
            if (err) {
                console.log(err);
            }

            refreshTokens = refreshTokens.filter((token) => token !== refreshToken)

            const newToken: string = jwt.sign({_id: user._id}, process.env.JWT_ACCESS_KEY || 'token', {expiresIn:"30s"})
            const newRefreshToken = jwt.sign({_id: user._id}, process.env.JWT_ACCESS_KEY || 'token', {expiresIn:"30s"})
            res.cookie("refreshToken", newRefreshToken, {
                httpOnly: true,
                secure: false,
                path: "/",
                sameSite: "strict"
            })
            return res.status(200).json({ newToken: newToken });
        })
    }

    static async signout(req: Request, res: Response) {
        res.clearCookie("refreshToken");
        refreshTokens = refreshTokens.filter(token => token !== req.cookies.refreshToken);
        return res.status(200).json("Logout!")
    }

    static async profile(req: Request, res: Response) {
        try {
            return res.send("proofile")
        } catch(err) {
            return res.status(500).json(err)
        }
    }
}

export default authController