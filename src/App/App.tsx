import React from "react";
import { Main } from "../components/Main/Main";
import { Header } from "../components/Header/Header";
import { Navigation } from "../components/Navigation/Navigation";
import styled from "styled-components";
import {useAppSelector} from "../store/hooks";
import {Redirect} from "react-router-dom";
import {routes} from "../router/routes";

function App() {
    const isLoggedIn = useAppSelector((state) => state.login.isLoggedIn);
    // if(!isLoggedIn) return <Redirect to={routes.login}/>


    return (
        <div>
            <MainWrapper>
                <Header />
                <Navigation />
                <Main />
            </MainWrapper>
        </div>
    );
}

export default App;

// Styles
const MainWrapper = styled.div`
    display: grid;
    grid-template-columns: 15% 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
        "header header header header"
        "navigation content content content"
        "navigation content content content";
`;
