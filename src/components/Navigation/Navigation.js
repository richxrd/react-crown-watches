import { AppBar } from "@mui/material";
import React from "react";
import { NavButtonGroup, StyledNav, StyledTitle, StyledLink } from "./styles";

import { ReactComponent as Logo } from "../../assets/logo.svg";

const Navigation = () => {
    return (
        <>
            <AppBar position="sticky">
                <StyledNav>
                    <StyledLink to="/">
                        <Logo />
                    </StyledLink>

                    <StyledTitle>CROWN</StyledTitle>

                    <NavButtonGroup>
                        <button>Test</button>
                        <button>Test</button>
                        <button>Test</button>
                    </NavButtonGroup>
                </StyledNav>
            </AppBar>
        </>
    );
};

export default Navigation;
