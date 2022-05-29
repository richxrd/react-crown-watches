import React from "react";
import { StyledBackground, StyledButton, StyledPaper } from "./styles";

const DirectoryItemPreview = ({ title, imageUrl }) => {
    return (
        <StyledPaper elevation={12}>
            <StyledBackground style={{ backgroundImage: `url(${imageUrl})` }}>
                <StyledButton variant="contained">{`SHOP ${title}`}</StyledButton>
            </StyledBackground>
        </StyledPaper>
    );
};

export default DirectoryItemPreview;
