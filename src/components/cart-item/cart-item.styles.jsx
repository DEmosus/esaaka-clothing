import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 5rem;
  margin-bottom: 0.9rem;

  img {
    width: 30%;
  }

  @media (max-width: 48rem) {
    flex-direction: row;
    height: auto;
    margin-bottom: 0.6rem;
  }

  img {
    width: 30%;
    height: auto;
  }
`;

export const ItemDetailsContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0.6rem 1,2rem;

  @media (max-width: 48rem) {
    width: 70%;
    padding: 0.6rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`;

export const NameContainer = styled.span`
  font-size: 0.9rem;
  margin-left: 1px;

  @media (max-width: 48rem) {
    font-size: 0.8rem;
  }
`;

export const PriceContainer = styled.span`
 font-size: 1rem;

  @media (max-width: 48rem) {
    font-size: 0.8rem;
  }
`;