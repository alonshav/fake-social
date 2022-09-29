import { Method } from 'axios';

export interface IRequestParams {
  url: string;
  queryParams?: any;
  method: Method;
  body?: Record<any, any>;
  headers?: AxiosRequestHeaders;
}

export interface IAjaxAdapter {
  request<T>(params: IRequestParams): Promise<IAjaxResponse<T | null>>;

  authenticatedRequest<T>(
    params: IRequestParams
  ): Promise<IAjaxResponse<T | null>>;
}

export interface IAjaxResponse<T> {
  response: T;
  error: any;
}

export type AxiosRequestHeaders = Record<string, string>;


export type FetchState = {
  loadingStatus: LoadingStatus;
  data?: any;
  error?: string | null;
}

export type FetchAction =
  | { type: 'FETCH' }
  | { type: 'RESOLVE'; payload: any }
  | { type: 'REJECT'; error: string };

export enum LoadingStatus {
  loading = 'LOADING',
  success = 'SUCCESS',
  failed = 'FAILED',
  idle = 'IDLE'
}

export interface PostsState {
  posts: IPost[],
  loadingState: LoadingStatus,
  error: Error | null
}

export type PostsAction =
  { type: 'ADD_POST'; payload: IPost}
  | { type: 'DELETE_POST'; payload: IPost }
  | { type: 'UPDATE_POST'; payload: IPost }
  | { type: 'RELOAD_POSTS'; payload: IPost[]}
  | { type: 'RESET_LIST' }


export interface IPost {
  author_nickName: string;
  author_fullName: string;
  title: string;
  topic: string;
  content: string;
  id: string;
  saved: boolean;
  ups: number;
  visited: boolean;
}
