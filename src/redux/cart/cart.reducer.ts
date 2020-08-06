import { ADD_ITEM, CartActionTypes, CartState, TOGGLE_CART_HIDDEN } from './cart.types';
import { addItemToCart } from './cart.utils';

const INITIAL_STATE: CartState = {
  hidden: true,
  cartItems: []
};

export function cartReducer(state = INITIAL_STATE, action: CartActionTypes) {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    default:
      return state;
  }
}
