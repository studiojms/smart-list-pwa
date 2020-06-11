import { combineReducers } from '@reduxjs/toolkit';

import items from '../pages/home/smartItem/itemSlice';
import visibilityFilter from '../pages/home/smartItem/visibilityFilterSlice';

const rootReducer = combineReducers({
  items,
  visibilityFilter,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
