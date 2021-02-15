import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import Logo from '../../public/assets/crown.svg';
import { AppState, Helpers, Types } from '../shared';
import { selectCurrentUser } from '../user';
import { CartIcon, selectCartHidden, CartDropdown } from '../cart';
import './Header.styles.scss';

interface StateProps {
  currentUser: Types.AuthenticatedUser;
  hidden: boolean;
}

interface DispatchProps {
  signOut: () => void;
}

type Props = Readonly<StateProps & DispatchProps>;

const Header: FC<Props> = ({ currentUser, hidden, signOut }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {Helpers.isValidCurrentUser(currentUser) ? (
          <div className="option" onClick={signOut}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/authenticate">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector<AppState, StateProps>({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect<StateProps, DispatchProps>(mapStateToProps)(Header);
