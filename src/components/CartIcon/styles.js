import { styled, Badge } from "@mui/material";

export const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
        border: `2px solid #7395AD`,
        padding: "0 4px",
        color: "white",
        backgroundColor: "#7395AD",
    },

    cursor: "pointer",
}));
