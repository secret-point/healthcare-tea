import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ILoadingState } from './types';

export const initialState: ILoadingState = {
  loading: false,
};

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

// Actions
export const loadingActions = loadingSlice.actions;

// Reducer
const loadingReducer = loadingSlice.reducer;

export default loadingReducer;
