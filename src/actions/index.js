import firebase from 'firebase';
import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED 
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
        firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password)
            .then(user => console.log(user));
    }

}