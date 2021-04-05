import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { routes } from "../../router/routes";

export const Navigation = (props: any) => {
    return (
        <NavigationWrap>
            <h1>Navigation</h1>
            <LinksList>
                <NavLink to={routes.profile}>Profile</NavLink>
                <NavLink to={routes.registration}>Registration</NavLink>
                <NavLink to={routes.passwordRecover}>Password Recover</NavLink>
                <NavLink to={routes.newPassword}>New Password</NavLink>
                <NavLink to={routes.presentation}>Presentation</NavLink>
            </LinksList>
        </NavigationWrap>
    );
};

// styles
const NavigationWrap = styled.div`
    grid-area: navigation;
    width: 100%;
    height: 100vh;
    background-color: #ff9800;
`;

const LinksList = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    flex-flow: column nowrap;
    a {
        margin-bottom: 10px;
        color: blue;
        &:last-child {
            margin-bottom: 0;
        }
    }
`;
