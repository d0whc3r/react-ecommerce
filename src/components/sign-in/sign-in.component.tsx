import React, { useState } from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../utils';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface SignInState {
  email?: string;
  password?: string;
}

const SignIn: React.FC<RouteComponentProps> = () => {
  const [userCredentials, setCredentials] = useState<SignInState>({ email: '', password: '' });

  const { email, password } = userCredentials;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email!, password!);
      setCredentials({ email: '', password: '' });
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case 'password':
      case 'email':
        setCredentials({ [name]: value });
        break;
    }
  };

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span className="subtitle">Sign in with your email and password</span>

      <form onSubmit={(e) => handleSubmit(e)}>
        <FormInput label="Email" type="email" name="email" value={email} required handleChange={(e) => handleChange(e)} />
        <FormInput label="Password" type="password" name="password" value={password} required handleChange={(e) => handleChange(e)} />

        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton type="button" isGoogleSignIn onClick={() => signInWithGoogle()}>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default withRouter(SignIn);
