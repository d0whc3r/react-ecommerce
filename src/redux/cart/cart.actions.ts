import {
  ADD_ITEM,
  CartActionTypes,
  CartAddAction,
  CartClearItemAction,
  CartDecreaseItemAction,
  CartIncreaseItemAction,
  CLEAR_ITEM,
  DECREASE_ITEM,
  INCREASE_ITEM,
  TOGGLE_CART_HIDDEN
} from './cart.types';

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

export function clearItem<T extends CartClearItemAction['payload']>(id: T): CartActionTypes {
  return {
    type: CLEAR_ITEM,
    payload: id
  };
}

export function decreaseItem<T extends CartDecreaseItemAction['payload']>(id: T): CartActionTypes {
  return {
    type: DECREASE_ITEM,
    payload: id
  };
}

export function increaseItem<T extends CartIncreaseItemAction['payload']>(id: T): CartActionTypes {
  return {
    type: INCREASE_ITEM,
    payload: id
  };
}
