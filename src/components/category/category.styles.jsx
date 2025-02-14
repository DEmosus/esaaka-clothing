import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1.2rem;
  row-gap: 3.1rem;

  @media (max-width: 48rem) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 0.3rem;
    row-gap: 1.8rem;
  }

  @media (max-width: 30rem) {
    grid-template-columns: 1fr;
    column-gap: 0.3rem;
    row-gap: 1.2rem;
  }
`;

export const CategoryTitle = styled.h2`
  font-size: 1.7rem;
  margin-bottom: 1.5rem;
`;
