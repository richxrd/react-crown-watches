import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cartSelector";
import { CartItems, Container, StyledButton } from "./styles";
import CartItem from "../CartItem/CartItem";

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);
    return (
        <Container>
            <CartItems>
                {cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item} />
                ))}
            </CartItems>

            <Link to="/checkout">
                <StyledButton variant="contained">GO TO CHECKOUT</StyledButton>
            </Link>
        </Container>
    );
};

export default CartDropdown;
