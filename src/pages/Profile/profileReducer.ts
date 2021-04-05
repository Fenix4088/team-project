import { createSlice } from "@reduxjs/toolkit";

export type InitialStateT = any;

export const initialState: InitialStateT = {};

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {}
});

export const profileReducer = profileSlice.reducer;

// * Action creators

export const {} = profileSlice.actions;

// * Thunks Creators
