import React from 'react';
import PropTypes from 'prop-types';

import './checkout-item.styles.scss';
import { CartClearItemAction, CartDecreaseItemAction, CartIncreaseItemAction, CartItem } from '../../redux/cart/cart.types';
import { Dispatch } from 'redux';
import { clearItem, decreaseItem, increaseItem } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';
import { cls } from '../../utils';

interface CheckoutItemProps extends ReturnType<typeof mapDispatchToProps> {
  cartItem: CartItem;
}

const CheckoutItem: React.FC<CheckoutItemProps> = ({ cartItem: { id, imageUrl, name, quantity, price }, clearItem, decreaseItem, increaseItem }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt={name} />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">
      <div className={cls({ arrow: true, disabled: quantity === 1 })} onClick={() => quantity > 1 && decreaseItem(id)}>
        &#10094;
      </div>
      <span className="value">{quantity}</span>
      <div className="arrow" onClick={() => increaseItem(id)}>
        &#10095;
      </div>
    </span>
    <span className="price">{price}</span>
    <div className="remove-button" onClick={() => clearItem(id)}>
      &#10005;
    </div>
  </div>
);

CheckoutItem.propTypes = {
  cartItem: PropTypes.any.isRequired,
  clearItem: PropTypes.func.isRequired,
  decreaseItem: PropTypes.func.isRequired,
  increaseItem: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    clearItem: (id: CartClearItemAction['payload']) => dispatch(clearItem(id)),
    decreaseItem: (id: CartDecreaseItemAction['payload']) => dispatch(decreaseItem(id)),
    increaseItem: (id: CartIncreaseItemAction['payload']) => dispatch(increaseItem(id))
  };
}

export default connect(null, mapDispatchToProps)(CheckoutItem);
