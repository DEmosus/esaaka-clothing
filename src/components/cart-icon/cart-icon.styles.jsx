import styled from "styled-components";
import ShoppingBagIcon from "../icons/shopping-bag-icon.component";

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;

export const StyledShoppingBagIcon = styled(ShoppingBagIcon)`
  width: 24px;
  height: 24px;

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;

  @media (max-width: 768px) {
    font-size: 8px;
    bottom: 7px;
  }
`;
