
type ActionT = any;
export type InitialStateT = any;

export const initialState: InitialStateT = {

}

export const passwordRecoverReducer = (state: InitialStateT = initialState, action: ActionT):InitialStateT => {
    switch(action.type) {
        default:
            return state;
    }

}


// * Action creators


// * Thunks Creators