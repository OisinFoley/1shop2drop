import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { AuthenticatePage, selectCurrentUser, setCurrentUser } from './user';
import { AppState, Helpers, Constants, Types } from './shared';
import { DirectoryPage } from './directory';
import { ShopPage } from './shop';
import { CheckoutPage } from './cart';
import { Header } from './header';
import { UserJwtPayload } from '1shop2drop-types';
import './App.scss';

interface StateProps {
  currentUser: Types.AuthenticatedUser;
}
interface DispatchProps {
  setCurrentUser: (user: Types.AuthenticatedUser) => void;
}

type Props = Readonly<StateProps & DispatchProps>;

class App extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    const { setCurrentUser } = this.props;
    const user: UserJwtPayload = Helpers.getUserFromToken();
    if (user) {
      setCurrentUser(user);
    }
  }

  // TODO: handle me as a redux action
  private handleSignOut = (): void => {
    localStorage.removeItem(Constants.JWT_TOKEN_IDENTIFIER);
    this.props.setCurrentUser(Constants.EMPTY_CURRENT_USER_STATE);
  };

  render() {
    return (
      <div>
        <Header signOut={this.handleSignOut} />
        <Switch>
          <Route exact path="/" component={DirectoryPage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/authenticate"
            render={() =>
              Helpers.isValidCurrentUser(this.props.currentUser) ? (
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
