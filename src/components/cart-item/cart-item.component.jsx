import PropTypes from "prop-types";
import { CartItemContainer, ItemDetailsContainer, NameContainer, PriceContainer } from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetailsContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{quantity} x ${price}</PriceContainer>
      </ItemDetailsContainer>
    </CartItemContainer>
  )
}

CartItem.propTypes = {
  cartItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired
};

export default CartItem;