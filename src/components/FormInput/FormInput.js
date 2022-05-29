import React from "react";
import { StyledTextField } from "./styles";

const FormInput = ({ name, label, type, value, onChange }) => {
    return (
        <StyledTextField
            name={name}
            label={label}
            type={type}
            required
            fullWidth
            value={value}
            onChange={onChange}
            variant="standard"
        />
    );
};

export default FormInput;
