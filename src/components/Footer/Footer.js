import { GitHub, LinkedIn } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import React from "react";
import { Container, Credits, Links } from "./styles";

const Footer = () => {
    return (
        <Container>
            <Credits>Designed & Implemented by Richard Lin</Credits>
            <Links>
                <a
                    href="https://github.com/richxrd"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Tooltip title="Github">
                        <GitHub />
                    </Tooltip>
                </a>

                <a
                    href="https://www.linkedin.com/in/richard-hlin/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Tooltip title="LinkedIn">
                        <LinkedIn />
                    </Tooltip>
                </a>
            </Links>
        </Container>
    );
};

export default Footer;
