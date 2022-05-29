import React, { useState } from "react";
import FormInput from "../FormInput/FormInput.js";
import {
    ButtonGroup,
    GoogleButton,
    SignInButton,
    StyledContainer,
    StyledForm,
    StyledTitle,
} from "./styles.js";

const defaultFormData = {
    email: "",
    password: "",
};

const SignIn = () => {
    const [formData, setFormData] = useState(defaultFormData);
    const { email, password } = formData;

    const resetForm = () => {
        setFormData(defaultFormData);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <StyledContainer elevation={0}>
            <StyledTitle>Already have an account?</StyledTitle>
            <span>Sign In With Email and Password</span>

            <StyledForm>
                <FormInput
                    label="Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <FormInput
                    label="Password"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />

                <ButtonGroup>
                    <SignInButton
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        SIGN IN
                    </SignInButton>

                    <GoogleButton type="button" variant="contained">
                        GOOGLE SIGN IN
                    </GoogleButton>
                </ButtonGroup>
            </StyledForm>
        </StyledContainer>
    );
};

export default SignIn;
