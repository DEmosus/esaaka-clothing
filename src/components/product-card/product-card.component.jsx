import { useContext } from "react";
import PropTypes from "prop-types";

import { CartContext } from "../../contexts/cart-context";
import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";
import { Footer, Name, Price, ProductCardContainer } from "./product-card.styles";


const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => { 
    addItemToCart(product); 
  }
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button buttonType={BUTTON_TYPES_CLASSES.inverted} onClick={addProductToCart}>Add to card</Button>
    </ProductCardContainer>
  )
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired
}

export default ProductCard;