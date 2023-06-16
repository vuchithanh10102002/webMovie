import jwt from "jsonwebtoken"
import { NextFunction, Request, Response } from "express"

class tokenMiddleware {
    static tokenAuth(req: Request, res: Response, next: NextFunction) {
        const token: any = req.headers["token"];
        
        if (token) {
            const accessToken = token.split(" ")[1];
            const jwtKey: any = process.env.JWT_ACCESS_KEY;
            jwt.verify(accessToken, jwtKey, (err: any, user: any) => {
                if(err) {
                    return res.status(403).json("Token is not valid");
                }
                req.body.user = user;
                next();
            } )
        } else {
            return res.status(401).json("You are not authenrication")
        }  
    }
}

export default tokenMiddleware