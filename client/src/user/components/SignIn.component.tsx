import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Constants, Types, CustomButton, FormInput } from '../../shared';
import { loginUser } from '../';
import '../styles/SignIn.styles.scss';

interface State {
  email: string;
  password: string;
}

interface DispatchProps {
  loginUser: (loginData: Types.LoginInput) => void;
}

type Props = Readonly<DispatchProps>;

class SignIn extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = Constants.EMPTY_SIGNIN_STATE;
  }

  private handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const loginData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(loginData);
    this.setState(Constants.EMPTY_SIGNIN_STATE);
  };

  private handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    this.setState({ ...this.state, [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            id="email-input"
            label="Email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            required
          />

          <FormInput
            name="password"
            id="password-input"
            label="Password"
            type="password"
            handleChange={this.handleChange}
            value={this.state.password}
            required
          />
          <CustomButton type="submit">Sign in</CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  loginUser,
};

export default connect<null, DispatchProps>(null, mapDispatchToProps)(SignIn);
