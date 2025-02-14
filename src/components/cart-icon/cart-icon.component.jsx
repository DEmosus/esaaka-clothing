import { useDispatch, useSelector } from "react-redux";

import { selectCartCount, selectIsCartOpen } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.reducer";

import { CartIconContainer, ItemCountContainer, StyledShoppingBagIcon } from "./cart-icon.styles";

const CartIcon = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const toggle = () => {
    dispatch(setIsCartOpen(!isCartOpen))
  }
  return (
    <CartIconContainer onClick={toggle}>
      <StyledShoppingBagIcon />
      <ItemCountContainer>{cartCount}</ItemCountContainer>
    </CartIconContainer>
  )
}

export default CartIcon;