import { AppDispatchT, AppThunkT } from "../store/store";

type ActionT = any;
type ApplicationThunkT = AppThunkT<ActionT>;
type ApplicationDispatchT = AppDispatchT<ActionT>;
export type InitialStateT = any;

export const initialState: InitialStateT = {};

export const appReducer = (state: InitialStateT = initialState, action: ActionT): InitialStateT => {
    switch (action.type) {
        default:
            return state;
    }
};

// * Action creators

// * Thunks Creators
