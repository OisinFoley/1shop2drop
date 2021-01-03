import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from '../../../public/assets/crown.svg';
import { AuthenticatedUser } from '../../types/app.types';
import { isValidCurrentUser } from '../../util/helpers';
import { AppState } from '../../redux/root-reducer';
import './Header.styles.scss';

interface StateProps {
  currentUser: AuthenticatedUser;
}

interface DispatchProps {
  signOut: () => void;
}

type Props = Readonly<StateProps & DispatchProps>;

const Header: FC<Props> = ({ currentUser, signOut }) => {
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
        {isValidCurrentUser(currentUser) ? (
          <div className="option" onClick={signOut}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/authenticate">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state: AppState): StateProps => ({
  currentUser: state.user.currentUser,
});

export default connect<StateProps, DispatchProps>(mapStateToProps)(Header);
