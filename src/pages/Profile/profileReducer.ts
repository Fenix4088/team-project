import { AppDispatchT, AppThunkT } from "../../store/store";

type ActionT = any;
type ProfileThunkT = AppThunkT<ActionT>;
type ProfileDispatchT = AppDispatchT<ActionT>;
export type InitialStateT = any;

export const initialState: InitialStateT = {};

export const profileReducer = (state: InitialStateT = initialState, action: ActionT): InitialStateT => {
    switch (action.type) {
        default:
            return state;
    }
};

// * Action creators

// * Thunks Creators
