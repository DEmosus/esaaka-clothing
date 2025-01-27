import styled from "styled-components";

export const CategoriesContainer = styled.div`
  width: 90vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  img {
    width: 100%;
    height: 15rem;//new 100%
    object-fit: cover;
    aspect-ratio: 16/9;
  }

  @media (max-width: 48rem) {
    flex-direction: column;
    align-items: center;

    img {
      width: 90vw;
      height: auto;
      max-width: 32rem;
      object-fit: cover;
    }
  }
`;