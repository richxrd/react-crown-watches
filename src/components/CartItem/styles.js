import { styled } from "@mui/material";

export const Container = styled("div")(({ theme }) => ({
    width: "100%",
    display: "flex",
    height: "90px",
    marginBottom: "15px",
}));

export const Image = styled("img")(({ theme }) => ({
    width: "30%",
}));

export const ItemDetails = styled("div")(({ theme }) => ({
    width: "70%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: "10px 20px",
    color: "black",
    gap: "5px",
}));
