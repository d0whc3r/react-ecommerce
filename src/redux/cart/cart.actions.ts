import { CartActionTypes, TOGGLE_CART_HIDDEN } from './cart.types';

export function toggleCartHidden(): CartActionTypes {
  return {
    type: TOGGLE_CART_HIDDEN
  };
}
