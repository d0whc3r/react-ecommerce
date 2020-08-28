import { CartItem } from '../redux/cart/cart.types';
import { ShopCollectionItem } from '../redux/shop/shop.types';

export function addItemToCart(cartItems: CartItem[], item: ShopCollectionItem | number) {
  const id = typeof item === 'number' ? item : item.id;
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === id);
  if (existingCartItem) {
    return cartItems.map((cartItem) => (cartItem.id === id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem));
  }

  if (typeof item !== 'number') {
    return [...cartItems, { ...item, quantity: 1 }];
  }
  return [];
}

export function removeItemFromCart(cartItems: CartItem[], id: number) {
  return cartItems
    .map((cartItem) => {
      if (cartItem.id === id) {
        return { ...cartItem, quantity: cartItem.quantity - 1 };
      }

      return cartItem;
    })
    .filter((cartItem) => cartItem.quantity > 0);
}

export function filterItemFromCart(cartItems: CartItem[], id: number) {
  return cartItems.filter((cartItem) => cartItem.id !== id);
}

export function getCartItemsCount(cartItems: CartItem[]) {
  return cartItems.reduce((a, item) => a + item.quantity, 0);
}

export function getTotal(cartItems: CartItem[]) {
  return cartItems.reduce((a, item) => a + item.quantity * item.price, 0);
}
