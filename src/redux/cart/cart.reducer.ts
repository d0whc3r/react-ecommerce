import { CartActionTypes, CartState, TOGGLE_CART_HIDDEN } from './cart.types';

const INITIAL_STATE: CartState = {
  hidden: true
};

export function cartReducer(state = INITIAL_STATE, action: CartActionTypes) {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    default:
      return state;
  }
}
