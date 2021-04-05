import React from "react";
import styled from "styled-components/macro";
import { Button } from "../common/Button/Button";

export const Header = () => {
    return (
        <HeaderWrap>
            <Button>Logout</Button>
        </HeaderWrap>
    );
};

// Styles
const HeaderWrap = styled.div`
    padding: 15px;
    grid-area: header;
    display: grid;
    grid-template-columns: 10fr 1fr;
    background-color: #0000ff91;
    & Button {
      grid-column-start: 2
    }
`;

