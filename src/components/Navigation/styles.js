import { styled, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

export const StyledNav = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#B0A295",
    height: "100px",
}));

export const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: "none",
    color: "white",
}));

export const StyledTitle = styled("h2")(({ theme }) => ({
    letterSpacing: "2px",
    textAlign: "center",
    margin: "0 auto",
}));

export const NavButtonGroup = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    gap: "1rem",
}));
