import {
  FETCH_COLLECTIONS_FAILURE,
  FETCH_COLLECTIONS_FINISH,
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  ShopActionTypes,
  ShopCollectionState
} from './shop.types';

const INITIAL_STATE: ShopCollectionState = {
  collections: null,
  isFetching: false,
  errorMessage: undefined
};

export function shopReducer(state = INITIAL_STATE, action: ShopActionTypes) {
  switch (action.type) {
    case FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_COLLECTIONS_FINISH:
      return {
        ...state,
        isFetching: false
      };
    case FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections: action.payload
      };
    case FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        collections: [],
        errorMessage: action.payload
      };
    default:
      return state;
  }
}
