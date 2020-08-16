import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

interface WithSpinnerProps {
  isLoading?: boolean;
}

const WithSpinner = <P extends object>(WrappedComponent: React.ComponentType<P>): React.FC<P & WithSpinnerProps> => ({
  isLoading,
  ...otherProps
}) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...(otherProps as P)} />
  );
};

export default WithSpinner;
