import privateClient from "./privateClient";
import publicClient from "./publicClient";

const userEndpoints = {
  signin: "signin",
  signup: "signup",
  getInfo: "user/info",
  passwordUpdate: "user/update-password",
  getFavorite: "user/favorites",
  addFavorite: "user/favorites",
};

const userApi = {
  signin: async ({ username, password }: any) => {
    try {
      const response = await publicClient.post(userEndpoints.signin, {
        username,
        password,
      });

      return { response };
    } catch (err) {
      return { err };
    }
  },
  signup: async ({ username, password, confirmPassword, displayName }: any) => {
    try {
      const response = await publicClient.post(userEndpoints.signup, {
        username,
        password,
        confirmPassword,
        displayName,
      });

      return { response };
    } catch (err) {
      return { err };
    }
  },
  getInfo: async () => {
    try {
      const response = await privateClient.get(userEndpoints.getInfo);

      return { response };
    } catch (err) {
      return { err };
    }
  },
  passwordUpdate: async ({ password, newPassword, confirmPassword }:any) => {
    try {
      const response = await privateClient.put(userEndpoints.passwordUpdate, {
        password,
        newPassword,
        confirmPassword,
      });

      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default userApi;
