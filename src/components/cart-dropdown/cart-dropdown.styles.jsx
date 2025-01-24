import styled from "styled-components";
import { BaseButton, GoogleSignInButton, InvertedButton } from "../button/button.styles";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
  }

  @media (max-width: 768px) {
    /* width: 100%; */
    right: 20px;
    margin-top: 150px;
    top: 70px;
    padding: 10px;

    button {
      width: 100%;
      padding: 2px;
    }
  }
`;

export const EmptyMessage = styled.span` 
  font-size: 18px;
  margin: 50px auto;

  @media (max-width: 768px) {
    font-size: 16px;
    margin: 30px auto;
  }
`;

export const CartItemContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;

  @media (max-width: 768px) {
    height: 250px;
  }
`;

