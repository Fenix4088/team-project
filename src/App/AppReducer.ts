import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { appAPI } from "../API/appApi";
import { UserDataT } from "../pages/Login/loginReducer";

export type InitialStateT = any;

//* Thunks
export const authMe = createAsyncThunk<{ userData: UserDataT }, void, { rejectValue: string }>(
    "app/me",
    async (_, thunkAPI) => {
        try {
            const res = await appAPI.me();
            return { userData: res.data };
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response.data.error);
        }
    }
);

export const initialState: InitialStateT = {};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {}
});

export const appReducer = appSlice.reducer;

// * Actions
export const {} = appSlice.actions;

// * Thunks
