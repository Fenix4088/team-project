import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import { routes } from "./routes";
import { Profile } from "../pages/Profile/Profile";
import { Login } from "../pages/Login/Login";
import { Registration } from "../pages/Registration/Registration";
import { PasswordRecover } from "../pages/PasswordRecover/PasswordRecover";
import { NewPassword } from "../pages/NewPassword/NewPassword";
import { PresentationPage } from "../pages/PresenatationPage/PresentationPage";
import { NotFound } from "../pages/404/404";

const MainContentWrap = styled.div`
    grid-area: content;
    width: 100%;
    height: 100%;
`;

export const Router = () => {
    return (
        <MainContentWrap>
            <Switch>
                <Route exact path={routes.profile} render={() => <Profile />} />
                <Route exact path={routes.login} render={() => <Login />} />
                <Route exact path={routes.registration} render={() => <Registration />} />
                <Route exact path={routes.passwordRecover} render={() => <PasswordRecover />} />
                <Route exact path={routes.newPassword} render={() => <NewPassword />} />
                <Route exact path={routes.presentation} render={() => <PresentationPage />} />
                <Route render={() => <NotFound />} />
            </Switch>
        </MainContentWrap>
    );
};
