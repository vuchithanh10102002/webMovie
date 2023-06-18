import { Request, Response } from "express";
import commentModel, {IComment} from "../models/comment";

class commentController {
    static async getComments(req: Request, res: Response) {
        try {
            const userID = req.params.user
            const comments = await commentModel.find({
                user: userID
            })
    
            if (!comments) return res.status(404).json("Not found");
    
            return res.status(200).json(comments)
        } catch (err) {
            return res.status(500).json(err);
        }
    }

    static async addComment(req: Request, res: Response) {
        try {
            const newComment = await new commentModel({
                user: req.body.user,
                comment: req.body.comment,
                rate: req.body.rate,
                status: req.body.status
            })
    
    
            const comment = await newComment.save();
    
            return res.status(200).json(comment);
        } catch (err) {
            return res.status(500).json(err);
        }
    }

    static async removeComment(req: Request, res: Response) {
        try {
            const commentID = req.params.id;
            const comment = await commentModel.findOne({
                user: req.body.user,
                _id: commentID
            })

            if (!comment) return res.status(404).json("Comment not found");

            await comment.deleteOne();

            return res.status(200).json("Delete Comment Success");
        } catch (err) {
            return res.status(500).json(err);
        }
    }
}

export default commentController