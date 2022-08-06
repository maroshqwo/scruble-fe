export type ApiError = {
    status?: number;
    message: string;
    error: string;
    data: any;
  };

export type Entity = {
    id: number;

    createdAt: string;
    updatedAt: string;
  };
