import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

type CartIconProps = ReturnType<typeof mapDispatchToProps>;

const CartIcon: React.FC<CartIconProps> = ({ toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

CartIcon.propTypes = {
  toggleCartHidden: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    toggleCartHidden: () => dispatch(toggleCartHidden())
  };
}

export default connect(null, mapDispatchToProps)(CartIcon);
