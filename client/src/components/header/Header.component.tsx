import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from '../../../public/assets/crown.svg';
import { AuthenticatedUser } from '../../types/app.types';
import { isValidCurrentUser } from '../../util/helpers';
import './Header.styles.scss';
import CartIcon from '../cart-icon/CartIcon.component';
import CartDropdown from '../cart-dropdown/CartDropdown.component';

interface StateProps {
  currentUser: AuthenticatedUser;
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
        {isValidCurrentUser(currentUser) ? (
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

const mapStateToProps = ({
  user: { currentUser },
  cart: { hidden },
}): StateProps => ({
  currentUser,
  hidden,
});

export default connect<StateProps, DispatchProps>(mapStateToProps)(Header);
