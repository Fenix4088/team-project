import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { packsAPI, PacksQueryParamsT, PacksRespT } from "../../API/packsAPI";

type InitialStateT = {
    packsTableData: PacksRespT;
    isLoading: boolean;
};

// * Thunks
export const getPacks = createAsyncThunk<PacksRespT, PacksQueryParamsT, { rejectValue: any }>(
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
    }
});

export const packsReducer = packsSlice.reducer;

// * Actions
export const {} = packsSlice.actions;
