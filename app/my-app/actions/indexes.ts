import { ITEM_INDEX_CHANGE } from '../constants';
export function changeIndex(index: number) {
  return {
    type: ITEM_INDEX_CHANGE,
    payload: index,
  };
}
