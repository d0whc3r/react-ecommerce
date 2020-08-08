import { RootState } from '../root-reducer';
import { createSelector } from 'reselect';

const COLLECTION_ID_MAP: { [name: string]: number } = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5
};

function selectShop(state: RootState) {
  return state.shop;
}

export const selectCollections = createSelector([selectShop], (shop) => shop.collections);

export const selectCollection = (collectionUrlParam: string) =>
  createSelector([selectShop], (shop) => shop.collections.find((collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]));
