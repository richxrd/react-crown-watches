import { styled } from "@mui/material";

export const Container = styled("div")(({ theme }) => ({
    width: "90%",
    maxWidth: "1200px",
}));

export const Title = styled("h2")(({ theme }) => ({
    userSelect: "none",
    fontSize: "30px",
    margin: "25px 0",
    textAlign: "center",
}));

export const ProductContainer = styled("div")(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    columnGap: "20px",
    rowGap: "20px",

    [theme.breakpoints.down("md")]: {
        gridTemplateColumns: "repeat(2, 1fr)",
    },

    [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "repeat(1, 1fr)",
    },
}));
