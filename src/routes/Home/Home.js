import React from "react";
import { Fade } from "react-reveal";
import { useNavigate } from "react-router-dom";
import Directory from "../../components/Directory/Directory";
import { Hero, StyledButton, StyledTitle } from "./styles";
import img from "../../assets/background.PNG";

const Home = () => {
    const navigate = useNavigate();

    const handleShopClick = (e) => {
        e.preventDefault();

        navigate("/shop");
    };

    return (
        <React.Fragment>
            <Hero style={{ backgroundImage: `url${img}` }}>
                <Fade top cascade delay={350}>
                    <StyledTitle>CRWN CLOTHING</StyledTitle>
                    <StyledButton
                        variant="contained"
                        size="large"
                        onClick={handleShopClick}
                    >
                        Shop All
                    </StyledButton>
                </Fade>
            </Hero>

            <Fade top distance="2.5rem">
                <Directory />
            </Fade>
        </React.Fragment>
    );
};

export default Home;
