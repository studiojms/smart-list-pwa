import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppDispatch, AppThunk } from '../../redux/store';
import { Item } from './types';
import { listItems, saveItems } from '../../api/api';
import { RootState } from '../../redux/rootReducer';

const initialState: Item[] = [];

const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    receiveItems(state, action: PayloadAction<Item[]>) {
      return action.payload;
    },
    filterItems(state, action: PayloadAction<string>) {
      return state.filter((item) => item.text.includes(action.payload));
    },
    addItem(state, action: PayloadAction<Item>): void {
      state.push(action.payload);
    },
    removeItem(state, action: PayloadAction<Item>) {
      return state.filter((item) => item.id != action.payload.id);
    },
    addItems(state, action: PayloadAction<Item[]>): void {
      state.push(...action.payload);
    },
    toggleItem(state, action: PayloadAction<Item>): void {
      const item = state.find((i) => i.id === action.payload.id);

      if (item) {
        item.completed = !item.completed;
      }
    },
  },
});

export const loadItems = (): AppThunk => async (dispatch: AppDispatch) => {
  const items = await listItems();
  dispatch(itemSlice.actions.receiveItems(items));
};

export const filterItems = (text: string): AppThunk => async (dispatch: AppDispatch) => {
  if (text) {
    dispatch(itemSlice.actions.filterItems(text));
  } else {
    const items = await listItems();
    dispatch(itemSlice.actions.receiveItems(items));
  }
};

export const addItem = (text: string): AppThunk => async (dispatch: AppDispatch, getState: () => RootState) => {
  const newItem: Item = {
    id: Math.random().toString(36).substr(2, 9),
    completed: false,
    text: text,
  };

  dispatch(itemSlice.actions.addItem(newItem));

  const items = await listItems();

  saveItems(Array.from(new Set([...items, newItem])));
};

export const toggleItem = (item: Item): AppThunk => async (dispatch: AppDispatch, getState: () => RootState) => {
  dispatch(itemSlice.actions.toggleItem(item));

  const items = (await listItems()).filter((i) => i.id != item.id);

  saveItems(Array.from(new Set([...items, ...getState().items])));
};

export const removeItem = (item: Item): AppThunk => async (dispatch: AppDispatch, getState: () => RootState) => {
  dispatch(itemSlice.actions.removeItem(item));
  const items = (await listItems()).filter((i) => i.id != item.id);

  saveItems(items);
};

export const addItems = (items: string[]): AppThunk => async (dispatch: AppDispatch, getState: () => RootState) => {
  const newItems: Item[] = items.map((item) => {
    return {
      id: Math.random().toString(36).substr(2, 9),
      completed: false,
      text: item,
    };
  });

  dispatch(itemSlice.actions.addItems(newItems));

  const itemList = await listItems();
  saveItems([...itemList, ...newItems]);
};

export default itemSlice.reducer;
