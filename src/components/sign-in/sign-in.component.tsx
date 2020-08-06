import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../utils/firebase.utils';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface SignInState {
  email: string;
  password: string;
}

class SignIn extends React.Component<RouteComponentProps, SignInState> {
  constructor(props: RouteComponentProps) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  async handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.error(error.message);
    }
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

  signInWithGoogle() {
    signInWithGoogle();
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
            <CustomButton type="button" isGoogleSignIn onClick={() => this.signInWithGoogle()}>
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignIn);
