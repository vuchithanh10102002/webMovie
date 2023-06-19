import axiosClient from "../../api/privateClient";
import { PagePaging } from "../../Model/Paging";
import { Film } from "../../Model/Film";

export const getFilms = (userID: string) => axiosClient.get<PagePaging<Film>>('favorites/' + userID);