import firebase from 'firebase';
import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL
} from './types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = ({ email, password }) => {
    // Using redux thunk to return function instead of action.
    // Redux thunk sees that we return a function and calls it with dispatch-method.
    // After asynchronous call has finished, we manually dispatch our action inside "then".
    // We provide dispatch to function as parameter, so it's accessible inside "then".
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => loginUserSuccess(dispatch, user))
                    .catch(() => loginUserFailed(dispatch));
            });
    };
};

const loginUserFailed = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL });
}

const loginUserSuccess = (dispatch, user) => {
    // *Manually* dispatch an action after asynchronous call has finished:
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
}

