export interface Item {
  id: number;
  name: string;
  price: number;
  isCollected: boolean;
  category: string;
}

export type Items = Item[];