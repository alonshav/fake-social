import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import { addPostReducer, toggleReactionReducer } from './postsReducers';
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
        posts.loadingStatus = LoadingStatus.loading;
      })
      .addCase(fetchPosts.fulfilled, (posts, action) => {
        posts.loadingStatus = LoadingStatus.succeeded;
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

export const selectIsUserReacted = ({ posts }: RootState, id: PostId): boolean => {
  const post = posts.list.find(post => post.id === id);
  return post ? post.isUserReacted : false;
};


//Async Thunks
export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    const response = await axios.get('http://localhost:3333/api/posts');
    return response.data;
  });


//Export Main Reducer
export default postsSlice.reducer;
