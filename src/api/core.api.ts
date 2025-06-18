import axios from 'axios';
import { AxiosError } from 'axios';
import { readToken } from '@/services/localStorage.service';
import { apiURL } from '@/configs/main.configs';
import { ApiError } from './apiError';

export const httpApi = axios.create({
  baseURL: apiURL
});

httpApi.interceptors.request.use((config) => {
  config.headers = config.headers.assign({ Authorization: `Bearer ${readToken()}` });

  return config;
});

httpApi.interceptors.response.use(undefined, (error: AxiosError) => {
  throw new ApiError<ApiErrorData>(
    (error.response?.data as ApiErrorData).message || error.message,
    error.response?.data as ApiErrorData
  );
});

export interface ApiErrorData {
  message: string;
}
