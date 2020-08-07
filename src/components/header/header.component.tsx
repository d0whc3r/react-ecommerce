import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Logo from '../../assets/crown.svg';
import './header.styles.scss';
import { auth } from '../../utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CartIcon from '../cart-icon/cart-icon.comonent';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden, selectCartItems } from '../../redux/cart/cat.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { RootState } from '../../redux/root-reducer';

type HeaderProps = ReturnType<typeof mapStateToProps>;

const Header: React.FC<HeaderProps> = ({ currentUser, hidden }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <img src={Logo} className="logo" alt="Logo" />
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

interface MapStateToPropsSelector {
  currentUser: ReturnType<typeof selectCurrentUser>;
  hidden: ReturnType<typeof selectCartHidden>;
}

const mapStateToProps = createStructuredSelector<RootState, MapStateToPropsSelector>({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
