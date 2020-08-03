import React from 'react';
import PropTypes from 'prop-types';

import './custom-button.styles.scss';

interface CustomButtonProps {
  children: PropTypes.ReactNodeLike;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  isGoogleSignIn?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, isGoogleSignIn, ...buttonProps }) => (
  <button className={['custom-button', isGoogleSignIn ? 'google-sign-in' : false].filter(Boolean).join(' ')} {...buttonProps}>
    {children}
  </button>
);

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset', undefined]),
  onClick: PropTypes.func,
  isGoogleSignIn: PropTypes.bool
};

export default CustomButton;
