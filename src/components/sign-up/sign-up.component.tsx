import React from 'react';

import './sign-up.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

interface SignUpState {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

class SignUp extends React.Component<any, SignUpState> {
  constructor(props: any) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  async handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.error(error.message);
    }
  }

  private handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    // @ts-ignore
    this.setState({ [name]: value });
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title"> I do not have an account </h2>
        <span>Sign up with your email and password</span>

        <form className="sign-up-form" onSubmit={(e) => this.handleSubmit(e)}>
          <FormInput label="Display Name" name="displayName" type="text" value={displayName} required handleChange={(e) => this.handleChange(e)} />
          <FormInput label="Email" name="email" type="email" value={email} required handleChange={(e) => this.handleChange(e)} />
          <FormInput label="Password" name="password" type="password" value={password} required handleChange={(e) => this.handleChange(e)} />
          <FormInput
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            required
            handleChange={(e) => this.handleChange(e)}
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
