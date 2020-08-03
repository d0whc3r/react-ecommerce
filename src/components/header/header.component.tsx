import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';
import { auth } from '../../firebase/firebase.utils';
import { LoggedUser } from '../../redux/user/user.types';
import { connect } from 'react-redux';
import { RootState } from '../../redux/root-reducer';

interface HeaderProps {
  currentUser: LoggedUser | null;
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

function mapStateToProps(state: RootState) {
  return {
    currentUser: state.user.currentUser
  };
}

export default connect(mapStateToProps)(Header);
