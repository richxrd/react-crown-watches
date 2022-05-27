import React from "react";
import { StyledBadge } from "./styles";
import { ShoppingCart } from "@mui/icons-material";

const CartIcon = () => {
    return (
        <StyledBadge badgeContent={3}>
            <ShoppingCart />
        </StyledBadge>
    );
};

export default CartIcon;