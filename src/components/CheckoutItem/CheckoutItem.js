import { Add, DeleteForever, Remove } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
} from "../../store/cart/cartActions";
import { selectCartItems } from "../../store/cart/cartSelector";
import {
    Block,
    Container,
    Image,
    ImageContainer,
    Name,
    Quantity,
    StyledButton,
    StyledButtonGroup,
} from "./styles";

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const clearItem = () => dispatch(clearItemFromCart(cartItems, cartItem));
    const removeItem = () => dispatch(removeItemFromCart(cartItems, cartItem));
    const addItem = () => dispatch(addItemToCart(cartItems, cartItem));

    return (
        <Container>
            <ImageContainer>
                <Image src={imageUrl} alt={name} />
            </ImageContainer>

            <Block>
                <Name>{name}</Name>
            </Block>

            <Block>
                <Quantity>{quantity}</Quantity>
                <StyledButtonGroup
                    orientation="vertical"
                    size="small"
                    variant="text"
                >
                    <StyledButton size="small" onClick={addItem}>
                        <Add fontSize="small" />
                    </StyledButton>
                    <StyledButton size="small" onClick={removeItem}>
                        <Remove fontSize="small" />
                    </StyledButton>
                </StyledButtonGroup>
            </Block>
            <Block>
                <Name>${price}</Name>
            </Block>
            <Block>
                <IconButton size="large" onClick={clearItem}>
                    <DeleteForever fontSize="large" />
                </IconButton>
            </Block>
        </Container>
    );
};

export default CheckoutItem;
