import React from "react";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import { Container } from "./styles";

const Auth = () => {
    return (
        <Container>
            <SignIn />
            <SignUp />
        </Container>
    );
};

export default Auth;
