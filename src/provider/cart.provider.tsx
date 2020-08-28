import React, { createContext, useEffect, useState } from 'react';
import { addItemToCart, filterItemFromCart, getCartItemsCount, getTotal, removeItemFromCart } from './cart.utils';
import { CartItem, CartState } from '../redux/cart/cart.types';
import { ShopCollectionItem } from '../redux/shop/shop.types';

interface CartContextState extends CartState {
  toggleHidden: Function;
  addItem: Function;
  removeItem: Function;
  clearItemFromCart: Function;
  cartItemsCount: number;
  total: number;
}

export const CartContext = createContext<CartContextState>({
  hidden: true,
  toggleHidden: () => {},
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  clearItemFromCart: () => {},
  cartItemsCount: 0,
  total: 0
});

const CartProvider: React.FC = ({ children }) => {
  const [hidden, setHidden] = useState(true);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [total, setTotal] = useState(0);

  const addItem = (item: ShopCollectionItem | number) => setCartItems(addItemToCart(cartItems, item));
  const removeItem = (id: number) => setCartItems(removeItemFromCart(cartItems, id));
  const toggleHidden = () => setHidden(!hidden);
  const clearItemFromCart = (id: number) => setCartItems(filterItemFromCart(cartItems, id));

  useEffect(() => {
    setCartItemsCount(getCartItemsCount(cartItems));
    setTotal(getTotal(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        hidden,
        toggleHidden,
        cartItems,
        addItem,
        removeItem,
        cartItemsCount,
        clearItemFromCart,
        total
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
