import React from "react";
import { Loader } from "../../components/common/Loader/Loader";
import styled from "styled-components/macro";

export const PasswordRecover = (props: any) => {
    return (
        <>
            <h1>Password Recover</h1>
            <TestDiv>
                <Loader/>
            </TestDiv>
        </>
    );
};

const TestDiv = styled.div`
  width: 300px;
  height: 300px;
`