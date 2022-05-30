import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cartSelector";
import { Container } from "./styles";

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);
    return <Container></Container>;
};

export default CartDropdown;
