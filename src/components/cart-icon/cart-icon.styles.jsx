import styled from "styled-components";
import ShoppingBagIcon from "../icons/shopping-bag-icon.component";

export const CartIconContainer = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 48rem) {
    width: 2.1rem;
    height: 2.1rem;
  }
`;

export const StyledShoppingBagIcon = styled(ShoppingBagIcon)`
  width: 1.5rem;
  height: 1.5rem;

  @media (max-width: 48rem) {
    width: 1.2rem;
    height: 1.2rem;
  }
`;

export const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 0.6rem;
  font-weight: bold;
  bottom: 0.7rem;

  @media (max-width: 48rem) {
    font-size: 0.5rem;
    bottom: 0.4rem;
  }
`;
