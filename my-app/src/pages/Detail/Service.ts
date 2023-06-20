import axios from "axios";
import axiosClient from "../../api/publicClient";
import { Film } from "../../Model/Film";
import { Genres } from "../../Model/Genres";
import { Cast } from "../../Model/Cast";

export const getDetail = (id: string) => axiosClient.get<Film>('film/' + id);

export const getAllGenres = () => axiosClient.get<Genres>('genres');

export const getAllCasts = () => axiosClient.get<Cast>('cast');
