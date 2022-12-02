import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from './root.store';
import { addPostReducer, toggleReactionReducer } from '../features/Posts/postsReducers';
import { LoadingStatus, PostId, PostsState } from '@types';
import axios from 'axios';


const initialState: PostsState =
  {
    list: [],
    loadingStatus: LoadingStatus.idle,
    error: null
  };


// Slice
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: addPostReducer,
    toggleReaction: toggleReactionReducer
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPosts.pending, (posts, action) => {
        posts.loadingStatus = LoadingStatus.pending;
      })
      .addCase(fetchPosts.fulfilled, (posts, action) => {
        posts.loadingStatus = LoadingStatus.success;
        posts.list = action.payload;
      })
      .addCase(fetchPosts.rejected, (posts, action) => {
        posts.loadingStatus = LoadingStatus.failed;
        if (action.error.message) posts.error = action.error.message;
      });
  }
});

//Actions
export const { addPost, toggleReaction } = postsSlice.actions;


//Selectors
export const selectAllPosts = ({ posts }: RootState) => posts.list;

export const selectPostById = ({ posts }: RootState, postId?: PostId) =>
  posts.list.find(post => post.id === postId);

export const selectHasUserReacted = ({ posts }: RootState, id: PostId): boolean => {
  const post = posts.list.find(post => post.id === id);
  return post ? post.isUserReacted : false;
};


//Async Thunks
export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    const response = await axios.get('http://localhost:3333/api/posts',{ withCredentials: true});
    return response.data;
  });


//Export Main Reducer
export default postsSlice.reducer;
