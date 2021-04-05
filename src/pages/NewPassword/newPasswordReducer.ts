import { createSlice } from "@reduxjs/toolkit";

export type InitialStateT = any;

export const initialState: InitialStateT = {};

const newPassSlice = createSlice({
    name: "newPassword",
    initialState,
    reducers: {}
});

export const newPasswordReducer = newPassSlice.reducer;

// * Action creators
export const {} = newPassSlice.actions;

// * Thunks Creators
