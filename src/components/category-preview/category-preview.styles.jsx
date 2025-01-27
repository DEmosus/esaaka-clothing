import { Link } from "react-router-dom";
import styled from "styled-components";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.8rem;

  @media (max-width: 48rem) {
    margin-bottom: 2.5rem;
  }
`;
export const TitleContainer = styled(Link)`
  font-size: 1.7rem;
  margin-bottom: 1.5rem;
  cursor: pointer;
  text-decoration: none;
  color: inherit;

  @media (max-width: 48rem) {
    font-size: 1.5rem;
    margin-bottom: 1.2rem;
  }
`;

export const PreviewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1.2rem;

  @media (max-width: 48rem) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 0.6rem;
    row-gap: 1.2rem;
    justify-items: center; 
  }
`;
