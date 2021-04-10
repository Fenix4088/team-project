import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {packsAPI, PacksQueryParamsT, PacksRespT} from "../../API/packsAPI";

type InitialStateT = {
    packsTableData: PacksRespT;
};

// * Thunks
export const getPacks = createAsyncThunk<PacksRespT, PacksQueryParamsT, {rejectValue: any}>(
    "packs/requestPacks",
    async (packsData, thunkAPI) => {
        try {
            return await packsAPI.getPacks(packsData);
        } catch (err) {
            return thunkAPI.rejectWithValue("");
        }
    }
);

const initialState: InitialStateT = {
    packsTableData: {} as PacksRespT
};

const packsSlice = createSlice({
    name: "packs",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPacks.fulfilled, (state, action) => {
            state.packsTableData = action.payload;
        })
    }
});

export const packsReducer = packsSlice.reducer;

// * Actions
export const {} = packsSlice.actions;
