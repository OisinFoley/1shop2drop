import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Homepage from './pages/home/Home.component';
import ShopPage from './pages/shop/Shop.component';
import Header from './components/header/Header.component';
import AuthenticatePage from './pages/authenticate/Authenticate.component';
import { AuthenticatedUser } from './types/app.types';
import './App.scss';
import {
  EMPTY_CURRENT_USER_STATE,
  JWT_TOKEN_IDENTIFIER,
} from './util/constants';
import { getUserFromToken } from './util/helpers';
import { setCurrentUser } from './redux/user/user.actions';
interface DispatchProps {
  setCurrentUser: (user: AuthenticatedUser) => void;
}

type Props = Readonly<DispatchProps>;

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
    setCurrentUser(EMPTY_CURRENT_USER_STATE);
  };

  render() {
    return (
      <div>
        <Header signOut={this.handleSignOut} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/authenticate" component={AuthenticatePage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = {
  setCurrentUser: (user: AuthenticatedUser) => setCurrentUser(user),
};

export default connect<{}, DispatchProps>(null, mapDispatchToProps)(App);
