import { Button, styled } from "@mui/material";

export const PaymentFormContainer = styled("div")(({ theme }) => ({
    height: "300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
}));

export const FormContainer = styled("form")(({ theme }) => ({
    height: "100px",
    width: "100%",
    minWidth: "500px",
    display: "flex",
    flexDirection: "column",
    gap: "50px",
}));

export const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#B0A295",
    color: "white",

    "&:hover": {
        backgroundColor: "#938E94",
    },
}));
