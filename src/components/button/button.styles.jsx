import styled from "styled-components";

export const BaseButton = styled.button`
  min-width: 10.3rem;
  width: auto;
  height: 3.1rem;
  letter-spacing: 0.5px;
  line-height: 3.1rem;
  // padding: 0 35px 0 35px;
  font-size: 0.9rem;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }

  @media (max-width: 48rem) {
  .button-container {
    min-width: 7.5rem;
    font-size: 0.8rem;
    height: 2.8rem;
    line-height: 2.8rem;
  }
}
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  } 
`;

export const ButtonSpinner = styled.div`
  display: inline-block;
  width: 1.8rem;
  height: 1.8rem;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #636767;
  animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`

