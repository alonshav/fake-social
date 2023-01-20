import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './posts/posts.slice';
import layoutSlice from './layout.slice';
import authSlice from './auth.slice';

export const rootStore = configureStore({
  reducer: {
    posts: postsReducer,
    layout: layoutSlice,
    auth: authSlice
    // comments: commentsReducer,
  }
});

export type RootState = ReturnType<typeof rootStore.getState>
export type AppDispatch = typeof rootStore.dispatch

export default rootStore;
