import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import  SignupScreen  from './Screens/SignupScreen'
import {Button,Item,Input,Label} from 'native-base';
import LoginScreen from './Screens/SignupScreen';
import Log from './Screens/log';
import Loading from './Screens/LoadingScreen'
import Home from './Screens/HomeScreen';
import * as firebase from 'firebase';
import { firebaseConfig} from './config';

firebase.initializeApp(firebaseConfig);




const myswitch = createSwitchNavigator({
  Home: Home,
  Loading: Loading,
  stack: createStackNavigator({
    login: Log,

    Signup: SignupScreen,



  }, {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#d9534f',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  })
});

export default createAppContainer(myswitch);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
