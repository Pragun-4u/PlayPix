import { createSlice } from "@reduxjs/toolkit";

const searchResultSlice = createSlice({
  name: "searchResult",
  initialState: {
    results: [],
  },
  reducers: {
    addtoresult: (state, action) => {
      state.results.splice(25, 25);
      state.results.push(action.payload);
    },
    clearResults: (state) => {
      state.results = [];
    },
  },
});

export const { addtoresult, clearResults } = searchResultSlice.actions;
export default searchResultSlice.reducer;
