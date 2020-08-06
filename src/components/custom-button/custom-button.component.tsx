import React from 'react';
import PropTypes from 'prop-types';

import './custom-button.styles.scss';
import { cls } from '../../utils';

interface CustomButtonProps {
  children: PropTypes.ReactNodeLike;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  isGoogleSignIn?: boolean;
  inverted?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, isGoogleSignIn, inverted = false, ...buttonProps }) => (
  <button className={cls({ 'custom-button': true, 'google-sign-in': isGoogleSignIn, inverted: inverted })} {...buttonProps}>
    {children}
  </button>
);

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset', undefined]),
  onClick: PropTypes.func,
  isGoogleSignIn: PropTypes.bool,
  inverted: PropTypes.bool
};

export default CustomButton;
