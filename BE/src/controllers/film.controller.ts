import {Request, Response, response} from "express"
import filmModel, { IFilm } from "../models/film"

class filmController {
    static async getListFilms(req: Request, res: Response) {
        try {
            const film = await filmModel.find();
            if(!film)  return res.status(404).json("Film not found");

            return res.status(200).json(film);
        } catch (error: any) {
            return res.status(500).json(error.message);
        }
    }

    static async getDetail(req: Request, res: Response) {
        try {
            const filmID = req.params.id;
            const film = await filmModel.findById(filmID);

            if(!film) return res.status(404).json("Film not found");

            return res.status(200).json(film);
        } catch (error: any) {
            return res.status(500).json(error.message);
        }
    }

    static async addFilm(req: Request, res: Response) {
        try {
            const newFilm = await new filmModel(
                {
                    type: req.body.mediaType,
                    imageUrl: req.body.imageUrl,
                    title: req.body.title,
                    overview: req.body.overview,
                    rate: req.body.rate,
                    toprate: req.body.toprate,
                    popular: req.body.popular,
                    realeaseDate: req.body.realeaseDate,
                    genres: req.body.genres,
                    background: req.body.background,
                    runtime: req.body.runtime,
                    cast: req.body.cast
                }
            )

            const film = await newFilm.save();

            return res.status(200).json(film);

        } catch (error: any) {
            return res.status(500).json(error.message);
        }
    }

    static async removeFilm(req: Request, res: Response) {
        try {
            const filmID = req.params.id;
            const film = await filmModel.findById(filmID);

            if(!film)  return res.status(404).json("film not found");

            await film.deleteOne();

            return res.status(200).json("Delete film success");

        } catch (error: any) {
            res.status(500).json(error.message);
        }
    }

    static async updateFilm(req: Request, res: Response) {
        try {
            const filmID = req.params.id;
            const film = await filmModel.findById(filmID);
            if (!film) return res.status(404).json("Film not found");

            const newFilm: IFilm = {
                type: req.body.mediaType,
                imageUrl: req.body.imageUrl,
                title: req.body.title,
                overview: req.body.overview,
                rate: req.body.rate,
                toprate: req.body.toprate,
                popular: req.body.popular,
                realeaseDate: req.body.realeaseDate,
                genres: req.body.genres,
                background: req.body.background,
                runtime: req.body.runtime,
                cast: req.body.cast
            }

            await film.updateOne(newFilm);

            return res.status(200).json("Update film success")
        } catch(error: any) {
            res.status(500).json(error.message)
        }
    }
}

export default filmController;

