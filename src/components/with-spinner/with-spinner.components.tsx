import React from 'react';
import PropTypes from 'prop-types';
import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

interface WithSpinnerProps {
  isLoading?: boolean;
}

const WithSpinner = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  const WrapperWithSpinner: React.FC<P & WithSpinnerProps> = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...(otherProps as P)} />
    );
  };

  // @ts-ignore
  WrapperWithSpinner.propTypes = {
    isLoading: PropTypes.bool
  };

  return WrapperWithSpinner;
};

export default WithSpinner;
