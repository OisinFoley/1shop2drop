import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/home/Home.component';
import ShopPage from './pages/shop/Shop.component';
import Header from './components/header/Header.component';
import AuthenticatePage from './pages/authenticate/Authenticate.component';
import {
  AppComponentState as State,
  AuthenticatedUser,
} from './types/app.types';
import './App.scss';
import {
  EMPTY_CURRENT_USER_STATE,
  JWT_TOKEN_IDENTIFIER,
} from './util/constants';
import { getUserFromToken } from './util/helpers';

class App extends Component<{}, State> {
  private currentUser: AuthenticatedUser;
  constructor(props) {
    super(props);
    const user: AuthenticatedUser | null = getUserFromToken();
    this.state = {
      currentUser: user || EMPTY_CURRENT_USER_STATE,
    };
  }

  private handleSignOut = (): void => {
    localStorage.removeItem(JWT_TOKEN_IDENTIFIER);
    this.setState({
      currentUser: EMPTY_CURRENT_USER_STATE,
    });
  };

  render() {
    return (
      <div>
        <Header
          currentUser={this.state.currentUser}
          signOut={this.handleSignOut}
        />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/authenticate" component={AuthenticatePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
