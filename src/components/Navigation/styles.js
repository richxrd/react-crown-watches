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
    width: "25%",
}));

export const StyledTitle = styled("h2")(({ theme }) => ({
    letterSpacing: "2px",
    textAlign: "center",
    width: "50%",
}));

export const NavButtonGroup = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "flex-end",
    gap: "1rem",
    width: "25%",
}));
