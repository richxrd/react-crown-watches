import { Button, styled } from "@mui/material";

export const Hero = styled("div")(({ theme }) => ({
    height: "calc(100vh - 100px)",
    backgroundImage:
        'url("https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
}));

export const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#5D5C61",
    width: "150px",

    "&:hover": {
        backgroundColor: "#938E94",
    },
}));

export const StyledTitle = styled("div")(({ theme }) => ({
    fontSize: "72px",
    fontWeight: "600",
    letterSpacing: "2px",
    textTransform: "uppercase",
    margin: "50px 0",
    color: "white",
    textShadow: "1px 5px 10px #B0A295",
}));
