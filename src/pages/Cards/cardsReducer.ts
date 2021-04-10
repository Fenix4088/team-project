import {createSlice} from "@reduxjs/toolkit";

type InitialStateT = any;

const initialState: InitialStateT = {}

const cardsSlice = createSlice({
    name: "cards",
    initialState,
    reducers: {},
    extraReducers: {}
})

export const cardsReducer = cardsSlice.reducer;

// * Actions
export const {} = cardsSlice.actions;