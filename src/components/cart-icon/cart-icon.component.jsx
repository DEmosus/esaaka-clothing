import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context";
import { CartIconContainer, ItemCountContainer, StyledShoppingBagIcon } from "./cart-icon.styles";


const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggle = () => {
    setIsCartOpen(!isCartOpen)
  }
  return (
    <CartIconContainer onClick={toggle}>
      <StyledShoppingBagIcon />
      <ItemCountContainer>{cartCount}</ItemCountContainer>
    </CartIconContainer>
  )
}

export default CartIcon;