import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './Components/Common';
import LoginForm from './Components/LoginForm';


class App extends Component {
    componentWillMount() {
        firebase.initializeApp(
            {
                apiKey: 'AIzaSyA_Ua_Qdc97bARPBPGMzjpLL_tMboFcEtM',
                authDomain: 'auth-3a578.firebaseapp.com',
                databaseURL: 'https://auth-3a578.firebaseio.com',
                projectId: 'auth-3a578',
                storageBucket: 'auth-3a578.appspot.com',
                messagingSenderId: '889472800763'
              }
        );
    }

    render() {
        return (
            <View>
                <Header headerText="Auth!" />
                <LoginForm />
            </View>
        );
    }
}

export default App;
