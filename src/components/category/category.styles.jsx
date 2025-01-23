import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 5px;
    row-gap: 30px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    column-gap: 5px;
    row-gap: 20px;
  }
`;

export const CategoryTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 25px;
`;
