import React from 'react';
import PropTypes from 'prop-types';

import './checkout-item.styles.scss';
import { CartItem } from '../../redux/cart/cart.types';

interface CheckoutItemProps {
  cartItem: CartItem;
}

const CheckoutItem: React.FC<CheckoutItemProps> = ({ cartItem }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={cartItem.imageUrl} alt={cartItem.name} />
    </div>
    <span className="name">{cartItem.name}</span>
    <span className="quantity">{cartItem.quantity}</span>
    <span className="price">{cartItem.price}</span>
    <div className="remove-button">&#10005;</div>
  </div>
);

CheckoutItem.propTypes = {
  cartItem: PropTypes.any.isRequired
};

export default CheckoutItem;
