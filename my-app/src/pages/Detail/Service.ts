import axios from "axios";
import axiosClient from "../../api/apiClient";
import { Film } from "../../Model/Film";

export const getDetail = (id: number) => axiosClient.get<Film>('https://api.themoviedb.org/3/movie/' + id + '?api_key=abe684651c0f85fb2222ec901f2f7c25');
