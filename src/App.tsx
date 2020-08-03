import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';
import HomePage from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { LoggedUser } from './types';

interface AppState {
  currentUser: LoggedUser | null;
}

class App extends React.Component<any, AppState> {
  constructor(props: any) {
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
