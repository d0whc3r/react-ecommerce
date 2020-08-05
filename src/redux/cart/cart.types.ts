export const TOGGLE_CART_HIDDEN = 'cart/TOGGLE_CART_HIDDEN';

export interface CartState {
  hidden: boolean;
}

interface ToggleCartHiddenAction {
  type: typeof TOGGLE_CART_HIDDEN;
}

export type CartActionTypes = ToggleCartHiddenAction;
