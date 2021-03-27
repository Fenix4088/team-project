import { AppDispatchT, AppThunkT } from "../../store/store";

type ActionT = any;
type LoginThunkT = AppThunkT<ActionT>;
type LoginDispatchT = AppDispatchT<ActionT>;

export type InitialStateT = any;

export const initialState: InitialStateT = {};

export const loginReducer = (state: InitialStateT = initialState, action: ActionT): InitialStateT => {
    switch (action.type) {
        default:
            return state;
    }
};

// * Action creators

// * Thunks Creators
