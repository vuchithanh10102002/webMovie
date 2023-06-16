import { Request, Response } from "express";
import favoriteModel, { IFavorite } from "../models/favorite";

class favoriteController {
    static async getFavoriteOfUser(req: Request, res: Response) {
        try {
            const userID = req.params;
            const favorite = await favoriteModel.find(userID);

            return res.status(200).json(favorite);
        } catch(err) {
            return res.status(500).json(err)
        }
    }

    static async addFavorite(req: Request, res: Response) {
        try {
            const isFavorite = await favoriteModel.findOne({
                user: req.body.user,
                idFilm: req.body.idFilm,
            })

            if (isFavorite) return res.status(200).json(isFavorite)

            const newFavorite: IFavorite = await new  favoriteModel({
                user: req.body.user,
                type: req.body.type,
                idFilm: req.body.idFilm,
                title: req.body.title,
                poster: req.body.poster,
                rate: req.body.rate
            })

            const favorite =  await newFavorite.save();

            return res.status(201).json(favorite);
        } catch(err) {
            return res.status(500).json(err)
        }
    }

    static async removeFavorite(req: Request, res: Response) {
        try {
            const favoriteId = req.params.id;
            const favorite = await favoriteModel.findOne({
                user: req.body.user,
                _id: favoriteId
            })

            if(!favorite) return res.status(404).json("Not found");

            await favorite.deleteOne();

            return res.status(200).json("Remove favorite success")
            
        } catch(err) {
            return res.status(500).json(err)
        }
    }

}

export default favoriteController