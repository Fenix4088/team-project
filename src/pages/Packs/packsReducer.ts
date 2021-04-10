import {createSlice} from "@reduxjs/toolkit";

type InitialStateT = any;

const initialState: InitialStateT = {}

const packsSlice = createSlice({
    name: "packs",
    initialState,
    reducers: {},
    extraReducers: {}
})

export const packsReducer = packsSlice.reducer;

// * Actions
export const {} = packsSlice.actions;