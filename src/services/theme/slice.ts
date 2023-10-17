import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IThemeState } from '~Root/services/theme/types';
import { THEME } from '~Root/services/theme/colors';
import { RootState } from '~Root/store';

export const initialState: IThemeState = {
  type: THEME.DEFAULT,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<THEME>) => {
      state.type = action.payload;
    },
  },
});

// Actions
export const themeActions = themeSlice.actions;

// Reducer
const themeReducer = themeSlice.reducer;

export const selectThemeState = (state: RootState) => state.themeState;

export default themeReducer;
