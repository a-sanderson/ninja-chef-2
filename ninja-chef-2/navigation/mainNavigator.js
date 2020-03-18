import * as React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from '../screens/authScreen'
import SignUp from "../screens/signUpScreen"
import Profile from "../screens/profileScren"

const Stack = createStackNavigator();
const MainStack = () => {
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Auth" component={AuthScreen} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Profile" component={Profile} />
          </Stack.Navigator>
        </NavigationContainer>
      );

}

export default MainStack