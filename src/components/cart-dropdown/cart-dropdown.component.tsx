import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import './cart-dropdown.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItemComponent from '../cart-item/cart-item.component';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { CartContext } from '../../provider/cart.provider';

const CartDropdown: React.FC<RouteComponentProps> = ({ history }) => {
  const { cartItems } = useContext(CartContext);
  return (
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
};

CartDropdown.propTypes = {
  history: PropTypes.any
};

export default withRouter(CartDropdown);
