import { InputText } from "../../components/common/InputText/InputText";
import { Button } from "../../components/common/Button/Button";
import React from "react";
import { useFormik } from "formik";
import styled from "styled-components/macro";
import { useAppDispatch } from "../../store/hooks";
import { recover } from "./passwordRecoverReducer";

export const PasswordRecoverForm: React.FC = () => {
    const dispatch = useAppDispatch();

    const formik = useFormik({

        validate: (values: FormValueT) => {
            const errors: FormValueT = {} as FormValueT;
            if (!values.email) {
                errors.email = "Email is required";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = "Invalid email address";
            }
            return errors;
        },
        initialValues: {
            email: ""
        },
        onSubmit: values => {
            dispatch(recover(values));
        }
    });

    return (
        <StyledForm onSubmit={formik.handleSubmit}>

            <InputText placeholder={"Email"} error={formik.errors.email} {...formik.getFieldProps("email")} />

            <Button type="submit">Recover</Button>
        </StyledForm>
    );
};

// Styles
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  flex-basis: 400px;
`;

// Types
export type FormValueT = {
    email: string
}