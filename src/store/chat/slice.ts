import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type chatState = {
  hello: string
}

const initialState: chatState = {
  hello: "",
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {},
});

//  export const {} = chatSlice.actions;
const chatReducer = chatSlice.reducer;
export default chatReducer;
