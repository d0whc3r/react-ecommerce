export const UPDATE_COLLECTIONS = 'shop/UPDATE_COLLECTIONS';

export interface ShopCollectionItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

export interface ShopCollection extends ShopCollectionFirestore {
  id: string;
  routeName: string;
}

export interface ShopCollectionFirestore {
  title: string;
  items: ShopCollectionItem[];
}

export interface ShopCollectionCategories {
  [key: string]: ShopCollection;
}

// export type ShopCollectionCategoriesNames = keyof ShopCollectionCategories;
export type ShopCollectionCategoriesNames = keyof ShopCollectionState['collections'];

export interface ShopCollectionState {
  collections: ShopCollectionCategories | null;
}

export interface UpdateCollections {
  type: typeof UPDATE_COLLECTIONS;
  payload: ShopCollectionState['collections'];
}

export type ShopActionTypes = UpdateCollections;
