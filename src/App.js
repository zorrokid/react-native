import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm'

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyBoT78sVr0IZGNLxrh2_igIXjAkBnjWLao",
            authDomain: "manager-ec9c7.firebaseapp.com",
            databaseURL: "https://manager-ec9c7.firebaseio.com",
            projectId: "manager-ec9c7",
            storageBucket: "manager-ec9c7.appspot.com",
            messagingSenderId: "491838419180"
        };
        firebase.initializeApp(config);
    }
    render() {
        // second argument is passing an initial state for redux application
        // third argument is "store enchancers", for adding functionality to store
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return(
            // provider tag needs an instance of a redux store
            // also need a default reducer 
            <Provider store={ store }>
                <LoginForm />
            </Provider>        
        );
    }
}

export default App;