import styled from "styled-components";

export const SignIncontainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  h2 {
    margin: 10px 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 10px;
  }
`;
export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    button {
      width: 100%;
      margin-bottom: 10px;
    }
  }
`;
