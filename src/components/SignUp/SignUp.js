import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";
import {
    SignInButton,
    StyledContainer,
    StyledForm,
    StyledTitle,
} from "./styles";

const defaultFormData = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const SignUp = () => {
    const [formData, setFormData] = useState(defaultFormData);
    const { displayName, email, password, confirmPassword } = formData;

    const resetForm = () => {
        setFormData(defaultFormData);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <StyledContainer elevation={0}>
            <StyledTitle>Don't have an account?</StyledTitle>
            <span>Sign Up With Email and Password</span>
            <StyledForm>
                <FormInput
                    label="Display Name"
                    type="text"
                    name="displayName"
                    value={displayName}
                    onChange={handleChange}
                />

                <FormInput
                    label="Email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                />

                <FormInput
                    label="Password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                />

                <FormInput
                    label="Confirm Password"
                    type="password"
                    name="confirmPassword"
                    onChange={handleChange}
                    value={confirmPassword}
                />

                <SignInButton type="submit">SIGN UP</SignInButton>
            </StyledForm>
        </StyledContainer>
    );
};

export default SignUp;
