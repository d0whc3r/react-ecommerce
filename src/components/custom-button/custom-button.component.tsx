import React from 'react';
import PropTypes from 'prop-types';

import { CustomButtonContainer } from './custom-button.styles';

interface CustomButtonProps {
  children: PropTypes.ReactNodeLike;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  isGoogleSignIn?: boolean;
  inverted?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, ...props }) => <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset', undefined]),
  onClick: PropTypes.func,
  isGoogleSignIn: PropTypes.bool,
  inverted: PropTypes.bool
};

export default CustomButton;
