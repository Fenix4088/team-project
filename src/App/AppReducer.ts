import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type InitialStateT = any;

//* Thunks


export const initialState: InitialStateT = {
};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {

    }
});

export const appReducer = appSlice.reducer;

// * Actions
export const {} = appSlice.actions;

// * Thunks
