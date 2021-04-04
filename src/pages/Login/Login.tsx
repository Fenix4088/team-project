import React from "react";
// import { useFormik } from 'formik';
import {InputText} from "../../components/common/InputText/InputText";
import {NavLink} from "react-router-dom";
import {routes} from "../../router/routes";
import { Button } from "../../components/common/Button/Button";
import {Checkbox} from "../../components/common/Checkbox/Checkbox";
import styled from "styled-components/macro";

export const Login = () => {
    // const formik = useFormik({
    //     initialValues: {
    //         email: '',
    //     },
    //     onSubmit: values => {
    //         alert(JSON.stringify(values, null, 2));
    //     },
    // });

    return (
        <>
            <div>
                <FormStyle>
                    <span>Sing in</span>
                    <InputText type={"text"}/>
                    <InputText type={"password"}/>
                    <NavLink to={routes.passwordRecover}>Forgot password?</NavLink>
                    <Checkbox onChange={() => alert("Change")}>Remember me</Checkbox>
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
