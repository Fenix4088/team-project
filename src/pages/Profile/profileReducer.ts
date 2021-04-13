import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type userDataT = {
    avatar?: string
    created: string
    email: string
    isAdmin: boolean
    name: string
    publicCardPacksCount: number
    rememberMe: boolean
    token: string
    tokenDeathTime: number
    updated: string
    verified: boolean
}

export type InitialStateT = {
    userData: userDataT;
};

export const initialState: InitialStateT = {
    userData: {} as userDataT,
};

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        setUserData(state, action: PayloadAction<userDataT>) {
            state.userData = action.payload;
        }
    }
});

export const profileReducer = profileSlice.reducer;

// * Action creators

export const {setUserData} = profileSlice.actions;

// * Thunks Creators
