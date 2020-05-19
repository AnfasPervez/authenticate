import React, { Component } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, ActivityIndicator, Alert } from 'react-native';
import { Button, Item, Input, Label } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as firebase from 'firebase';

export default class Home extends Component {

    state = {
        email: "",
    }


    static navigationOptions = {
        title: 'Home'
    }

    componentDidMount(){
        this.unsubscribeAuth= firebase.auth().onAuthStateChanged(user=>{
            if(user){
                this.setState({
                    email:user.email
                })
            }else{
                this.props.navigation.navigate("login");
            }
        })
    }
    userSignout(){
        firebase.auth().signOut()
        .catch(error=>{
            Alert.alert(error.message)
        })
    }
    componentWillUnmount() {
        this.unsubscribeAuth()
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{textAlign:"center"}}>You are logged in as {this.state.email}</Text>
                <Button full rounded danger
                    style={{ margin: 10, justifyContent: 'center' }} onPress={() => this.props.navigation.navigate('login')}
                    onPress={()=>this.userSignout()}
                >
                    <Text style={{ fontSize: 22, color: 'white' }}>logout</Text>
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
});
