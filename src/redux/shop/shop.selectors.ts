import { RootState } from '../root-reducer';
import { createSelector } from 'reselect';

function selectShop(state: RootState) {
  return state.shop;
}

export const selectCollections = createSelector([selectShop], (shop) => shop.collections);
