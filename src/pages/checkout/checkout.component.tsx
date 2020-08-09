import React from 'react';
import PropTypes from 'prop-types';

import './checkout.styles.scss';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cat.selectors';
import { RootState } from '../../redux/root-reducer';
import { connect } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

type CheckoutPageProps = ReturnType<typeof mapStateToProps>;

const date = new Date(new Date().setMonth(new Date().getMonth() + 5));

const CheckoutPage: React.FC<CheckoutPageProps> = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">
      <span>TOTAL: ${total}</span>
    </div>
    <div className="test-warning">
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: {('0' + (date.getMonth() + 1)).slice(-2)}/{date.getFullYear().toString().slice(-2)} - CVV: 123
    </div>
    <StripeCheckoutButton price={total} />
  </div>
);

CheckoutPage.propTypes = {
  cartItems: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired
};

interface MapStateToPropsSelector {
  cartItems: ReturnType<typeof selectCartItems>;
  total: ReturnType<typeof selectCartTotal>;
}

const mapStateToProps = createStructuredSelector<RootState, MapStateToPropsSelector>({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
