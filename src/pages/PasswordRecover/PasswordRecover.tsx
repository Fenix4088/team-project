import React from "react";
import { PasswordRecoverForm } from "./PasswordRecoverForm";
import { FormContainer } from "../../components/layout/FormContainer";

export const PasswordRecover = (props: any) => {


    return (
        <>
            <h1>Password Recover</h1>

            <FormContainer>
                <PasswordRecoverForm/>
            </FormContainer>
        </>
    );
};