import { styled } from "@mui/material";

export const StyledDirectoryContainer = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: "200px",
    margin: "150px 0",

    [theme.breakpoints.down("lg")]: {
        justifyContent: "center",
        gap: "15%",
    },
}));
