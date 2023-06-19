import axios from "axios";
import axiosClient from "../../api/publicClient";
import { Film } from "../../Model/Film";

export const getDetail = (id: string) => axiosClient.get<Film>('film/' + id);
