import { styled } from "@mui/material";

export const Container = styled("div")(({ theme }) => ({
    position: "absolute",
    width: "275px",
    height: "400px",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    border: "1px solid #5D5C61",
    backgroundColor: "white",
    top: "50px",
    right: "40px",
    zIndex: "5",
}));
