import React from "react";
import { Items } from "../apptypes";
import { FilterItems } from "../shoppinglist/SearchBar";

export type Store =  {
  allItems: FilterItems[];
  setAllItems: (fetchedItems: FilterItems[]) => void;
  currentItemIndex: number;
  changeItemIndex: (index: number) => void;
  itemList: Items;
  setItemList: (items: Items) => void;
  toggleCollect: (id: number) => void;
}

export const DataStoreContext = React.createContext<Store>({
  currentItemIndex: 0,
  changeItemIndex: () => {},
  itemList: [],
  setItemList: () => {},
  toggleCollect: () => {},
  allItems: [],
  setAllItems: () => {}
});