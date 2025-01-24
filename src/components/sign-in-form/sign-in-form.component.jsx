import { useState } from "react";
import PropTypes from "prop-types";

import { signInUserWithEmailAndPassword, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";

import { ButtonsContainer, SignIncontainer } from "./sign-in-form.styles";

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signInWithGoogle = async () => {
    try {
      await signInWithGooglePopup();
    } catch (error) {

      console.error(error);

    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await signInUserWithEmailAndPassword(email, password);
      console.log('User signed in:', user);

      setEmail('');
      setPassword('');

    } catch (error) {
      console.log(error.code)

      console.error('Error signing up', error);

    }
  };

  return (
    <SignIncontainer>
      <h2>Sign In</h2>
      <span>Already have an account? Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>


        <FormInput
          label="Email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <FormInput
          label="Password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />

        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType={BUTTON_TYPES_CLASSES.google} onClick={signInWithGoogle}>Google SignIn</Button>
        </ButtonsContainer>
      </form>
    </SignIncontainer>
  );
};
Button.propTypes = {
  buttonType: PropTypes.oneOf(['google', 'inverted', 'google-sign-in']),
};


export default SignInForm;
