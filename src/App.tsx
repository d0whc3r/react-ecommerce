import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';
import HomePage from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import { auth } from './firebase/firebase.utils';
import { User } from 'types';

interface AppState {
  currentUser: null | User;
}

class App extends React.Component<any, AppState> {
  constructor(props: any) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, email, photoURL } = user;
        this.setState({ currentUser: { name: displayName, email, photoURL } });
      } else {
        this.setState({ currentUser: null });
      }
    });
  }

  unsubscribeFromAuth() {
    this.setState({ currentUser: null });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signIn" component={SignInPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
