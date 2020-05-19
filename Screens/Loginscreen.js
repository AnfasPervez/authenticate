import React, { Component } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import { Button, Item, Input, Label } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as firebase from 'firebase';

export default class LoginScreen  extends Component {
    state = {
        email: "",
        password: ""
    }
    static navigationOptions = {
        title: 'Login'
    }
    userSignin(email,pass){
        firebase.auth().signInWithEmailAndPassword(email, pass)
            .then(() => {
                this.props.navigation.navigate("Home")
            })
            .catch(error => {
                Alert.alert(error.message)
            })
    }

    render() {
        return (
            <KeyboardAvoidingView
                style={styles.container}>
                <Item floatingLabel
                    style={{ borderBottomColor: "red" }}
                >
                    <Label>email id</Label>
                    <Input value={this.state.email}
                        onChangeText={(text) => this.setState({ email: text })}
                    />
                </Item>
                <Item floatingLabel style={{ borderBottomColor: "red" }}
                >
                    <Label>password</Label>
                    <Input 
                    secureTextEntry={true}
                    value={this.state.password}
                        onChangeText={(text) => this.setState({ password: text })}

                    />
                </Item>
                <Button full rounded danger onPress={() => this.userSignin(this.state.email, this.state.password)}
                    style={{ margin: 10, justifyContent: 'center' }}
                >
                    <Text style={{ fontSize: 22, color: 'white' }}>signup</Text>
                </Button>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Signup")}
>
                    <Text style={{ textAlign: "center" }}>Dont have account?</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        padding: 10
    },
});
