import { createSlice } from "@reduxjs/toolkit";

export type InitialStateT = any;

export const initialState: InitialStateT = {};

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {}
});

export const loginReducer = loginSlice.reducer;

// * Action creators

export const {} = loginSlice.actions;

// * Thunks
