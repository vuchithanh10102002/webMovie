import privateClient from "./privateClient";

const favoriteEnpoints = {
  list: ({ userID }: any) => `favorites/${userID}`,
  add: "favorites",
  remove: ({ favoriteId }: any) => `favorites/${favoriteId}`,

};

const favoriteApi = {
  getList: async ({ userID }: any) => {
    try {
      const response = await privateClient.get(
        favoriteEnpoints.list({ userID })
      );

      return { response };
    } catch (err) {
      return { err };
    }
  },
  add: async ({ user, type, idFilm, title, poster, rate, status }: any) => {
    try {
      const response = await privateClient.post(favoriteEnpoints.add, {
        user,
        type,
        idFilm,
        title,
        poster,
        rate,
        status
      });

      return { response };
    } catch (err) {
      return { err };
    }
  },
  remove: async ({ favoriteId }: any) => {
    try {
      const response = await privateClient.delete(
        favoriteEnpoints.remove({ favoriteId })
      );

      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default favoriteApi;
