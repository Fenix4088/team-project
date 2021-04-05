import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {LoginFormT} from "./Login";
import {instance} from "../../API/commonAPIData";

export type InitialStateT = {
    isLoggedIn: boolean;
    loginError: string;
};

type UserDataT = {
    created: string;
    email: string;
    isAdmin: boolean;
    name: string;
    publicCardPacksCount: number;
    rememberMe: boolean;
    token: string;
    tokenDeathTime: number;
    updated: string;
    verified: boolean;
};

// * Thunks

export const loginization = createAsyncThunk<{userData: UserDataT}, LoginFormT, {rejectValue: {errorMessage: string}}>("login/login", async (formVal: LoginFormT, thunkAPI) => {
    const {rejectWithValue} = thunkAPI;
    try {
        const res = await instance.post("auth/login", formVal);
        console.log(res.data)
        return {userData: res.data}
    } catch (err) {
        return rejectWithValue({errorMessage: err.response.data.error})
    }

})

export const initialState: InitialStateT = {
    isLoggedIn: false,
    loginError: ""
};

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(loginization.fulfilled, (state, action) => {
            state.isLoggedIn = true;
            console.log(action.payload)
        })
        builder.addCase(loginization.rejected, (state, action) => {
            state.isLoggedIn = false;
            console.log(action.payload?.errorMessage)
        })
    }
});

export const loginReducer = loginSlice.reducer;

// * Action creators

export const {} = loginSlice.actions;


