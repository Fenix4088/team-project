import { AppDispatchT, AppThunkT } from "../../store/store";

type ActionT = any;
type PasswordRecoverThunkT = AppThunkT<ActionT>;
type PasswordRecoverDispatchT = AppDispatchT<ActionT>;

export type InitialStateT = any;

export const initialState: InitialStateT = {};

export const passwordRecoverReducer = (state: InitialStateT = initialState, action: ActionT): InitialStateT => {
    switch (action.type) {
        default:
            return state;
    }
};
console.log("Hello");

// * Action creators

// * Thunks Creators
