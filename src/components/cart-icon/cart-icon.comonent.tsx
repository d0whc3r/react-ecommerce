import React, { useContext } from 'react';

import ShoppingIcon from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';
import { CartContext } from '../../provider/cart.provider';

const CartIcon: React.FC = () => {
  const { toggleHidden, cartItemsCount } = useContext(CartContext);
  return (
    <div className="cart-icon" onClick={() => toggleHidden()}>
      <img src={ShoppingIcon} className="shopping-icon" alt="Shopping icon" />
      <span className="item-count">{cartItemsCount}</span>
    </div>
  );
};

export default CartIcon;
