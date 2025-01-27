import styled from "styled-components";
import { BaseButton, GoogleSignInButton, InvertedButton } from "../button/button.styles";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 15rem;
  height: 21rem;
  display: flex;
  flex-direction: column;
  padding: 1.2rem;
  border: 1px solid black;
  background-color: white;
  top: 5.6rem;
  right: 2.5rem;
  z-index: 5;

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
  }

  @media (max-width: 48rem) {
    /* width: 100%; */
    right: 1.2rem;
    margin-top: 9.3rem;
    top: 4.3rem;
    padding: 0.6rem;

    button {
      width: 100%;
      padding: 2px;
    }
  }
`;

export const EmptyMessage = styled.span` 
  font-size: 1.1rem;
  margin: 3.1rem auto;

  @media (max-width: 48rem) {
    font-size: 1rem;
    margin: 1.8rem auto;
  }
`;

export const CartItemContainer = styled.div`
  height: 15rem;
  display: flex;
  flex-direction: column;
  overflow: scroll;

  @media (max-width: 48rem) {
    height: 15.6rem;
  }
`;

