import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 6.2rem;
  border-bottom: 1px solid darkgrey;
  padding: 0.9rem 0;
  font-size: 1.2rem;
  align-items: center;

  @media (max-width: 48rem) {
    flex-direction: row;
    align-items: center;
    min-height: auto;
    padding: 0.6rem 0;
  }
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 0.9rem;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 48rem) {
    width: 30%;
    padding-right: 0.6rem;

    img {
      width: 100%;
      height: auto;
    }
  }
`;

export const NameOfItem = styled.span`
  width: 23%;

  @media (max-width: 48rem) {
    width: 70%;
    font-size: 1.1rem;
  }
`;
export const QuantityOfItem = styled.span`
  width: 23%;
  display: flex;

  justify-content: center;

  @media (max-width: 48rem) {
    justify-content: center;
    width: auto;
  }

`;
export const PriceOfItem = styled.span`
  width: 23%;
  margin-right: 0.6rem;

  @media (max-width: 48rem) {
    width: 70%;
    font-size: 1.1rem;
  }
`;
export const Arrow = styled.div`
  cursor: pointer;
`;
export const Value = styled.span`
  margin: 0 0.6rem;
  @media (max-width: 48rem) {
    margin: 0 0.3rem;
  }
`;

export const RemoveButton = styled.div`
  padding-left: 0.7rem;
  cursor: pointer;

  @media (max-width: 48rem) {
    padding-left: 0;
    margin-top: 0;
  }
`;