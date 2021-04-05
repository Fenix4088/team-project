import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type InitialStateT = any;

export const initialState: InitialStateT = {
    isTest: false
};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        testApp(state, action: PayloadAction<{isTest: boolean}>) {
            state.isTest = action.payload.isTest;
        }
    }
});

export const appReducer = appSlice.reducer;

// * Actions
export const {testApp} = appSlice.actions;

// * Thunks
