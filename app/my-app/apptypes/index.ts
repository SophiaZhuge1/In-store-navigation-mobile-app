export interface Item {
  id: number;
  name: string;
  price: number;
  isCollected: boolean;
  category: string;
  position: number;
  quantity:number;
}

export type Items = Item[];