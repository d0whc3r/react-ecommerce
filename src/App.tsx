import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import './App.scss';
import HomePage from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import { auth, createUserProfileDocument } from './utils';
import CheckoutPage from './pages/checkout/checkout.component';
import CurrentUserContext from './contexts/current-user/current-user.context';
import { LoggedUser } from './redux/user/user.types';

interface AppState {
  currentUser: LoggedUser | null;
}

class App extends React.Component<any, AppState> {
  constructor(props: never) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = () => {};

  componentDidMount() {
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
          this.setState({ currentUser });
        });
      }
      this.setState({ currentUser: null });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <CurrentUserContext.Provider value={this.state.currentUser}>
          <Header />
        </CurrentUserContext.Provider>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/signIn" render={() => (this.state.currentUser ? <Redirect to="/" /> : <SignInPage />)} />
        </Switch>
      </div>
    );
  }
}

export default App;
