import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginFormT } from "./Login";
import { loginApi } from "../../API/login";
import { authMe } from "../../App/AppReducer";
import { setUserData } from "../Profile/profileReducer";

export type InitialStateT = {
    isLoggedIn: boolean;
    isFormPending: boolean;
    loginError?: string;
};

export type UserDataT = {
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

export const login = createAsyncThunk<void, LoginFormT, { rejectValue: { errorMessage: string } }>(
    "login/login",
    async (formVal: LoginFormT, thunkAPI) => {
        const { rejectWithValue, dispatch } = thunkAPI;
        try {
            const res = await loginApi.login(formVal);
            dispatch(setUserData(res.data));
        } catch (err) {
            return rejectWithValue({ errorMessage: err.response.data.error });
        }
    }
);
export const logout = createAsyncThunk<string, void, { rejectValue: string }>("login/logout", async (_, thunkAPI) => {
    try {
        const res = await loginApi.logout();
        return res.data.info;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response.data.error);
    }
});

export const initialState: InitialStateT = {
    isLoggedIn: false,
    isFormPending: false,
    loginError: ""
};

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.isLoggedIn = true;
            state.isFormPending = false;
            state.loginError = "";
        });
        builder.addCase(login.rejected, (state, action) => {
            state.isLoggedIn = false;
            state.isFormPending = false;
            state.loginError = action.payload?.errorMessage;
        });
        builder.addCase(login.pending, (state) => {
            state.isFormPending = true;
        });
        builder.addCase(logout.fulfilled, (state) => {
            state.isLoggedIn = false;
        });
        builder.addCase(logout.rejected, (state) => {
            state.isFormPending = false;
        });
        builder.addCase(authMe.fulfilled, (state, action) => {
            state.isLoggedIn = true;
        });
        builder.addCase(authMe.rejected, (state, action) => {
            state.isLoggedIn = false;
        });
    }
});

export const loginReducer = loginSlice.reducer;

// * Action creators

export const {} = loginSlice.actions;


