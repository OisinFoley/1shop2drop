import React from 'react';
import { SignIn, SignUp } from './';
import '../styles/AuthenticatePage.styles.scss';

const AuthenticatePage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default AuthenticatePage;
