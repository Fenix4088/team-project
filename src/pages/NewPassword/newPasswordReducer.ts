import { AppDispatchT, AppThunkT } from "../../store/store";

type ActionT = any;
type NewPasswordThunkT = AppThunkT<ActionT>;
type NewPasswordDispatchT = AppDispatchT<ActionT>;

export type InitialStateT = any;

export const initialState: InitialStateT = {};

export const newPasswordReducer = (state: InitialStateT = initialState, action: ActionT): InitialStateT => {
    switch (action.type) {
        default:
            return state;
    }
};

// * Action creators

// * Thunks Creators
