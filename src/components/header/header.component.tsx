import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';
import { auth } from '../../utils/firebase.utils';
import { connect } from 'react-redux';
import { RootState } from '../../redux/root-reducer';
import CartIcon from '../cart-icon/cart-icon.comonent';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

type HeaderProps = ReturnType<typeof mapStateToProps>;

const Header: React.FC<HeaderProps> = ({ currentUser, hidden }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link to="/shop" className="option">
        SHOP
      </Link>
      <Link to="/shop" className="option">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signIn">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

Header.propTypes = {
  currentUser: PropTypes.any,
  hidden: PropTypes.bool.isRequired
};

function mapStateToProps({ user: { currentUser }, cart: { hidden } }: RootState) {
  return {
    currentUser,
    hidden
  };
}

export default connect(mapStateToProps)(Header);
