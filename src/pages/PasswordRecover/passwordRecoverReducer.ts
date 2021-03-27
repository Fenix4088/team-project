
type ActionT = any;
export type InitialStateT = any;

export const initialState: InitialStateT = {

}

export const passwordRecover = (state: InitialStateT = initialState, action: ActionT):InitialStateT => {
    switch(action.type) {
        default:
            return state;
    }

}


// * Action creators


// * Thunks Creators