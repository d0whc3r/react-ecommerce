import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { RootState } from '../../redux/root-reducer';

type CartIconProps = ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps>;

const CartIcon: React.FC<CartIconProps> = ({ itemCount, toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

CartIcon.propTypes = {
  itemCount: PropTypes.number.isRequired,
  toggleCartHidden: PropTypes.func.isRequired
};

function mapStateToProps({ cart: { cartItems } }: RootState) {
  return {
    itemCount: cartItems.reduce((a, item) => a + item.quantity, 0)
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    toggleCartHidden: () => dispatch(toggleCartHidden())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
