import { Button, styled } from "@mui/material";

export const StyledContainer = styled("div")(({ theme }) => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    height: "450px",
    alignItems: "center",
}));

export const Image = styled("img")(({ theme }) => ({
    width: "100%",
    height: "95%",
    objectFit: "cover",
    marginBottom: "5px",

    "&:hover": {
        opacity: "0.85",
    },
}));

export const StyledButton = styled(Button)(({ theme }) => ({
    width: "15%",
    opacity: "0.9",
    position: "absolute",
    top: "300px",
    display: "flex",
    backgroundColor: "#5D5C61",

    "&:hover": {
        backgroundColor: "#938E94",
    },

    [theme.breakpoints.down("md")]: {
        width: "40%",
    },

    [theme.breakpoints.down("sm")]: {
        width: "60%",
    },
}));

export const Footer = styled("div")(({ theme }) => ({
    width: "100%",
    height: "5%",
    display: "flex",
    justifyContent: "space-between",
}));
