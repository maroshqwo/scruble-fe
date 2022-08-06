import { createAsyncThunk } from "@reduxjs/toolkit";

export const setThemeAction = createAsyncThunk<any, string>(
  "theme/setTheme",
  async (data: string) => data,
);

export default setThemeAction;
