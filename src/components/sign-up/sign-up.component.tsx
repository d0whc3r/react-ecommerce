import React, { useState } from 'react';

import './sign-up.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../utils';

interface SignUpState {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUp: React.FC = () => {
  const [userCredentials, setUserCredentials] = useState<SignUpState>({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName });
      setUserCredentials({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // @ts-ignore
    setUserCredentials({ [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title"> I do not have an account </h2>
      <span>Sign up with your email and password</span>

      <form className="sign-up-form" onSubmit={(e) => handleSubmit(e)}>
        <FormInput label="Display Name" name="displayName" type="text" value={displayName} required handleChange={(e) => handleChange(e)} />
        <FormInput label="Email" name="email" type="email" value={email} required handleChange={(e) => handleChange(e)} />
        <FormInput label="Password" name="password" type="password" value={password} required handleChange={(e) => handleChange(e)} />
        <FormInput
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          required
          handleChange={(e) => handleChange(e)}
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
