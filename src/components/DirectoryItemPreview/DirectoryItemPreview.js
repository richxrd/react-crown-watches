import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledBackground, StyledButton, StyledPaper } from "./styles";

const DirectoryItemPreview = ({ title, imageUrl, route }) => {
    const navigate = useNavigate();

    const navigateHandler = () => navigate(route);

    return (
        <StyledPaper elevation={12}>
            <StyledBackground style={{ backgroundImage: `url(${imageUrl})` }}>
                <StyledButton
                    variant="contained"
                    onClick={navigateHandler}
                >{`SHOP ${title}`}</StyledButton>
            </StyledBackground>
        </StyledPaper>
    );
};

export default DirectoryItemPreview;
