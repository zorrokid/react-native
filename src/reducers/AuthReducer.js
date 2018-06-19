import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from '../actions/types';

const INITIAL_STATE = { 
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false
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
        case LOGIN_USER:
            return { ...state, loading: true, error: '' };
        case LOGIN_USER_SUCCESS:
            // 1) copy all from current state 
            //    (just in case we add new properties that are not in INITIAL_STATE) 
            // 2) reset properties from INITIAL_STATE
            // 3) add user -model
            return { ...state, ...INITIAL_STATE, user: action.payload };
        case LOGIN_USER_FAIL:
            return { ...state, error: 'Authentication failed.', loading: false }
        default:
            return state;
    }
}