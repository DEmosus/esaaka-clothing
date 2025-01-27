import styled from "styled-components";
import Button from "../button/button.component";

export const PaymentFormContainer = styled.div`
  height: 18rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  @media (max-width: 48rem) {
    height: auto;
    padding: 2.5rem;
  }
`;

export const FormContainer = styled.form`
  height: 6.2rem;
  min-width: 31rem;
  padding: 1.2rem;

  @media (max-width: 48rem) {
    min-width: 100%;
    height: auto;
  }
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 1.8rem;

  @media (max-width: 48rem) {
    margin-left: 0;
    margin-top: 1.2rem;
    width: 100%;
  }
`