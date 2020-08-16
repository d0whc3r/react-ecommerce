import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import './App.scss';
import HomePage from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import { auth, createUserProfileDocument } from './utils';
import { LoggedUser, SetCurrentUserAction } from './redux/user/user.types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setCurrentUser } from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import { RootState } from './redux/root-reducer';
import { selectCollectionsForPreview } from './redux/shop/shop.selectors';
import CheckoutPage from './pages/checkout/checkout.component';

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

      // addCollectionAndDocuments(
      //   'collections',
      //   collectionsArray.map(({ title, items }) => ({ title, items }))
      // );
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
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/signIn" render={() => (this.props.currentUser ? <Redirect to="/" /> : <SignInPage />)} />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

interface MapStateToPropsSelector {
  currentUser: ReturnType<typeof selectCurrentUser>;
  collectionsArray: ReturnType<typeof selectCollectionsForPreview>;
}

const mapStateToProps = createStructuredSelector<RootState, MapStateToPropsSelector>({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview
});

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    setCurrentUser: (user: SetCurrentUserAction['payload']) => dispatch(setCurrentUser(user))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
