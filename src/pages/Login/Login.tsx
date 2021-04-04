import React from "react";
import { InputText } from "../../components/common/InputText/InputText";
import { NavLink } from "react-router-dom";
import { routes } from "../../router/routes";
import { Button } from "../../components/common/Button/Button";
import { Checkbox } from "../../components/common/Checkbox/Checkbox";
import styled from "styled-components/macro";
import { useFormik } from "formik";
// yehorTest@gmail.com
type LoginFormValT = {
    email: string;
    password: string;
};

export const Login = () => {
    const validate = (values: LoginFormValT) => {
        const errors: LoginFormValT = {} as LoginFormValT;
        if (!values.password) {
            errors.password = "Required";
        } else if (values.password.length < 5) {
            errors.password = "Must be 5 characters or more";
        }

        if (!values.email) {
            errors.email = "Required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = "Invalid email address";
        } else if (values.email.length > 50) {
            errors.email = "Your email is too long :-(";
        }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            rememberMe: false
        },
        validate,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        }
    });

    const inputValidation = (fieldType: "password" | "email"): string => {
        return formik.touched[fieldType] && formik.errors[fieldType] ? `${formik.errors[fieldType]}` : "";
    };

    return (
        <>
            <div>
                <FormStyle onSubmit={formik.handleSubmit}>
                    <span>Sing in</span>

                    <InputText
                        type={"email"}
                        value={formik.values.email}
                        id={"email"}
                        name={"email"}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder={"Email"}
                        error={inputValidation("email")}
                    />
                    <InputText
                        type={"password"}
                        value={formik.values.password}
                        name={"password"}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder={"Password"}
                        error={inputValidation("password")}
                    />

                    <NavLink to={routes.passwordRecover}>Forgot password?</NavLink>
                    <Checkbox checked={formik.values.rememberMe} onChange={formik.handleChange} name={"rememberMe"}>
                        Remember me
                    </Checkbox>
                    <Button type={"submit"}>Sing in</Button>
                    <NavLink to={routes.registration}>Registration</NavLink>
                </FormStyle>
            </div>
        </>
    );
};

const FormStyle = styled.form`
    margin: 0 auto;
    padding: 10px 15px;
    width: 50%;
    min-width: 300px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;

    border: 1px solid red;
`;

