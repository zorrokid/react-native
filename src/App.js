import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

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
        return(
            // provider tag needs an instance of a redux store
            // also need a default reducer 
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>
                        Hello!
                    </Text>
                </View>
            </Provider>        
        );
    }
}

export default App;