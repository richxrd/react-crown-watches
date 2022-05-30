import { styled } from "@mui/material";

export const Container = styled("div")(({ theme }) => ({
    width: "70%",
    maxWidth: "1200px",
    minHeight: "90vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "50px auto 0",
}));

export const CheckoutHeader = styled("div")(({ theme }) => ({
    width: "100%",
    padding: "10px 0",
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid black",
}));

export const CheckoutBlock = styled("div")(({ theme }) => ({
    margin: "0 auto",
}));

export const Total = styled("span")(({ theme }) => ({
    marginTop: "25px",
    fontSize: "22px",
    marginLeft: "auto",
}));
