import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type socketState = {
  isConnectedGlobal: boolean
}

const initialState: socketState = {
  isConnectedGlobal: false,
};

const socketSlice = createSlice({
  name: "socket",
  initialState,
  reducers: {
    setIsConnectedGlobal: (state, action: PayloadAction<boolean>) => {
      state.isConnectedGlobal = action.payload;
    },
  },
});

export const { setIsConnectedGlobal } = socketSlice.actions;
const socketReducer = socketSlice.reducer;
export default socketReducer;
