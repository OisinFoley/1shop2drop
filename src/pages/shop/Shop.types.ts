export interface ShopCategory {
  id: number;
  title: string;
  routeName: string;
  items: ShopItem[];
}

export interface ShopItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

export interface ShopPageState {
  collections: ShopCategory[];
}
