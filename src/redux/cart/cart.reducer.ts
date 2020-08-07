import { ADD_ITEM, CartActionTypes, CartState, CLEAR_ITEM, DECREASE_ITEM, INCREASE_ITEM, TOGGLE_CART_HIDDEN } from './cart.types';
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
    case CLEAR_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((cartItem) => cartItem.id !== action.payload)
      };
    case DECREASE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.map((cartItem) => (cartItem.id !== action.payload ? cartItem : { ...cartItem, quantity: cartItem.quantity - 1 }))
      };
    case INCREASE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.map((cartItem) => (cartItem.id !== action.payload ? cartItem : { ...cartItem, quantity: cartItem.quantity + 1 }))
      };
    default:
      return state;
  }
}
