import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    showSuggestion: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    clearMenu: (state, action) => {
      state.isMenuOpen = action.payload;
    },
    toggleSuggestion: (state, action) => {
      state.showSuggestion = action.payload;
    },
    clearSuggestion: (state, action) => {
      state.showSuggestion = action.payload;
    },
  },
});

export const { toggleMenu, clearMenu, toggleSuggestion, clearSuggestion } =
  appSlice.actions;
export default appSlice.reducer;
