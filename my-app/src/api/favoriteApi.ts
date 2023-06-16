import privateClient from "./privateClient";

const favoriteEnpoints = {
  list: "favorites",
  add: "favorites",
  remove: ({ favoriteId }: any) => `favorites/${favoriteId}`,
};

const favoriteApi = {
  getList: async () => {
    try {
      const response = await privateClient.get(favoriteEnpoints.list);

      return { response };
    } catch (err) {
      return { err };
    }
  },
  add: async ({ user, mediaId, mediaType, mediaTitle, mediaPoster, mediaRate }: any) => {
    try {
      const response = await privateClient.post(favoriteEnpoints.add, {
        user,
        mediaId,
        mediaType,
        mediaTitle,
        mediaPoster,
        mediaRate,
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
