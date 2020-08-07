import React from 'react';
import PropTypes from 'prop-types';

import './cart-dropdown.scss';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import CartItemComponent from '../cart-item/cart-item.component';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cat.selectors';
import { RootState } from '../../redux/root-reducer';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Dispatch } from 'redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

type CartDropdownProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps> & RouteComponentProps;

const CartDropdown: React.FC<CartDropdownProps> = ({ cartItems, history, toggleCartHidden }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((item) => <CartItemComponent key={item.id} item={item} />)
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push('/checkout');
        toggleCartHidden();
      }}>
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

CartDropdown.propTypes = {
  cartItems: PropTypes.array.isRequired,
  history: PropTypes.any,
  toggleCartHidden: PropTypes.func.isRequired
};

interface MapStateToPropsSelector {
  cartItems: ReturnType<typeof selectCartItems>;
}

const mapStateToProps = createStructuredSelector<RootState, MapStateToPropsSelector>({
  cartItems: selectCartItems
});

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    toggleCartHidden: () => dispatch(toggleCartHidden())
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));
