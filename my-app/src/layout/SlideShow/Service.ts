import axios from "axios";
import axiosClient from "../../api/publicClient";
import { Film } from "../../Model/Film";

export const getAllFilm = () => axiosClient.get<Film>('film');
