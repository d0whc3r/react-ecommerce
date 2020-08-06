import React from 'react';
import PropTypes from 'prop-types';

import './cart-item.styles.scss';
import { CartItem } from '../../redux/cart/cart.types';

interface CartItemProps {
  item: CartItem;
}

const CartItemComponent: React.FC<CartItemProps> = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <div className="name">{name}</div>
      <div className="price">
        {quantity} x ${price}
      </div>
    </div>
  </div>
);

CartItemComponent.propTypes = {
  item: PropTypes.any.isRequired
};

export default CartItemComponent;
