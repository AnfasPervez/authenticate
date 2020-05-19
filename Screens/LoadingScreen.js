import React, { Component } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView ,ActivityIndicator} from 'react-native';
import { Button, Item, Input, Label } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as firebase from 'firebase'
export default class Loading extends Component {
   
    static navigationOptions = {
header:null    }

componentDidMount(){
    this.unsubscribeAuth=firebase.auth().onAuthStateChanged((user)=>{
        if(user){
            this.props.navigation.navigate("Home")
        }else{
            this.props.navigation.navigate("login")
        }
    })
}
componentWillUnmount(){
    this.unsubscribeAuth()
}
    render() {
        return (
           <View style={styles.container}>
               <ActivityIndicator size="large" color="#d9534f"/>
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
