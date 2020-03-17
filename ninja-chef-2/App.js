import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainStack from "./navigation/mainNavigator"
import * as firebase from "firebase/app"
import "firebase/auth";
import { firebaseConfig } from './Config';

firebase.initializeApp(firebaseConfig)


export default function App() {
  return (
    <MainStack></MainStack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
