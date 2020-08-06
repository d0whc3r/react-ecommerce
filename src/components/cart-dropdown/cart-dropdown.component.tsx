import React from 'react';
import PropTypes from 'prop-types';

import './cart-dropdown.scss';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { RootState } from '../../redux/root-reducer';
import CartItemComponent from '../cart-item/cart-item.component';

type CartDropdownProps = ReturnType<typeof mapStateToProps>;

const CartDropdown: React.FC<CartDropdownProps> = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((item) => (
        <CartItemComponent key={item.id} item={item} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

CartDropdown.propTypes = {
  cartItems: PropTypes.array.isRequired
};

function mapStateToProps({ cart: { cartItems } }: RootState) {
  return {
    cartItems
  };
}

export default connect(mapStateToProps)(CartDropdown);
