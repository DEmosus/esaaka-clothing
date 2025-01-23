import { Link } from "react-router-dom";
import styled from "styled-components";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;
export const TitleContainer = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
  text-decoration: none;
  color: inherit;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

export const PreviewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10px;
    row-gap: 20px;
    justify-items: center; 
  }
`;
