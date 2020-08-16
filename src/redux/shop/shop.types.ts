export const FETCH_COLLECTIONS_START = 'shop/FETCH_COLLECTIONS_START';
export const FETCH_COLLECTIONS_FINISH = 'shop/FETCH_COLLECTIONS_FINISH';
export const FETCH_COLLECTIONS_SUCCESS = 'shop/FETCH_COLLECTIONS_SUCCESS';
export const FETCH_COLLECTIONS_FAILURE = 'shop/FETCH_COLLECTIONS_FAILURE';

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

export type ShopCollectionCategoriesNames = keyof ShopCollectionState['collections'];

export interface ShopCollectionState {
  collections: ShopCollectionCategories | null;
  isFetching: boolean;
  errorMessage?: string;
}

export interface FetchCollectionsStart {
  type: typeof FETCH_COLLECTIONS_START;
}

export interface FetchCollectionsFinish {
  type: typeof FETCH_COLLECTIONS_FINISH;
}

export interface FetchCollectionsSuccess {
  type: typeof FETCH_COLLECTIONS_SUCCESS;
  payload: ShopCollectionState['collections'];
}

export interface FetchCollectionsFailure {
  type: typeof FETCH_COLLECTIONS_FAILURE;
  payload: string;
}

export type ShopActionTypes = FetchCollectionsStart | FetchCollectionsFinish | FetchCollectionsSuccess | FetchCollectionsFailure;
