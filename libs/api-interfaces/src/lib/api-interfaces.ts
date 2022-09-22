import {Method} from "axios";

export interface Message {
  message: string;
}

export interface IPost {
  author_nickName: string;
  author_fullName: string;
  title: string;
  topic: string;
  content: string;
  post_id: string;
  saved: boolean;
  ups: number;
  visited: boolean;
}

export interface IUser {
  name: string;
  created: number;
  icon_img: string;
  id: string;
  inbox_count: number;
}

export interface IRequestParams {
  url: string
  queryParams?: any
  method: Method
  body?: Record<any, any>
  headers?: AxiosRequestHeaders
}

export interface IAjaxAdapter {
  request<T>(params: IRequestParams): Promise<IAjaxResponse<T | null>>
  authenticatedRequest<T>(
    params: IRequestParams
  ): Promise<IAjaxResponse<T | null>>
}

export interface IAjaxResponse<T> {
  data: T
  error: any
}

export type AxiosRequestHeaders = Record<string, string>;
