import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { appAPI } from "../API/appApi";
import { UserDataT } from "../pages/Login/loginReducer";
import { setUserData } from "../pages/Profile/profileReducer";

export type InitialStateT = any;

//* Thunks
export const authMe = createAsyncThunk<void, void, { rejectValue: string }>(
    "app/me",
    async (_, thunkAPI) => {
        const { dispatch, rejectWithValue } = thunkAPI;
        try {
            const res = await appAPI.me();
            console.log(res.data)
            dispatch(setUserData(res.data));
        } catch (err) {
            return rejectWithValue(err.response.data.error);
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
