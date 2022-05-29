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

export const SignInButton = styled(Button)(({ theme }) => ({
    backgroundColor: "black",
    width: "150px",
    marginTop: "15px",
    color: "white",

    "&:hover": {
        backgroundColor: "#5D5C61",
    },
}));
