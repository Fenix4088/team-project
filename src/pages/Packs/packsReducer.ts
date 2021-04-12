import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {NewPackT, packsAPI, PacksQueryParamsT, PacksRespT, PackT} from "../../API/packsAPI";

type InitialStateT = {
    packsTableData: PacksRespT;
    isLoading: boolean;
};

// * Thunks
export const getPacks = createAsyncThunk<PacksRespT, PacksQueryParamsT, { rejectValue: string }>(
    "packs/requestPacks",
    async (packsData, thunkAPI) => {
        try {
            return await packsAPI.getPacks(packsData);
        } catch (err) {
            // TODO: error message for user, based on this message txt
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);

export const addNewPack = createAsyncThunk<PackT, NewPackT, { rejectValue: string }>("packs/addNewPack", async (newPackData, thunkAPI) => {
    try {
        const res =  await packsAPI.addPack(newPackData);
        return res.newCardsPack;
    } catch(err) {
        // TODO: error message for user, based on this message txt
        return thunkAPI.rejectWithValue(err.message)
    }
})

const initialState: InitialStateT = {
    packsTableData: {
        cardPacks: [],
        cardPacksTotalCount: 0,
        maxCardsCount: 0,
        minCardsCount: 0,
        page: 0,
        pageCount: 0
    },
    isLoading: false
};

const packsSlice = createSlice({
    name: "packs",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPacks.fulfilled, (state, action) => {
            state.packsTableData = action.payload;
            state.isLoading = false;
        });
        builder.addCase(getPacks.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(addNewPack.fulfilled, (state, action) => {
            state.packsTableData.cardPacks.unshift(action.payload);
            state.isLoading = false;
        });
        builder.addCase(addNewPack.pending, (state, action) => {
            state.isLoading = true;
        });

    }
});

export const packsReducer = packsSlice.reducer;

// * Actions
export const {} = packsSlice.actions;
