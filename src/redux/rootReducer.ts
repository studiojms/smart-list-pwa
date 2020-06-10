import { combineReducers } from '@reduxjs/toolkit';

import items from '../pages/smartItem/itemSlice';
import visibilityFilter from '../pages/smartItem/visibilityFilterSlice';

const rootReducer = combineReducers({
  items,
  visibilityFilter,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
