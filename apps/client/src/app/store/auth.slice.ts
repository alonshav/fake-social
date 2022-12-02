import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, IUser, LoadingStatus } from '@types';
import axios from 'axios';
import { RootState } from './root.store';
import { globalThemes } from '../styles/global/GlobalThemes.styled';
import { LayoutState } from './layout.slice';


const initialState: AuthState =
  {
    user: null,
    loadingStatus: LoadingStatus.idle,
    isAuthenticated: false,
    error: null
  };


// Slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loadUser(auth: AuthState) {
      const currentUser = localStorage.getItem('currentUser');
      if (!currentUser) return;
      auth.user = JSON.parse(currentUser);
    }
  },
  extraReducers: builder => {
    builder
      .addCase(login.pending, (auth, action) => {
        auth.loadingStatus = LoadingStatus.pending;
      })
      .addCase(login.fulfilled, (auth, action) => {
        auth.user = action.payload;
        localStorage.setItem('currentUser', JSON.stringify(auth.user));
        auth.isAuthenticated = true;
        auth.loadingStatus = LoadingStatus.success;
      })
      .addCase(login.rejected, (auth, action) => {
        auth.loadingStatus = LoadingStatus.failed;
        if (action.error.message) auth.error = action.error.message;
      })
      .addCase(logout.pending, (auth, action) => {
        auth.loadingStatus = LoadingStatus.pending;
      })
      .addCase(logout.fulfilled, (auth, action) => {
        auth.user = null;
        auth.isAuthenticated = false;
        localStorage.clear();
        auth.loadingStatus = LoadingStatus.success;
      })
      .addCase(logout.rejected, (auth, action) => {
        auth.loadingStatus = LoadingStatus.failed;
      });
  }
});

//Actions
export const {loadUser} = authSlice.actions;


//Selectors
export const selectLoginStatus = ({ auth }: RootState) => auth.loadingStatus;
export const selectIsAuthenticated = ({ auth }: RootState) => auth.isAuthenticated;
export const selectAuthenticatedUser = ({ auth }: RootState) => auth.user;


//Async Thunks
export const login = createAsyncThunk(
  'auth/login',
  async ({ nickName, password }: { nickName: string, password: string }) => {
    try {
      const res = await axios.post('http://localhost:3333/api/auth/login',
        {
          username: nickName,
          password
        }, { withCredentials: true });
      return res.data;
    } catch (e) {
      return e;
    }
  });

export const logout = createAsyncThunk(
  'auth/logout',
  async () => {
    try {
      const res = await axios.post('http://localhost:3333/api/auth/logout');
      return res.data;
    } catch (e) {
      return e;
    }
  });

//Export Main Reducer
export default authSlice.reducer;
