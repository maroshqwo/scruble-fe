import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ThemeState = {
  name: string
  primary: string
  secondary: string
  warning: string
  success: string
  error: string
  background: string
  text: string
  textInverse: string
  heading: string
  sidecolor1: string
  sidecolor2: string
  sidecolor3: string
}

export const Light: ThemeState = {
  name: "Light",
  primary: "#00bcd4",
  secondary: "#ff9800",
  warning: "#ff9800",
  success: "#4caf50",
  error: "#f44336",
  background: "#fafafa",
  text: "#212121",
  textInverse: "#ffffff",
  heading: "#212121",
  sidecolor1: "#00bcd4",
  sidecolor2: "#ff9800",
  sidecolor3: "#4caf50",
};

export const Dark: ThemeState = {
  name: "Dark",
  primary: "#2C3333",
  secondary: "#395B64",
  warning: "#ff9800",
  success: "#4caf50",
  error: "#f44336",
  background: "#212121",
  text: "#E7F6F2",
  textInverse: "#212121",
  heading: "#A5C9CA",
  sidecolor1: "#00bcd4",
  sidecolor2: "#ff9800",
  sidecolor3: "#4caf50",
};

export const Fancy: ThemeState = {
  name: "Fancy",
  primary: "#00bcd4",
  secondary: "eee",
  warning: "#ff9800",
  success: "#4caf50",
  error: "#f44336",
  background: "#212121",
  text: "#ffffff",
  textInverse: "#212121",
  heading: "#ffffff",
  sidecolor1: "#00bcd4",
  sidecolor2: "#ff9800",
  sidecolor3: "#4caf50",
};

const initialState = Light;

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      switch (action.payload) {
        case "light":
          Object.assign(state, Light);
          break;
        case "dark":
          Object.assign(state, Dark);
          break;
        case "fancy":
          Object.assign(state, Fancy);
          break;
        default:
      }
    },
  },
});

export const { setTheme } = themeSlice.actions;
const themeReducer = themeSlice.reducer;
export default themeReducer;
