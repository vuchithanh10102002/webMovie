import { Request, Response } from "express";
import genresModel from "../models/genres";
import { IGenres } from "../models/genres";

class genresController {
    static async getListGenres(req: Request, res: Response) {
        try {
            const genres = await genresModel.find();
            if (!genres) return res.status(404).json("genres not found");
            return res.status(200).json(genres)
        } catch (error) { 
            res.status(500).json(error);
        }
    }

    static async addGenres(req: Request, res: Response) {
        try {
            const newGenre: IGenres = await new genresModel({
                genre: req.body.genre,
                pathname: req.params.pathname,
                status: req.body.status
            });

            const genres = await newGenre.save();
            return res.status(200).json(genres)
        } catch (error: any) {
            return res.status(500).json(error.message);
        }
    }

    static async removeGenres(req: Request, res: Response) {
        try {
            const genreID = req.params.id;
            const genre = await genresModel.findById(genreID);

            if (!genre) return res.status(404).json("genre not found");

            await genre.deleteOne();

            return res.status(200).json("Remove favorite success");

        } catch(error: any) {
            return res.status(500).json(error.message);
        }
    }

    static async updateGenres(req: Request, res: Response) {
        try {
            const genreID = req.params.id;
            const genre = await genresModel.findById(genreID);
            if (!genre) return res.status(404).json("genre not found");

            const newGenre = {
                genre: req.body.genre,
                pathname: req.params.pathname,
                status: req.body.status
            };
            await genre.updateOne(newGenre);

            return res.status(200).json("Update favorite success");
        } catch (error: any) {
            res.status(500).json(error.message);
        }
    }



}

export default genresController;