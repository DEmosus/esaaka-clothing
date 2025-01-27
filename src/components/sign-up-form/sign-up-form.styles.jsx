import styled from "styled-components";

export const SignUpContainer = styled.div`
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
  h2 {
    font-size: 1.1rem;
  }
`;