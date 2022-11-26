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
  succeeded = 'SUCCEEDED',
  failed = 'FAILED',
  idle = 'IDLE'
}

export type PostsState = {
  list: IPost[]
  loadingStatus: LoadingStatus,
  error: string | null
}

export type PostsAction =
  { type: 'ADD_POST'; payload: IPost }
  | { type: 'DELETE_POST'; payload: IPost }
  | { type: 'UPDATE_POST'; payload: IPost }
  | { type: 'RELOAD_POSTS'; payload: IPost[] }
  | { type: 'RESET_LIST' }

export type PostId = string

export interface Author {
  nickName: string;
  firstName: string;
  author_id: string;
  profilePicture?: string;
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
  isUserReacted: boolean;
}

export type UserId = string
export type UserRole = 'user' | 'admin'

export interface IUser {
  id: UserId;
  nickName: string;
  firstName: string;
  lastName: string;
  email:string;
  profilePicture?: string;
  createdAt: string;
  role: UserRole
}

export type LoginId = string;

export interface IUserLogin {
  id: LoginId;
  nickName: string;
  passwordHash: string;
  passwordSalt: string;
  RelatedUserId: UserId;
}


type PostCommentId = string

interface PostComment {
  id: PostCommentId;
  nickName: string;
  firstName: string;
  profilePicture?: string;
  text: string;
  image?: string;
}



