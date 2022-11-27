import { IUser } from '@types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../rootStore';

export interface UserState {
  current: IUser | null;
}

const initialState: UserState = {
  current: null
};


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loadUser(user: UserState, action: PayloadAction<IUser>) {
      user.current = action.payload;
    },
    clearUser(user: UserState) {
      user.current = null;
    }
  }
});


//Reducer
export default userSlice.reducer;

//Actions
export const { loadUser, clearUser } = userSlice.actions;

//Selectors
export const selectCurrentUser = (state: RootState) => state.user.current;
