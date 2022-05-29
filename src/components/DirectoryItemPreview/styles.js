import { Button, Paper, styled } from "@mui/material";

export const StyledPaper = styled(Paper)(({ theme }) => ({
    height: "350px",
    width: "40%",
}));

export const StyledBackground = styled("div")(({ theme }) => ({
    height: "100%",
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}));

export const StyledButton = styled(Button)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",

    "&:hover": {
        backgroundColor: "#5D5C61",
    },
}));
