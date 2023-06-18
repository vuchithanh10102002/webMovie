import { Request, Response } from "express";
import videoModel, { IVideo } from "../models/video";

class videoController {
    static async getVideo(req: Request, res: Response) {
        try {
            const idFilm = req.body.idFilm;
            const video = await videoModel.find(idFilm);

            if (!video) return res.status(404).json("Video not found");

            return res.status(200).json(video);

        } catch (err) {
            return res.status(500).json(err);
        }
    }

    static async addVideo(req: Request, res: Response) {
        try {
            const newVideo: IVideo = await new videoModel({
                idFilm: req.body.idFilm,
                title: req.body.title,
                link: req.body.link,
                description: req.body.description
            })

            const video = await newVideo.save();
            return res.status(200).json(video);
        } catch (err) {
            return res.status(500).json(err);
        }
    }

    static async updateVideo(req: Request, res: Response) {
        try {
            const idVideo = req.params.id;
            const video = await videoModel.findById(idVideo);

            if (!video) return res.status(404).json("Video not found");
            const newVideo = {
                idFilm: req.body.idFilm,
                title: req.body.title,
                link: req.body.link,
                description: req.body.description
            }

            await video?.updateOne(newVideo);
            return res.status(200).json("Update video success")

        } catch (err) {
            return res.status(500).json(err);
        }
    }

    static async removeVideo(req: Request, res: Response) {
        try {
            const videoID = req.params.id;
            const video = await videoModel.findById(videoID);

            await video?.deleteOne();

            return res.status(200).json("Video deleted success");
        } catch (err) {
            return res.status(500).json(err);
        }
    }
}

export default videoController;