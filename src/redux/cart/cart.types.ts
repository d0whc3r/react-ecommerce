import { ShopCollectionItem } from '../../pages/shop/shop.types';

export const TOGGLE_CART_HIDDEN = 'cart/TOGGLE_CART_HIDDEN';
export const ADD_ITEM = 'cart/ADD_ITEM';
export const CLEAR_ITEM = 'cart/CLEAR_ITEM';
export const DECREASE_ITEM = 'cart/DECREASE_ITEM';
export const INCREASE_ITEM = 'cart/INCREASE_ITEM';

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

export interface CartClearItemAction {
  type: typeof CLEAR_ITEM;
  payload: number;
}

export interface CartDecreaseItemAction {
  type: typeof DECREASE_ITEM;
  payload: number;
}

export interface CartIncreaseItemAction {
  type: typeof INCREASE_ITEM;
  payload: number;
}

export type CartActionTypes = ToggleCartHiddenAction | CartAddAction | CartClearItemAction | CartDecreaseItemAction | CartIncreaseItemAction;
