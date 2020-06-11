import { Item } from '../pages/home/smartItem/types';

const STORAGE_KEY = 'SL_ITEMS';

async function listItems(): Promise<Item[]> {
  if ('localStorage' in window) {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      return JSON.parse(data) as Item[];
    }
  }
  return [];
}

async function saveItems(items: Item[]) {
  if ('localStorage' in window) {
    const data = JSON.stringify(items);
    localStorage.setItem(STORAGE_KEY, data);
  }
}

export { listItems, saveItems };
