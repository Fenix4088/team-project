
import { RegistrationFormT } from './Registration';

import { regestrationApi } from './../../API/registration';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserDataT } from '../Login/loginReducer';

export type InitialStateT = {
    isRegistred: boolean
    isPending: boolean
    registrationError: string | undefined
};

export const initialState: InitialStateT = {
    isRegistred: false,
    isPending: false,
    registrationError: ''
};


export const register = createAsyncThunk<{ userData: UserDataT }, RegistrationFormT, { rejectValue: { errorMessage: string } }>('registration/register', async (formVal: RegistrationFormT, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const res = await regestrationApi.register(formVal);
        return { userData: res.data };
    } catch (err) {
        return rejectWithValue({ errorMessage: err.response.data.error });
    }
})
const registrationSlice = createSlice({
    name: "registration",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(register.fulfilled, (state) => {
            state.isRegistred = true
            state.isPending = false;
            state.registrationError = "";

        });
        builder.addCase(register.rejected, (state, action) => {
            state.isRegistred = false
            state.isPending = false;
            state.registrationError = action.payload?.errorMessage;
        });
        builder.addCase(register.pending, (state) => {
            state.isPending = true;
        });
    }
});
export const registrationReducer = registrationSlice.reducer;

export const { } = registrationSlice.actions;

