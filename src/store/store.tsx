import { createStore, combineReducers, Action, applyMiddleware } from "redux";
import thunk, { ThunkAction, ThunkDispatch } from "redux-thunk";
import {loginReducer} from "../pages/Login/loginReducer";
import {newPasswordReducer} from "../pages/NewPassword/newPasswordReducer";
import {passwordRecoverReducer} from "../pages/PasswordRecover/passwordRecoverReducer";
import {profileReducer} from "../pages/Profile/profileReducer";
import {registrationReducer} from "../pages/Registration/registrationReducer";
import {composeWithDevTools} from "redux-devtools-extension";

export type AppRootStateT = ReturnType<typeof rootReducer>;
/*
 * A in AppThunkT and AppDispatchT is a action or actions what you want to use
 * Each reducer has it own actions
 * */
export type AppThunkT<A extends Action> = ThunkAction<void, AppRootStateT, unknown, A>;

export type AppDispatchT<A extends Action, E = any> = ThunkDispatch<AppRootStateT, E, A>;

const rootReducer = combineReducers({
    login: loginReducer,
    newPassword: newPasswordReducer,
    passwordRecover: passwordRecoverReducer,
    profile: profileReducer,
    registration: registrationReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
