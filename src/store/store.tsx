import { combineReducers, Action } from "redux";
import thunk, { ThunkAction } from "redux-thunk";
import { loginReducer } from "../pages/Login/loginReducer";
import { newPasswordReducer } from "../pages/NewPassword/newPasswordReducer";
import { passwordRecoverReducer } from "../pages/PasswordRecover/passwordRecoverReducer";
import { profileReducer } from "../pages/Profile/profileReducer";
import { registrationReducer } from "../pages/Registration/registrationReducer";
import { configureStore } from "@reduxjs/toolkit";
import {appReducer} from "../App/AppReducer";
import {cardsReducer} from "../pages/Cards/cardsReducer";
import {packsReducer} from "../pages/Packs/packsReducer";

export type AppRootStateT = ReturnType<typeof rootReducer>;
/*
 * In a AppThunkT  is a action or actions what you want to use
 * Each reducer has it own actions
 * */
export type AppThunkT<A extends Action> = ThunkAction<void, AppRootStateT, unknown, A>;
export type AppDispatchT = typeof store.dispatch;

const rootReducer = combineReducers({
    app: appReducer,
    login: loginReducer,
    newPassword: newPasswordReducer,
    passwordRecover: passwordRecoverReducer,
    profile: profileReducer,
    registration: registrationReducer,
    cards: cardsReducer,
    packs: packsReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunk)
});
