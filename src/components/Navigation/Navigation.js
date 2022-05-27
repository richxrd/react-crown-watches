import { AppBar, Badge } from "@mui/material";
import React, { useState } from "react";
import { NavButtonGroup, StyledNav, StyledTitle, StyledLink } from "./styles";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Fade } from "react-reveal";
import { ShoppingCart } from "@mui/icons-material";
import CartIcon from "../CartIcon/CartIcon";

const Navigation = () => {
    const [user, setUser] = useState(false);

    return (
        <>
            <AppBar position="sticky">
                <StyledNav>
                    <Fade top>
                        <StyledLink to="/">
                            <Logo />
                        </StyledLink>

                        <StyledTitle>CROWN</StyledTitle>

                        <NavButtonGroup>
                            {/* Shop */}
                            <StyledLink to="/shop">
                                <h4>Shop</h4>
                            </StyledLink>
                            {/* User */}

                            {user ? <h4>Sign Out</h4> : <h4>Sign In</h4>}
                            {/* Shopping Cart */}
                            <CartIcon />
                        </NavButtonGroup>
                    </Fade>
                </StyledNav>
            </AppBar>
        </>
    );
};

export default Navigation;
