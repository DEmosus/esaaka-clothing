import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;

  img {
    width: 30%;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    height: auto;
    margin-bottom: 10px;
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
  padding: 10px 20px;

  @media (max-width: 768px) {
    width: 70%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`;

export const NameContainer = styled.span`
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const PriceContainer = styled.span`
 font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;