const { createSlice } = require("@reduxjs/toolkit");

const HomePageSlice = createSlice({
  name: "HomePage",
  initialState: {
    HomePageResults: [],
  },
  reducers: {
    addtoHomePageResults: (state, action) => {
      state.HomePageResults.splice(49, 50);
      state.HomePageResults.push(action.payload);
    },
    clearHomePageResults: (state) => {
      state.HomePageResults = [];
    },
  },
});

export const { addtoHomePageResults, clearHomePageResults } =
  HomePageSlice.actions;
export default HomePageSlice.reducer;
