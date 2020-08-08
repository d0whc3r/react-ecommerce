import { RootState } from '../root-reducer';
import { createSelector } from 'reselect';
import { ShopCollectionCategoriesNames } from './shop.types';

function selectShop(state: RootState) {
  return state.shop;
}

export const selectCollections = createSelector([selectShop], (shop) => shop.collections);

export const selectCollection = (collectionUrlParam: ShopCollectionCategoriesNames) =>
  createSelector([selectShop], (shop) => shop.collections[collectionUrlParam]);
