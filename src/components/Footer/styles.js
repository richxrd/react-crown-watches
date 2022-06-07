import { styled } from "@mui/material";

export const Container = styled("div")(({ theme }) => ({
    margin: "50px auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "15px",
}));

export const Credits = styled("div")(({ theme }) => ({
    fontSize: "14px",
    color: "#B0A295",
}));

export const Links = styled("div")(({ theme }) => ({
    display: "flex",
    gap: "20px",
    color: "#5D5C61",
}));
