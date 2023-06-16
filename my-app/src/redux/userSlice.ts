import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "User",
    initialState: {
        user: null,
        listFavorites: []
    },
    reducers: {
        setUser: (state: any, action: any) => {
            if (action.payload === null) {
              localStorage.removeItem("actkn");
            } else {
              if (action.payload.token)
                localStorage.setItem("actkn", action.payload.token);
                state.user = action.payload;
            }
        },
        setListFavorite: (state: any, action: any) => {
        state.listFavorites = action.payload;
        },
        removeFavorite: (state: any, action: any) => {
        const { mediaId } = action.payload;
        state.listFavorites = [...state.listFavorites].filter(
            (e: any) => e.mediaId.toString() !== mediaId.toString()
        );
        },
        addFavorite: (state: any, action: any) => {
        state.listFavorites = [action.payload, ...state.listFavorites];
        },
    }
})

export const {
    setUser,
    setListFavorite,
    removeFavorite,
    addFavorite
} = userSlice.actions;

export default userSlice.reducer;