import { ShopCollectionItem } from '../../pages/shop/shop.types';

export const TOGGLE_CART_HIDDEN = 'cart/TOGGLE_CART_HIDDEN';
export const ADD_ITEM = 'cart/ADD_ITEM';

export interface CartItem extends ShopCollectionItem {
  quantity: number;
}

export interface CartState {
  hidden: boolean;
  cartItems: CartItem[];
}

interface ToggleCartHiddenAction {
  type: typeof TOGGLE_CART_HIDDEN;
}

export interface CartAddAction {
  type: typeof ADD_ITEM;
  payload: ShopCollectionItem;
}

export type CartActionTypes = ToggleCartHiddenAction | CartAddAction;
