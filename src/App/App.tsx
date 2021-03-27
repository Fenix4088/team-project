import React from "react";
import "./App.css";
import { Router } from "../router/Router";
import { Header } from "../components/Header/Header";
import { Navigation } from "../components/Navigation/Navigation";
import styled from "styled-components";

const MainWrapper = styled.div`
    display: grid;
    grid-template-columns: 15% 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
        "header header header header"
        "navigation content content content"
        "navigation content content content";
`;

function App() {
    return (
        <div className="App">
            <MainWrapper>
                <Header />
                <Navigation />
                <Router />
            </MainWrapper>
        </div>
    );
}

export default App;
