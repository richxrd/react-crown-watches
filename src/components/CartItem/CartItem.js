import React from "react";
import { Container, Image, ItemDetails } from "./styles";

const CartItem = ({ cartItem }) => {
    const { name, quantity, price, imageUrl } = cartItem;

    return (
        <Container>
            <Image src={imageUrl} alt={name} />

            <ItemDetails>
                <h4>{name}</h4>
                <span>
                    {quantity} x ${price}
                </span>
            </ItemDetails>
        </Container>
    );
};

export default CartItem;
