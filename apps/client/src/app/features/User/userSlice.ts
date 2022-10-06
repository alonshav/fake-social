import { IUser } from '@types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';

export interface UserState {
  currentUser: IUser;
}

const initialState: UserState = {
  currentUser: {
    id: '01',
    nick_name: 'Beitz',
    full_name: 'Alon Shavit',
    profile_picture: 'https://www.w3schools.com/w3css/img_lights.jpg',
    createdAt: new Date().toISOString()
  }
};


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loadUser(user, action: PayloadAction<IUser>) {
      user.currentUser = action.payload;
    }
  }
});


//Reducer
export default userSlice.reducer;

//Actions
export const { loadUser } = userSlice.actions;

//Selectors
export const selectCurrentUser = (state:RootState) => state.user.currentUser;
