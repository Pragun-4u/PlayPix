import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chatMessages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.chatMessages.unshift(action.payload);
      state.chatMessages.splice(25, 1);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
