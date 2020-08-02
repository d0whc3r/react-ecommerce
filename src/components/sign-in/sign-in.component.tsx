import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

interface SignInState {
  email: string;
  password: string;
}

class SignIn extends React.Component<any, SignInState> {
  constructor(props: any) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    this.setState({ email: '', password: '' });
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    switch (name) {
      case 'password':
        this.setState({ [name]: value });
        break;
      case 'email':
        this.setState({ [name]: value });
        break;
    }
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span className="subtitle">Sign in with your email and password</span>

        <form onSubmit={(e) => this.handleSubmit(e)}>
          <FormInput label="Email" type="email" name="email" value={email} required handleChange={(e) => this.handleChange(e)} />
          <FormInput label="Password" type="password" name="password" value={password} required handleChange={(e) => this.handleChange(e)} />

          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton type="button" isGoogleSignIn onClick={signInWithGoogle}>
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
