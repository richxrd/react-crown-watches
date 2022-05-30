import { Button, ButtonGroup, styled } from "@mui/material";

export const Container = styled("div")(({ theme }) => ({
    width: "100%",
    display: "flex",
    minHeight: "100px",
    borderBottom: "1px solid black",
    padding: "15px 0",
    fontSize: "20px",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "1%",
}));

export const Image = styled("img")(({ theme }) => ({
    height: "100%",
    width: "100%",
    objectFit: "cover",
}));

export const ImageContainer = styled("div")(({ theme }) => ({
    width: "23%",
    height: "200px",
    display: "flex",
    justifyContent: "center",
}));

export const Block = styled("div")(({ theme }) => ({
    width: "23%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
}));

export const Name = styled("span")(({ theme }) => ({}));

export const Quantity = styled("span")(({ theme }) => ({
    width: "30px",
    display: "flex",
    alignItems: "center",
}));

export const StyledButtonGroup = styled(ButtonGroup)(({ theme }) => ({
    backgroundColor: "white",
}));

export const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#557A95",
    color: "white",

    "&:hover": {
        backgroundColor: "#7395AE",
    },
}));
