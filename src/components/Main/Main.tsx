import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import { routes } from "../../router/routes";
import { Profile } from "../../pages/Profile/Profile";
import { Login } from "../../pages/Login/Login";
import { Registration } from "../../pages/Registration/Registration";
import { PasswordRecover } from "../../pages/PasswordRecover/PasswordRecover";
import { NewPassword } from "../../pages/NewPassword/NewPassword";
import { PresentationPage } from "../../pages/PresenatationPage/PresentationPage";
import { NotFound } from "../../pages/404/404";
import {Cards} from "../../pages/Cards/Cards";
import {Packs} from "../../pages/Packs/Packs";

const MainContentWrap = styled.div`
    padding: 25px 15px;
    grid-area: content;
    width: 100%;
    height: 100%;
`;

export const Main = () => {
    return (
        <MainContentWrap>
            <Switch>
                <Route exact path={routes.profile} render={() => <Profile />} />
                <Route exact path={routes.login} render={() => <Login />} />
                <Route exact path={routes.registration} render={() => <Registration />} />
                <Route exact path={routes.passwordRecover} render={() => <PasswordRecover />} />
                <Route exact path={routes.newPassword} render={() => <NewPassword />} />
                <Route exact path={routes.presentation} render={() => <PresentationPage />} />
                <Route exact path={routes.cards} render={() => <Cards />} />
                <Route exact path={routes.packs} render={() => <Packs />} />
                <Route render={() => <NotFound />} />
            </Switch>
        </MainContentWrap>
    );
};
