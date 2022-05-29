import { AppBar } from "@mui/material";
import React, { useState } from "react";
import { NavButtonGroup, StyledNav, StyledTitle, StyledLink } from "./styles";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Fade } from "react-reveal";
import CartIcon from "../CartIcon/CartIcon";
import { Link, useNavigate } from "react-router-dom";

const Navigation = () => {
    const [user, setUser] = useState(false);

    const navigate = useNavigate();

    const onTitleClick = (e) => {
        e.preventDefault();

        navigate("/");
    };

    const authClick = () => {
        navigate("/auth");
    };

    return (
        <>
            <AppBar position="sticky">
                <StyledNav>
                    <Fade top cascade>
                        <StyledLink to="/">
                            <Logo />
                        </StyledLink>

                        <StyledTitle onClick={onTitleClick}>CRWN</StyledTitle>

                        <NavButtonGroup>
                            {/* User */}
                            {user ? (
                                <h3>Sign Out</h3>
                            ) : (
                                <h3 onClick={authClick}>Sign In</h3>
                            )}

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
