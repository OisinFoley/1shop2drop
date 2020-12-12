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

class App extends Component<{}, State> {
  private currentUser: AuthenticatedUser;
  constructor(props) {
    super(props);

    this.state = {
      currentUser: {
        displayName: 'Oisin Foley',
        email: 'oisinfoley@yahoo.co.uk',
      },
    };
  }

  private handleSignOut = (): void => {
    this.setState({
      currentUser: null,
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
