import React from "react";
import styled from "styled-components/macro";
import { Button } from "../common/Button/Button";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { logout } from "../../pages/Login/loginReducer";
import { routes } from "../../router/routes";
import { NavLink } from "react-router-dom";

export const Header = () => {
    const isLoggedIn = useAppSelector((state) => state.login.isLoggedIn);
    const dispatch = useAppDispatch();

    const onLogOutBtnClick = () => {
        dispatch(logout());
    };

    return (
        <HeaderWrap>
            {isLoggedIn ? (
                <Button onClick={onLogOutBtnClick}>Logout</Button>
            ) : (
                <NavLink to={routes.login}>
                    <Button onClick={onLogOutBtnClick}>Login</Button>
                </NavLink>
            )}
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
        width: 100%;
    }

    & Button,
    a {
        grid-column-start: 2;
    }
`;
