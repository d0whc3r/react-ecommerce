export interface ShopCollectionItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

export interface ShopCollection {
  id: number;
  title: string;
  routeName: string;
  items: ShopCollectionItem[];
}

export interface ShopCollectionState {
  collections: ShopCollection[];
}
