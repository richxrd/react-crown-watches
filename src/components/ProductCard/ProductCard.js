import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Footer, Image, StyledButton, StyledContainer } from "./styles";
import { addItemToCart } from "../../store/cart/cartActions";
import { selectCartItems } from "../../store/cart/cartSelector";

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const dispatch = useDispatch();

    const cartItems = useSelector(selectCartItems);
    const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

    return (
        <StyledContainer>
            <Image src={imageUrl} alt={`${name}`} />
            <Footer>
                <span>{name}</span>
                <span>${price}</span>
            </Footer>
            <StyledButton variant="contained" onClick={addProductToCart}>
                Add to cart
            </StyledButton>
        </StyledContainer>
    );
};

export default ProductCard;
