import { ShopActionTypes, ShopCollectionState } from './shop.types';

const INITIAL_STATE: ShopCollectionState = {
  collections: null
};

export function shopReducer(state = INITIAL_STATE, action: ShopActionTypes) {
  switch (action.type) {
    case 'shop/UPDATE_COLLECTIONS':
      return {
        ...state,
        collections: action.payload
      };
    default:
      return state;
  }
}
