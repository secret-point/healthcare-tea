import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '~Root/store';
// import { IAuth, IAuthState } from './types';

export const initialState: IAnxietyAssessmentState = {
  answers: [1, 2],
};

export const anxietyAssessmentSlice = createSlice({
  name: 'anxietyAssessment',
  initialState,
  reducers: {
    setAnswer: (state, action: PayloadAction<IAnxietyAssessment>) => {
      const { step, focusedOption } = action.payload;
      state.answers[step] = focusedOption;
    },
  },
});

// Actions
export const anxietyAssessmentActions = anxietyAssessmentSlice.actions;

// Reducer
const anxietyAssessmentReducer = anxietyAssessmentSlice.reducer;

export default anxietyAssessmentReducer;
