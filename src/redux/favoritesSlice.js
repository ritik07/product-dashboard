import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const productExists = state.favorites.some(
        (product) => product.id === action.payload.id
      );
      if (!productExists) {
        state.favorites.push(action.payload);
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
      }
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (product) => product.id !== action.payload
      );
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    setFavorites: (state, action) => {
      state.favorites = action.payload;
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
});

export const { addFavorite, removeFavorite, setFavorites } =
  favoritesSlice.actions;
export default favoritesSlice.reducer;
