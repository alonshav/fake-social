import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import { addPostReducer, toggleReactionReducer } from './postsReducer';
import { PostId, PostsState } from '@types';

const initialState: PostsState = [];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: addPostReducer,
    toggleReaction: toggleReactionReducer
  }
});


//Reducer
export default postsSlice.reducer;

//Actions
export const { addPost, toggleReaction } = postsSlice.actions;

//Selectors
export const selectAllPosts = (state: RootState) => state.posts;

export const selectIsUserReacted = (state: RootState, id: PostId):boolean => {
  const post = state.posts.find(post => post.id === id)
  return post ? post.isUserReacted : false
};
