import React, { useEffect } from "react";
import { Main } from "../components/Main/Main";
import { Header } from "../components/Header/Header";
import { Navigation } from "../components/Navigation/Navigation";
import styled from "styled-components";
import { useAppDispatch } from "../store/hooks";
import { authMe } from "./AppReducer";

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(authMe());
    }, [dispatch]);

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
