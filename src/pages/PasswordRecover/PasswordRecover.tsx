import React from "react";
import { PasswordRecoverForm } from "./PasswordRecoverForm";
import { FormContainer } from "../../components/layout/FormContainer";
import { Loader } from "../../components/common/Loader/Loader";
import { useAppSelector } from "../../store/hooks";

export const PasswordRecover = () => {

    const isFormPending = useAppSelector((state) => state.passwordRecover.isFormPending);
    const responseMessage = useAppSelector((state) => state.passwordRecover.responseMessage)

    return (
        <>
            <h1>Password Recover</h1>

            <FormContainer>
                {isFormPending ? <Loader/> : <PasswordRecoverForm/>}
            </FormContainer>
            <div>{responseMessage}</div>

        </>
    );
};