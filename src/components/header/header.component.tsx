import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../../assets/crown.svg';
import { auth } from '../../utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CartIcon from '../cart-icon/cart-icon.comonent';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cat.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { RootState } from '../../redux/root-reducer';
import { HeaderContainer, LogoContainer, OptionDiv, OptionLink, OptionsContainer } from './header.styles';

type HeaderProps = ReturnType<typeof mapStateToProps>;

const Header: React.FC<HeaderProps> = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <img src={Logo} className="logo" alt="Logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/shop">CONTACT</OptionLink>
      {currentUser ? <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv> : <OptionLink to="/signIn">SIGN IN</OptionLink>}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

Header.propTypes = {
  currentUser: PropTypes.any,
  hidden: PropTypes.bool.isRequired
};

interface MapStateToPropsSelector {
  currentUser: ReturnType<typeof selectCurrentUser>;
  hidden: ReturnType<typeof selectCartHidden>;
}

const mapStateToProps = createStructuredSelector<RootState, MapStateToPropsSelector>({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
