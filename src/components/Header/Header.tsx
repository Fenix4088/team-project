import React from "react";
import styled from "styled-components/macro";
import { Button } from "../common/Button/Button";
import {useAppDispatch} from "../../store/hooks";
import {logout} from "../../pages/Login/loginReducer";

export const Header = () => {
    const dispatch = useAppDispatch();

    const onLogOutBtnClick = () => {
        dispatch(logout())
    }

    return (
        <HeaderWrap>
            <Button onClick={onLogOutBtnClick}>Logout</Button>
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

