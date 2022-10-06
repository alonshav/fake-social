import {configureStore} from '@reduxjs/toolkit';
import postsReducer from '../features/Posts/postsSlice';
import userReducer from '../features/User/userSlice'

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    user: userReducer,
    // comments: commentsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
