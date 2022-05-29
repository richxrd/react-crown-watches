import { Button, Paper, styled } from "@mui/material";

export const StyledContainer = styled(Paper)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    width: "350px",
    padding: "25px",
}));

export const StyledTitle = styled("h2")(({ theme }) => ({
    margin: "10px, 0",
}));

export const StyledForm = styled("form")(({ theme }) => ({
    margin: "10px 0",
}));

export const ButtonGroup = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    marginTop: "15px",
}));

export const SignInButton = styled(Button)(({ theme }) => ({
    backgroundColor: "black",
    width: "150px",

    "&:hover": {
        backgroundColor: "#5D5C61",
    },
}));

export const GoogleButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#557A95",
    width: "150px",

    "&:hover": {
        backgroundColor: "#7395AE",
    },
}));
