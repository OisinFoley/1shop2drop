import React, { Component } from 'react';
import { Config, Constants, CustomButton, FormInput } from '../../shared';
import { FetchApi } from '../../api';
import '../styles/SignUp.styles.scss';

interface State {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface Props {}

class SignUp extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = Constants.EMPTY_SIGNUP_STATE;
  }

  private handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      return alert("password don't match");
    }

    const registerData = {
      email,
      displayName,
      password,
      confirmPassword,
    };

    const registerResult = FetchApi.post(Config.registerEndpoint, registerData);
    this.setState(Constants.EMPTY_SIGNUP_STATE);
  };

  private handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = e.target;
    this.setState({ ...this.state, [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            id="display-name-input"
            value={displayName}
            handleChange={this.handleChange}
            label="Display Name"
            required
          />

          <FormInput
            type="email"
            name="email"
            id="email-input"
            value={email}
            handleChange={this.handleChange}
            label="Email"
            required
          />

          <FormInput
            type="password"
            name="password"
            id="password-input"
            value={password}
            handleChange={this.handleChange}
            label="Password"
            required
          />

          <FormInput
            type="password"
            name="confirmPassword"
            id="confirm-password-input"
            value={confirmPassword}
            handleChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
