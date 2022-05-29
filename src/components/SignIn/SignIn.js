import React, { useState } from "react";
import {
    signInAuthWithEmailAndPassword,
    signInWithGooglePopup,
} from "../../utils/firebase.js";
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { user } = await signInAuthWithEmailAndPassword(
                email,
                password
            );

            resetForm();
        } catch (error) {
            switch (error.code) {
                case "auth/wrong-password":
                    alert("incorrect password");
                    break;
                case "auth/user-not-found":
                    alert("user not found");
                    break;
                default:
                    console.log(error);
            }
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    };

    return (
        <StyledContainer elevation={0}>
            <StyledTitle>Already have an account?</StyledTitle>
            <span>Sign In With Email and Password</span>

            <StyledForm onSubmit={handleSubmit}>
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

                    <GoogleButton
                        type="button"
                        variant="contained"
                        onClick={signInWithGoogle}
                    >
                        GOOGLE SIGN IN
                    </GoogleButton>
                </ButtonGroup>
            </StyledForm>
        </StyledContainer>
    );
};

export default SignIn;
