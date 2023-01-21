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
  data: T;
  error: any;
}

export type AxiosRequestHeaders = Record<string, string>;

export type FetchState = {
  fetchingStatus: FetchingStatus;
  data?: any;
  error?: string | null;
};

export type FetchAction =
  | { type: 'FETCH' }
  | { type: 'RESOLVE'; payload: any }
  | { type: 'REJECT'; error: string };

export enum FetchingStatus {
  pending = 'PENDING',
  success = 'SUCCEEDED',
  failed = 'FAILED',
  idle = 'IDLE',
}

export type PostsState = {
  list: IPost[];
  loadingStatus: FetchingStatus;
  error: string | null;
};

export type PostsAction =
  | { type: 'ADD_POST'; payload: IPost }
  | { type: 'DELETE_POST'; payload: IPost }
  | { type: 'UPDATE_POST'; payload: IPost }
  | { type: 'RELOAD_POSTS'; payload: IPost[] }
  | { type: 'RESET_LIST' };

export type PostId = string;

export interface IPost {
  id: PostId;
  author: IUser;
  title: string;
  topic: string;
  text: string;
  images: string[];
  reactions: Record<ReactionType, number>;
  isUserReacted: boolean;
  createdAt: string;
  updatedAt?: string;
}

export type UserId = string;

export interface IUser {
  id: UserId;
  nickname: string;
  firstname: string;
  lastname: string;
  email: string;
  profilePicture?: string;
  role: UserRole;
}

export enum ReactionType {
  like = 'LIKE',
  celebrate = 'CELEBRATE',
  funny = 'FUNNY',
  love = 'LOVE',
  sad = 'SAD',
}

export enum UserRole {
  user = 'USER',
  admin = 'ADMIN',
}

export type LoginId = string;

export interface IUserLogin {
  id: LoginId;
  nickname: string;
  passwordHash: string;
  passwordSalt: string;
  RelatedUserId: UserId;
}

type PostCommentId = string;

interface PostComment {
  id: PostCommentId;
  nickname: string;
  firstname: string;
  profilePicture?: string;
  text: string;
  image?: string;
}

export interface AuthState {
  user: IUser | null;
  fetchingStatus: FetchingStatus;
  isAuthenticated: boolean;
  error: string | null;
}
