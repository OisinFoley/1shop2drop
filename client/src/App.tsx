import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Homepage from './pages/home/Home.component';
import ShopPage from './pages/shop/Shop.component';
import CheckoutPage from './pages/checkout/Checkout.component';

import Header from './components/header/Header.component';
import AuthenticatePage from './pages/authenticate/Authenticate.component';
import { AuthenticatedUser } from './types/app.types';
import { getUserFromToken, isValidCurrentUser } from './util/helpers';
import { selectCurrentUser, setCurrentUser } from './redux/user';
import { AppState } from './redux';
import './App.scss';
import {
  EMPTY_CURRENT_USER_STATE,
  JWT_TOKEN_IDENTIFIER,
} from './util/constants';

interface StateProps {
  currentUser: AuthenticatedUser;
}
interface DispatchProps {
  setCurrentUser: (user: AuthenticatedUser) => void;
}

type Props = Readonly<StateProps & DispatchProps>;

class App extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    const { setCurrentUser } = this.props;
    const user: AuthenticatedUser = getUserFromToken();
    if (user) {
      setCurrentUser(user);
    }
  }

  // TODO: handle me as a redux action
  private handleSignOut = (): void => {
    localStorage.removeItem(JWT_TOKEN_IDENTIFIER);
    this.props.setCurrentUser(EMPTY_CURRENT_USER_STATE);
  };

  render() {
    return (
      <div>
        <Header signOut={this.handleSignOut} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/authenticate"
            render={() =>
              isValidCurrentUser(this.props.currentUser) ? (
                <Redirect to="/" />
              ) : (
                <AuthenticatePage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector<AppState, StateProps>({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = {
  setCurrentUser,
};

export default connect<StateProps, DispatchProps, {}, AppState>(
  mapStateToProps,
  mapDispatchToProps
)(App);
