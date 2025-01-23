import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    min-height: auto;
    padding: 10px 0;
  }
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    width: 30%;
    padding-right: 10px;

    img {
      width: 100%;
      height: auto;
    }
  }
`;

export const NameOfItem = styled.span`
  width: 23%;

  @media (max-width: 768px) {
    width: 70%;
    font-size: 18px;
  }
`;
export const QuantityOfItem = styled.span`
  width: 23%;
  display: flex;
  /* margin-left: 55px; */
  justify-content: center;

  @media (max-width: 768px) {
    /* width: 70%;
    font-size: 18px; */
    justify-content: center;
    width: auto;
  }

`;
export const PriceOfItem = styled.span`
  width: 23%;
  margin-right: 10px;

  @media (max-width: 768px) {
    width: 70%;
    font-size: 18px;
  }
`;
export const Arrow = styled.div`
  cursor: pointer;
`;
export const Value = styled.span`
  margin: 0 10px;
  @media (max-width: 768px) {
    margin: 0 5px;
  }
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;

  @media (max-width: 768px) {
    padding-left: 0;
    margin-top: 0;
  }
`;