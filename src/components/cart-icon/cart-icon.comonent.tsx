import React from 'react';
import PropTypes from 'prop-types';

import ShoppingIcon from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { RootState } from '../../redux/root-reducer';
import { selectCartItemsCount } from '../../redux/cart/cat.selectors';

type CartIconProps = ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps>;

const CartIcon: React.FC<CartIconProps> = ({ itemCount, toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <img src={ShoppingIcon} className="shopping-icon" alt="Shopping icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

CartIcon.propTypes = {
  itemCount: PropTypes.number.isRequired,
  toggleCartHidden: PropTypes.func.isRequired
};

function mapStateToProps(state: RootState) {
  return {
    itemCount: selectCartItemsCount(state)
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    toggleCartHidden: () => dispatch(toggleCartHidden())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
