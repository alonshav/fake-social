import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './features/Posts/postsSlice';
import userReducer from './features/User/userSlice';
import layoutSlice from './layout/layoutSlice';

export const rootStore = configureStore({
  reducer: {
    posts: postsReducer,
    user: userReducer,
    layout: layoutSlice
    // comments: commentsReducer,
  }
});

export type RootState = ReturnType<typeof rootStore.getState>
export type AppDispatch = typeof rootStore.dispatch

export default rootStore;
