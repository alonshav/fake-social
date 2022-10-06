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

export type PostsState = IPost[]

export type PostsAction =
  { type: 'ADD_POST'; payload: IPost }
  | { type: 'DELETE_POST'; payload: IPost }
  | { type: 'UPDATE_POST'; payload: IPost }
  | { type: 'RELOAD_POSTS'; payload: IPost[] }
  | { type: 'RESET_LIST' }

export type PostId = string

export interface Author {
  nick_name: string;
  full_name: string;
  author_id: string;
  profile_picture?: string;
}

export type Reaction = 'like'

export interface IPost {
  author: Author;
  title?: string;
  topic?: string;
  text: string;
  image?: string;
  ups: number;
  id: PostId;
  createdAt: string;
  reactions: Record<Reaction, number>;
  isUserReacted: boolean
}

export type UserId = string

export interface IUser {
  id: UserId;
  nick_name: string;
  full_name: string;
  profile_picture?: string;
  createdAt: string;
}

type PostCommentId = string

interface PostComment {
  id: PostCommentId;
  nick_name: string;
  full_name: string;
  profile_picture?: string;
  text: string;
  image?: string;
}

