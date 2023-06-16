import axios from "axios";
import axiosClient from "../../api/apiClient";
import { PagePaging } from "../../Model/Paging";
import { Film } from "../../Model/Film";

export const getFilms = () => axiosClient.get<PagePaging<Film>>('https://api.themoviedb.org/3/movie/297762/similar?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=1');