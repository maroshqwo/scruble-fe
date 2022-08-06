import { AxiosError, AxiosResponse } from "axios";
import { ApiError } from "@/api/types";

export const buildApiError = (err: AxiosError): ApiError => {
  if (err.response) {
    const { response } = err;
    return {
      status: response.status,
      message: err.message,
      error: err.message,
      data: response.data,
    };
  }

  return {
    status: undefined,
    message: err.message,
    error: err.message,
    data: null,
  };
};

export const thunkHandler = async <T>(
  asyncFn: Promise<AxiosResponse<T>>,
  thunkApi: any,
): Promise<T> => {
  try {
    const response = await asyncFn;
    return response.data;
  } catch (err) {
    const axiosErr = err as AxiosError;
    throw thunkApi.rejectWithValue(buildApiError(axiosErr));
  }
};
