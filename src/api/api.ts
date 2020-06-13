import { Item } from '../pages/home/smartItem/types';

const STORAGE_KEY = 'SL_ITEMS';

/**
 * Lists items from repository
 */
async function listItems(): Promise<Item[]> {
  if ('localStorage' in window) {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      return JSON.parse(data) as Item[];
    }
  }
  return [];
}

/**
 * Saves items to the repository
 *
 * @param items list of items
 */
async function saveItems(items: Item[]): Promise<void> {
  if ('localStorage' in window) {
    const data = JSON.stringify(items);
    localStorage.setItem(STORAGE_KEY, data);
  }
}

export { listItems, saveItems };
