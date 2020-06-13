import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum VisibilityFilter {
  ShowAll = 'SHOW_ALL',
  ShowCompleted = 'SHOW_COMPLETED',
  ShowActive = 'SHOW_ACTIVE',
}

const initialState = VisibilityFilter.ShowAll;

/**
 * Redux slice for the visibility filter
 */
const visibilityFilterSlice = createSlice({
  name: 'visibilityFilter',
  initialState,
  reducers: {
    setVisibilityFilter(state, action: PayloadAction<VisibilityFilter>): VisibilityFilter {
      return action.payload;
    },
  },
});

export const { setVisibilityFilter } = visibilityFilterSlice.actions;

export default visibilityFilterSlice.reducer;
