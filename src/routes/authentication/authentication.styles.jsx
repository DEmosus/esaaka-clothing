import styled from "styled-components";

export const AuthenticationContainer = styled.div`
  display: flex;
  width: 900px;
  justify-content: space-between;
  margin: 1.8rem auto;

  @media (max-width: 48rem) {
    flex-direction: column;
    width: 100%;
    padding: 0 0.6rem;
}
`;
