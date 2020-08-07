import { ShopCollectionItem } from '../../pages/shop/shop.types';

export const TOGGLE_CART_HIDDEN = 'cart/TOGGLE_CART_HIDDEN';
export const ADD_ITEM = 'cart/ADD_ITEM';
export const REMOVE_ITEM = 'cart/REMOVE_ITEM';

export interface CartItem extends ShopCollectionItem {
  quantity: number;
}

export interface CartState {
  hidden: boolean;
  cartItems: CartItem[];
}

export interface ToggleCartHiddenAction {
  type: typeof TOGGLE_CART_HIDDEN;
}

export interface CartAddAction {
  type: typeof ADD_ITEM;
  payload: ShopCollectionItem;
}

export interface CartRemoveAction {
  type: typeof REMOVE_ITEM;
  payload: number;
}

export type CartActionTypes = ToggleCartHiddenAction | CartAddAction | CartRemoveAction;
