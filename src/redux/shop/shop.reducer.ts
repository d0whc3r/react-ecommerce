import SHOP_DATA from './shop.data';
import { ShopCollectionState } from './shop.types';

const INITIAL_STATE: ShopCollectionState = {
  collections: SHOP_DATA
};

export function shopReducer(state = INITIAL_STATE) {
  return state;
}
