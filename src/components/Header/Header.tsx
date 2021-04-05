import React from "react";
import styled from "styled-components/macro";

export const Header = (props: any) => {
    return (
        <HeaderWrap>
            <h1>Header</h1>
        </HeaderWrap>
    );
};

// Styles
const HeaderWrap = styled.div`
    grid-area: header;
    width: 100%;
    background-color: #0000ff91;
`;
