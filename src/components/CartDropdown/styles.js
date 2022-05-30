import { Button, styled } from "@mui/material";

export const Container = styled("div")(({ theme }) => ({
    position: "absolute",
    width: "275px",
    height: "400px",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    border: "1px solid #5D5C61",
    backgroundColor: "white",
    top: "75px",
    right: "40px",
    zIndex: "5",
}));

export const CartItems = styled("div")(({ theme }) => ({
    height: "350px",
    display: "flex",
    flexDirection: "column",
    overflowY: "scroll",
    marginBottom: "20px",
}));

export const StyledButton = styled(Button)(({ theme }) => ({
    width: "100%",
    height: "50px",
    backgroundColor: "#B0A295",

    "&:hover": {
        backgroundColor: "#938E94",
    },
}));
