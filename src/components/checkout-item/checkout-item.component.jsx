import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { addItemToCart, clearItemFromCart, removeItemFromCart } from "../../store/cart/cart.reducer";

import { Arrow, CheckoutItemContainer, ImageContainer, NameOfItem, PriceOfItem, QuantityOfItem, RemoveButton, Value } from "./checkout-item.styles";
import { memo } from "react";

const CheckoutItem = memo(({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch()

  const clearItemHandler = () => dispatch(clearItemFromCart(cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItem));
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} loading="lazy"/>
      </ImageContainer>
      <NameOfItem>{name}</NameOfItem>
      <QuantityOfItem>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </QuantityOfItem>
      <PriceOfItem>{price}</PriceOfItem>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
})

CheckoutItem.displayName = 'CheckoutItem';

CheckoutItem.propTypes = {
  cartItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};
export default CheckoutItem;