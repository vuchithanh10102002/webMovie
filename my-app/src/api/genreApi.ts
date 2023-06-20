import publicClient from "./publicClient";

const genreEnpoints = {
  listGenre: ({ genreID }: any) => `film/genres/${genreID}`,
};

const genreApi = {
  getList: async ({ genreID }: any) => {
    try {
      const response = await publicClient.get(
        genreEnpoints.listGenre({ genreID })
      );

      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default genreApi;
