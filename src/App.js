import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        const config = {
            apikey: "",
            authdomain: "",
            databaseurl: "",
            projectid: "",
            storagebucket: "",
            messagingsenderid: ""
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
                <Router />
            </Provider>        
        );
    }
}

export default App;