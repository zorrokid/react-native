import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS 
} from '../actions/types';

const INITIAL_STATE = { 
    email: '',
    password: '',
    user: null
 }

export default (state = INITIAL_STATE, action) => {
    console.log(action);

    switch(action.type) {
        case EMAIL_CHANGED:
            // Make a new object with properties from state and overwrite email-property.
            // Since we make a new object, redux-knows the state has changed.
            // If we just update the property from original state (the state object is same), 
            // it's not registered as changed state.
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER_SUCCESS:
            return { ...state, user: action.payload };
        default:
            return state;
    }
}