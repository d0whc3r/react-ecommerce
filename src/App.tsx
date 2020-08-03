import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.scss';
import HomePage from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { LoggedUser } from './redux/user/user.types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setCurrentUser } from './redux/user/user.actions';
import { RootState } from './redux/root-reducer';

type AppProps = ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps>;

class App extends React.Component<AppProps> {
  unsubscribeFromAuth = () => {};

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        userRef?.onSnapshot((snapShot) => {
          const data = snapShot.data()!;
          const currentUser: LoggedUser = {
            id: snapShot.id,
            displayName: data.displayName,
            email: data.email,
            createdAt: data.createdAt.toDate()
          };
          setCurrentUser(currentUser);
        });
      }
      setCurrentUser(null);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signIn" render={() => (this.props.currentUser ? <Redirect to="/" /> : <SignInPage />)} />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps({ user }: RootState) {
  return {
    currentUser: user.currentUser
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    setCurrentUser: (user: LoggedUser | null) => dispatch(setCurrentUser(user))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
