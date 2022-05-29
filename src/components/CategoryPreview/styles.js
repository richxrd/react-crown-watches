import { styled } from "@mui/material";

export const StyledContainer = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    marginBottom: "30px",
}));

export const StyledTitle = styled("h2")(({ theme }) => ({
    fontSize: "28px",
    margin: "25px 0",
    cursor: "pointer",
}));

export const StyledPreview = styled("div")(({ theme }) => ({
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
