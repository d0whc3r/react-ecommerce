import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';
import { User } from '../../types';
import { auth } from '../../firebase/firebase.utils';

interface HeaderProps {
  currentUser: User | null;
}

const Header: React.FC<HeaderProps> = ({ currentUser }) => (
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
    </div>
  </div>
);

Header.propTypes = {
  currentUser: PropTypes.any
};

export default Header;
