import React from 'react';
import { Token } from './react-strip-checkout.types';
import ReactStripeCheckout from './react-strip-checkout.component';

interface StripeCheckoutButtonProps {
  price: number;
}

const StripeCheckoutButton: React.FC<StripeCheckoutButtonProps> = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HDp3WBU3CiOklVzLKN7NNYUtirs6Lq3jkrLwFBeeIh8TkMkjyqLMDZyNmBNZfHvQNHtrs6dBmVUmkcW5exmmS6t00ibzRgVyy';
  const onToken = (token: Token) => {
    console.log('TOKEN', token);
    alert('Payment Successful');
  };

  return (
    <ReactStripeCheckout
      bitcoin
      alipay
      label="Pay Now"
      name="ECommerce React"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
