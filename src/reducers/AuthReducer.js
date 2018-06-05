import { EMAIL_CHANGED } from '../actions/types';

const INITIAL_STATE = { email: '' }

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case EMAIL_CHANGED:
            // Make a new object with properties from state and overwrite email-property.
            // Since we make a new object, redux-knows the state has changed.
            // If we just update the property from original state (the state object is same), 
            // it's not registered as changed state.
            console.log(action.payload);
            return { ...state, email: action.payload };
        default:
            return state;
    }
}