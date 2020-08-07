import React from 'react';
import PropTypes from 'prop-types';

import './checkout-item.styles.scss';
import { CartItem } from '../../redux/cart/cart.types';
import { Dispatch } from 'redux';
import { removeItem } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';

interface CheckoutItemProps extends ReturnType<typeof mapDispatchToProps> {
  cartItem: CartItem;
}

const CheckoutItem: React.FC<CheckoutItemProps> = ({ cartItem: { id, imageUrl, name, quantity, price }, removeItem }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt={name} />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">{price}</span>
    <div className="remove-button" onClick={() => removeItem(id)}>
      &#10005;
    </div>
  </div>
);

CheckoutItem.propTypes = {
  cartItem: PropTypes.any.isRequired,
  removeItem: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    removeItem: (id: number) => dispatch(removeItem(id))
  };
}

export default connect(null, mapDispatchToProps)(CheckoutItem);
