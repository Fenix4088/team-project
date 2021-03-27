
type ActionT = any;
type InitialStateT = any;

const initialState: InitialStateT = {

}

const registrationReducer = (state: InitialStateT = initialState, action: ActionT):InitialStateT => {
    switch(action.type) {
        default:
            return state;
    }

}


// * Action creators


// * Thunks Creators