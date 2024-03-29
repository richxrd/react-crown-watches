import React from "react";
import { useNavigate } from "react-router-dom";
import { signOutUser } from "../../utils/firebase";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/userSelector";
import { selectIsCartOpen } from "../../store/cart/cartSelector";

import { NavButtonGroup, StyledNav, StyledTitle, StyledLink } from "./styles";
import { AppBar } from "@mui/material";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Fade } from "react-awesome-reveal";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);

    const navigate = useNavigate();

    const onTitleClick = (e) => {
        e.preventDefault();

        navigate("/");
    };

    const signOutHandler = async () => {
        await signOutUser();
    };

    const authClick = () => {
        navigate("/auth");
    };

    return (
        <>
            <AppBar position="sticky">
                <StyledNav>
                    <Fade triggerOnce cascade duration={500}>
                        <StyledLink to="/">
                            <Logo />
                        </StyledLink>

                        <StyledTitle onClick={onTitleClick}>CRWN</StyledTitle>

                        <NavButtonGroup>
                            {/* User */}
                            {currentUser ? (
                                <h3 onClick={signOutHandler}>Sign Out</h3>
                            ) : (
                                <h3 onClick={authClick}>Sign In</h3>
                            )}

                            {/* Shopping Cart */}
                            <CartIcon />
                        </NavButtonGroup>
                    </Fade>
                    {isCartOpen && <CartDropdown />}
                </StyledNav>
            </AppBar>
        </>
    );
};

export default Navigation;
