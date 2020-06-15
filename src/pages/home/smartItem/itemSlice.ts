import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppDispatch, AppThunk } from '../../../redux/store';
import { Item } from './types';
import { listItems, saveItems } from '../../../api/api';

const initialState: Item[] = [];

/**
 * Redux slice to deal with the items
 */
const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    receiveItems(state, action: PayloadAction<Item[]>) {
      return action.payload;
    },
    filterItems(state, action: PayloadAction<string>) {
      return state.filter((item) => item.text.toLowerCase().includes(action.payload.toLowerCase()));
    },
    addItem(state, action: PayloadAction<Item>): void {
      state.push(action.payload);
    },
    removeItem(state, action: PayloadAction<Item>) {
      return state.filter((item) => item.id != action.payload.id);
    },
    removeAllItems() {
      return [];
    },
    removeCompletedItems(state) {
      return state.filter((i) => !i.completed);
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

/**
 * Loads the items
 */
const loadItems = (): AppThunk => async (dispatch: AppDispatch) => {
  const items = await listItems();
  dispatch(itemSlice.actions.receiveItems(items));
};

/**
 * Filters the items based on the given text
 *
 * @param {string} text text to filter the items
 */
const filterItems = (text: string): AppThunk => async (dispatch: AppDispatch) => {
  if (text) {
    dispatch(itemSlice.actions.filterItems(text));
  } else {
    const items = await listItems();
    dispatch(itemSlice.actions.receiveItems(items));
  }
};

/**
 * Adds a new item to the list
 *
 * @param {string} text text of the new item
 */
const addItem = (text: string): AppThunk => async (dispatch: AppDispatch) => {
  const newItem: Item = {
    id: Math.random().toString(36).substr(2, 9),
    completed: false,
    text: text,
  };

  dispatch(itemSlice.actions.addItem(newItem));

  const items = await listItems();

  saveItems(Array.from(new Set([...items, newItem])));
};

/**
 * Marks/unmarks an item as completed
 *
 * @param {Item} item item to be toggled
 */
const toggleItem = (item: Item): AppThunk => async (dispatch: AppDispatch) => {
  dispatch(itemSlice.actions.toggleItem(item));

  const items = await listItems();

  const processedItems = items.map((i) => {
    if (i.id === item.id) {
      i.completed = !i.completed;
    }
    return i;
  });

  saveItems(processedItems);
};

/**
 * Removes an item from the list
 *
 * @param {Item} item item to be removed
 */
const removeItem = (item: Item): AppThunk => async (dispatch: AppDispatch) => {
  dispatch(itemSlice.actions.removeItem(item));
  const items = (await listItems()).filter((i) => i.id != item.id);

  saveItems(items);
};

/**
 * Removes all items from the list
 *
 */
const removeAllItems = (): AppThunk => async (dispatch: AppDispatch) => {
  dispatch(itemSlice.actions.removeAllItems());

  saveItems([]);
};

/**
 * Removes aall completed items from the list
 *
 */
const removeCompletedItems = (): AppThunk => async (dispatch: AppDispatch) => {
  dispatch(itemSlice.actions.removeCompletedItems());
  const items = (await listItems()).filter((i) => !i.completed);

  saveItems(items);
};

/**
 * Adds a list of items
 *
 * @param {string[]} items items to be added
 */
const addItems = (items: string[]): AppThunk => async (dispatch: AppDispatch) => {
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
export { loadItems, filterItems, addItem, toggleItem, removeItem, addItems, removeAllItems, removeCompletedItems };
