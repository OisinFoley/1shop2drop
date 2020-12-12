import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../public/assets/crown.svg';
import { AppComponentState } from '../../types/app.types';
import './Header.styles.scss';

interface Props extends AppComponentState {
  signOut: () => void;
}

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
        {currentUser ? (
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

export default Header;
