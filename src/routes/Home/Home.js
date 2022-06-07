import React from "react";
import { Fade } from "react-awesome-reveal";
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
                <Fade triggerOnce duration={500}>
                    <StyledTitle>CRWN WATCHES</StyledTitle>
                    <StyledButton
                        variant="contained"
                        size="large"
                        onClick={handleShopClick}
                    >
                        Shop All
                    </StyledButton>
                </Fade>
            </Hero>

            <Fade triggerOnce duration={500}>
                <Directory />
            </Fade>
        </React.Fragment>
    );
};

export default Home;
