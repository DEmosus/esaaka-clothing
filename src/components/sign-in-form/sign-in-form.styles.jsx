import styled from "styled-components";

export const SignIncontainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 23.7rem;

  h2 {
    margin: 0.6rem 0;
  }

  @media (max-width: 48rem) {
    width: 100%;
    padding: 0 0.6rem;
  }
`;
export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 48rem) {
    flex-direction: column;
    align-items: center;
    button {
      width: 100%;
      margin-bottom: 0.6rem;
    }
  }
`;
