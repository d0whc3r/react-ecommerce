import { RootState } from '../root-reducer';
import { createSelector } from 'reselect';
import { ShopCollectionCategoriesNames, ShopCollectionState } from './shop.types';

function selectShop(state: RootState) {
  return state.shop;
}

export const selectCollections = createSelector([selectShop], (shop: ShopCollectionState) => shop.collections);

export const selectCollection = (collectionUrlParam: ShopCollectionCategoriesNames) =>
  createSelector([selectCollections], (collections: ShopCollectionState['collections']) => (collections ? collections[collectionUrlParam] : null));

export const selectCollectionsForPreview = createSelector([selectCollections], (collections: ShopCollectionState['collections']) =>
  collections ? Object.keys(collections).map((key) => collections[key as ShopCollectionCategoriesNames]) : []
);

export const selectAreCollectionsFetching = createSelector([selectShop], (shop: ShopCollectionState) => shop.isFetching);
