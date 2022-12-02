import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './root.store';
import { globalThemes, ITheme } from '../styles/global/GlobalThemes.styled';


export interface LayoutState {
  currentTheme: ITheme;
}

const initialState: LayoutState = {
  currentTheme: globalThemes['lightMode']
};


const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setTheme(layout: LayoutState, action: PayloadAction<string>) {
      layout.currentTheme = globalThemes[action.payload];
    }
  }
});


//Reducer
export default layoutSlice.reducer;

//Actions
export const { setTheme } = layoutSlice.actions;

//Selectors
export const selectCurrentTheme = (state: RootState) => state.layout.currentTheme
