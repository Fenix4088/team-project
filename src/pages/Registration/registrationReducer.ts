import { createSlice } from "@reduxjs/toolkit";

export type InitialStateT = any;

export const initialState: InitialStateT = {};

const registrationSlice = createSlice({
    name: "registration",
    initialState,
    reducers: {}
});

export const registrationReducer = registrationSlice.reducer;

// * Action creators
export const {} = registrationSlice.actions;
// * Thunks Creators
