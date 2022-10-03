import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { IPost, LoadingStatus, PostsAction, PostsState } from '@types';
import axios from 'axios';
import { reloadPosts } from './PostsActionCreators';
import { PostModel } from '../../../../models/Post.model';


const PostsContext = createContext<IPost[]>([]);
const PostsDispatchContext = createContext<any>(null);


type Props = { children: JSX.Element }

function PostsProvider({ children }: Props) {

  const initialState: PostsState = {
    posts: [],
    loadingState: LoadingStatus.idle,
    error: null
  };

  const [state, dispatch] = useReducer(postsReducer, initialState);


  useEffect(() => {
    axios.get('http://localhost:3333/api/posts')
      .then((res) => {
        const posts = res.data.map((post:IPost) => {
          return new PostModel(post);
        })
        dispatch(reloadPosts(posts));
      });
  }, []);

  return (
    <PostsContext.Provider value={state.posts}>
      <PostsDispatchContext.Provider value={dispatch}>
        {children}
      </PostsDispatchContext.Provider>
    </PostsContext.Provider>
  );
}

function postsReducer(currentState: PostsState, action: PostsAction) {
  switch (action.type) {
    case 'ADD_POST' :
      return {
        ...currentState,
        posts: [...currentState.posts, action.payload]
      };
    case 'DELETE_POST':
      return {
        ...currentState,
        posts: currentState.posts.filter((post) => post.id !== action.payload.id)
      };
    case 'UPDATE_POST':
      return {
        ...currentState,
        posts: currentState.posts.map((post) =>
          post.id === action.payload.id
            ? action.payload
            : post)
      };
    case 'RELOAD_POSTS':
      return {
        ...currentState,
        posts: [...action.payload]
      };
    case 'RESET_LIST':
      return {
        ...currentState,
        posts: []
      };
    default:
      return currentState;
  }
}

export function usePosts() {
  return useContext(PostsContext);
}

export function usePostsDispatch() {
  return useContext(PostsDispatchContext);
}

export default PostsProvider;
