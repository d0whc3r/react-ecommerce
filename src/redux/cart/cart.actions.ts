import { ADD_ITEM, CartActionTypes, CartAddAction, CartRemoveAction, REMOVE_ITEM, TOGGLE_CART_HIDDEN } from './cart.types';

export function toggleCartHidden(): CartActionTypes {
  return {
    type: TOGGLE_CART_HIDDEN
  };
}

export function addItem<T extends CartAddAction['payload']>(item: T): CartActionTypes {
  return {
    type: ADD_ITEM,
    payload: item
  };
}

export function removeItem<T extends CartRemoveAction['payload']>(id: T): CartActionTypes {
  return {
    type: REMOVE_ITEM,
    payload: id
  };
}
