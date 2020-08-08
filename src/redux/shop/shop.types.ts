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

export interface ShopCollectionCategories {
  hats: ShopCollection;
  jackets: ShopCollection;
  sneakers: ShopCollection;
  womens: ShopCollection;
  mens: ShopCollection;
}

export type ShopCollectionCategoriesNames = keyof ShopCollectionCategories;

export interface ShopCollectionState {
  collections: ShopCollectionCategories;
}
