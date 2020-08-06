import { CartAddAction, CartItem } from './cart.types';

export function addItemToCart(cartItems: CartItem[], item: CartAddAction['payload']) {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === item.id);
  if (existingCartItem) {
    return cartItems.map((cartItem) => (cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem));
  }

  return [...cartItems, { ...item, quantity: 1 }];
}
