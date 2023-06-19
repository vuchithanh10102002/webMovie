import axios from "axios";
import axiosClient from "../../api/publicClient";
import { Genres } from './../../Model/Genres';

export const getAllGenres = () => axiosClient.get<Genres>('genres');