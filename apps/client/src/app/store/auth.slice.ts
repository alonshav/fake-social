import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthState, FetchingStatus } from '@types';
import { RootState } from './root.store';
import axios from 'axios';


const initialState: AuthState =
  {
    user: null,
    fetchingStatus: FetchingStatus.idle,
    isAuthenticated: false,
    error: null
  };

// Slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder

      // login
      .addCase(login.pending, (auth, action) => {
        auth.fetchingStatus = FetchingStatus.pending;
      })
      .addCase(login.fulfilled, (auth, action) => {
        auth.user = action.payload;
        auth.isAuthenticated = true;
        auth.fetchingStatus = FetchingStatus.success;
      })
      .addCase(login.rejected, (auth, action) => {
        auth.fetchingStatus = FetchingStatus.failed;
        if (action.error.message) auth.error = action.error.message;
      })

      // logout
      .addCase(logout.pending, (auth, action) => {
        auth.fetchingStatus = FetchingStatus.pending;
      })
      .addCase(logout.fulfilled, (auth, action) => {
        auth.user = null;
        auth.isAuthenticated = false;
        auth.fetchingStatus = FetchingStatus.success;
      })
      .addCase(logout.rejected, (auth, action) => {
        auth.fetchingStatus = FetchingStatus.failed;
      })

      // loadUser
      .addCase(loadUser.fulfilled, (auth, action) => {
        auth.user = action.payload
        auth.isAuthenticated = true;
        auth.fetchingStatus = FetchingStatus.success
      })
      .addCase(loadUser.rejected, (auth) => {
        auth.fetchingStatus = FetchingStatus.failed
      })
  }
});

//Selectors
export const selectLoginStatus = ({ auth }: RootState) => auth.fetchingStatus;
export const selectIsAuthenticated = ({ auth }: RootState) => auth.isAuthenticated;
export const selectAuthenticatedUser = ({ auth }: RootState) => auth.user;


//Async Thunks
export const login = createAsyncThunk(
  'auth/login',
  async ({ nickname, password }: { nickname: string, password: string }) => {
    try {
      const res = await axios.post('http://localhost:3333/api/v1/auth/login',
        {
          username: nickname,
          password
        }, { withCredentials: true });
      return res.data;
    } catch (e) {
      return e;
    }
  });

export const loadUser = createAsyncThunk(
  'auth/loadUser',
  async () => {
    try {
      const res = await axios.get('http://localhost:3333/api/v1/auth/user');
      return res.data;
    } catch (e) {
      return e;
    }
  }
)

export const logout = createAsyncThunk(
  'auth/logout',
  async () => {
    try {
      const res = await axios.post('http://localhost:3333/api/v1/auth/logout');
      return res.data;
    } catch (e) {
      return e;
    }
  });

//Export Main Reducer
export default authSlice.reducer;
