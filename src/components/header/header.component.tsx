import React, { useContext } from 'react';

import Logo from '../../assets/crown.svg';
import { auth } from '../../utils';
import CartIcon from '../cart-icon/cart-icon.comonent';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from './header.styles';
import CurrentUserContext from '../../contexts/current-user/current-user.context';
import { CartContext } from '../../provider/cart.provider';

const Header: React.FC = () => {
  const currentUser = useContext(CurrentUserContext);
  const { hidden } = useContext(CartContext);

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <img src={Logo} className="logo" alt="Logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/shop">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signIn">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

export default Header;
