import axios from "axios";
import axiosClient from "../../api/publicClient";
import { PagePaging } from "../../Model/Paging";
import { Film } from "../../Model/Film";

export const getDetail = (id: number) => axiosClient.get<Film>('https://api.themoviedb.org/3/movie/' + id + '?api_key=abe684651c0f85fb2222ec901f2f7c25');

export const getAllPopular = () => axiosClient.get<PagePaging<Film>>('https://api.themoviedb.org/3/movie/popular?api_key=abe684651c0f85fb2222ec901f2f7c25');

export const getAllTopRated = () => axiosClient.get<PagePaging<Film>>('https://api.themoviedb.org/3/movie/top_rated?api_key=abe684651c0f85fb2222ec901f2f7c25');

export const getAllUpComing = () => axiosClient.get<PagePaging<Film>>('https://api.themoviedb.org/3/movie/upcoming?api_key=abe684651c0f85fb2222ec901f2f7c25');
