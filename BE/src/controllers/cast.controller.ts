import { Request, Response } from "express";
import castModel, { ICast } from "../models/cast";

class castController {
    static async getListCast(req: Request, res: Response) {
        try {
            const cast = await castModel.find();

            if(!cast) return res.status(404).json("Cast not found");

            return res.status(200).json(cast);
        } catch (error: any) {
            return res.status(500).json(error.message);
        }
    }

    static async getDetail(req: Request, res: Response) {
        try {
            const castID = req.params.id;
            const cast = await castModel.findById(castID);

            if(!cast) return res.status(404).json("Cast not found")

            return res.status(200).json(cast);
        } catch (error: any) {
            return res.status(500).json(error.message);
        }
    }

    static async addCast(req: Request, res: Response) {
        try {
            const newCast = await new castModel({
                name: req.body.name,
                birthdate: req.body.birthdate,
                title: req.body.title,
                image: req.body.image
            })

            const cast = await newCast.save();

            return res.status(200).json(cast);
        } catch (error: any) {
            return res.status(500).json(error.message);
        }
    }

    static async removeCast(req: Request, res: Response) {
        try {
            const castID = req.params.id;
            const cast = await castModel.findById(castID)

            if (!cast) return res.status(404).json("Cast not found");

            await cast.deleteOne();

            return res.status(200).json("Delete cast success");
        } catch (error: any) {
            return res.status(500).json(error.message)
        }
        
    }

    static async updateCast(req: Request, res: Response) {
        try {
            const castID = req.params.id;
            const cast = await castModel.findById(castID)

            if(!cast) return res.status(404).json("Cast not found")

            const newCast: ICast = {
                name: req.body.name,
                birthdate: req.body.birthdate,
                title: req.body.title,
                image: req.body.image
            }

            await cast?.updateOne(newCast)

            return res.status(200).json("Update cast success")

        } catch (error: any) {
            return res.status(500).json(error.message)
        }
    }
}

export default castController