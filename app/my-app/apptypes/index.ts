export interface Item {
  id: number;
  name: string;
  price: number;
  isCollected: boolean;
}

export type Items = Item[];