import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FormValueT } from "./PasswordRecoverForm";
import { passRecoverApi } from "../../API/passwordRecover";

export type InitialStateT = {
    isFormPending: boolean
    responseMessage?: string
};

export const initialState: InitialStateT = {
    isFormPending: false,
    responseMessage: '',
};

// * Thunks Creators
export const recover = createAsyncThunk<{ responseData: RecoverResponseT}, FormValueT, {rejectValue: {errorMessage: string}}>(
    'passwordRecover/recover',
    async (formValues: FormValueT, ThunkAPI) => {
        const { rejectWithValue } = ThunkAPI;
        try {
            const res = await passRecoverApi.recover(formValues)
            console.log(res.data)
            return { responseData: res.data }
        } catch (error) {
            console.log(error.response.data.error)
            return rejectWithValue({ errorMessage: error.response.data.error });
        }
    }
);

const passwordRecoverSlice = createSlice({
    name: "passwordRecover",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(recover.fulfilled, (state, action) => {
            state.isFormPending = false
            state.responseMessage = action.payload.responseData.info
        });
        builder.addCase(recover.rejected, (state, action) => {
            state.isFormPending = false
            state.responseMessage = action.payload?.errorMessage
        })
        builder.addCase(recover.pending, (state) => {
            state.isFormPending = true
        })
    }
});

export const passwordRecoverReducer = passwordRecoverSlice.reducer;

// * Action creators
export const {} = passwordRecoverSlice.actions;

type RecoverResponseT = {
    info: string
    error: string
}
