import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginFormT } from "./Login";
import { loginApi } from "../../API/login";

export type InitialStateT = {
    isLoggedIn: boolean;
    isFormPending: boolean;
    loginError?: string;
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

export const login = createAsyncThunk<{userData: UserDataT}, LoginFormT, {rejectValue: {errorMessage: string}}>("login/login", async (formVal: LoginFormT, thunkAPI) => {
    const {rejectWithValue} = thunkAPI;
    try {
        const res = await loginApi.login(formVal);
        return {userData: res.data}
    } catch (err) {
        return rejectWithValue({errorMessage: err.response.data.error})
    }

})
export const logout = createAsyncThunk<string, void, {rejectValue: string}>("login/logout", async (_, thunkAPI) => {
    try {
        const res = await loginApi.logout();
        return res.data.info;
    } catch(err) {
        return thunkAPI.rejectWithValue(err.response.data.error);
    }
})


export const initialState: InitialStateT = {
    isLoggedIn: false,
    isFormPending: false,
    loginError: ""
};

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.isLoggedIn = true;
            state.isFormPending = false;
            state.loginError = "";
            console.log(action.payload)
        })
        builder.addCase(login.rejected, (state, action) => {
            state.isLoggedIn = false;
            state.isFormPending = false;
            state.loginError = action.payload?.errorMessage;
        })
        builder.addCase(login.pending, (state) => {
            state.isFormPending = true;
        })
        builder.addCase(logout.fulfilled, (state) => {
            state.isLoggedIn = false;
        })
        builder.addCase(logout.rejected, (state) => {
            //TODO: Не понятно как обрабатывать этот catch так как пользователь если залогинен, кнопка скрыта
            state.isFormPending = false;
        })
    }
});

export const loginReducer = loginSlice.reducer;

// * Action creators

export const {} = loginSlice.actions;


