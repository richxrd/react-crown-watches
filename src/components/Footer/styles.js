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
    color: "#3D56F0",
}));

export const Email = styled("div")(({ theme }) => ({
    fontSize: "14px",
    color: "#637381",
}));

export const Links = styled("div")(({ theme }) => ({
    display: "flex",
    gap: "20px",
    color: "#637381",
}));
