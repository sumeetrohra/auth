import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Card, CardSection, Spinner} from './Components/Common';
import LoginForm from './Components/LoginForm';


class App extends Component {
    state = { loggedIn: null }

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

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
            return (
                <Card>
                    <CardSection>
                        <Button
                        onPress={() => firebase.auth().signOut()}
                        title='Log Out'
                        />
                    </CardSection>
                </Card>
            );

            case false:
                return <LoginForm />;

            default:
                return (
                    <View style={styles.spinnerStyle}>
                        <Spinner size='large' />
                    </View>
                );
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Auth!" />
                {this.renderContent()}
            </View>
        );
    }
}

const styles = {
    spinnerStyle: {
        marginTop: 40,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
}

export default App;
