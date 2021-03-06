import { RootState } from '../root-reducer';
import { createSelector } from 'reselect';

function selectCart(state: RootState) {
  return state.cart;
}

export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems);

export const selectCartItemsCount = createSelector([selectCartItems], (cartItems) => cartItems.reduce((a, item) => a + item.quantity, 0));

export const selectCartTotal = createSelector([selectCartItems], (cartItems) => cartItems.reduce((a, item) => a + item.quantity * item.price, 0));

export const selectCartHidden = createSelector([selectCart], (cart) => cart.hidden);
