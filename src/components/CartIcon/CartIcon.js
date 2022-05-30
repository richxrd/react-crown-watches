import React from "react";
import { StyledBadge } from "./styles";
import { ShoppingCart } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import {
    selectCartCount,
    selectIsCartOpen,
} from "../../store/cart/cartSelector";
import { setIsCartOpen } from "../../store/cart/cartActions";

const CartIcon = () => {
    const dispatch = useDispatch();

    const isCartOpen = useSelector(selectIsCartOpen);
    const cartCount = useSelector(selectCartCount);

    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
    return (
        <StyledBadge badgeContent={cartCount} onClick={toggleIsCartOpen}>
            <ShoppingCart fontSize="large" />
        </StyledBadge>
    );
};

export default CartIcon;
