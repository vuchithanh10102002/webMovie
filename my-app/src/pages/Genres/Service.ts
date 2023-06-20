import axiosClient from "../../api/publicClient";
import { Film } from "../../Model/Film";

export const getFilms = (idGenre?: string) => axiosClient.get<Film>('film/genres/' + idGenre);