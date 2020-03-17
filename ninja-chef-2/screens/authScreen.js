import * as  React from "react"
import {ImageBackground, Text, TouchableOpacity, View, StyleSheet} from "react-native"
import { Button } from 'galio-framework';

const styles = StyleSheet.create({
   text: {
       color: '#FFFFFF',
       
   }
})

export default AuthScreen = props => {
    return (
        <ImageBackground source={require("../assets/authImage.jpeg")} style={{width: "100%", height:"100%", opacity: ".7"}}>
            <View style={{flex: 1, alignItems: "center", justifyContent: "space-evenly"}}> 
                {/* <TouchableOpacity >
                    <Text>Sign In</Text>
                </TouchableOpacity> */}
                <Button size="small" round color="#3b3b38"   >Log In</Button>
                <TouchableOpacity
                 style={styles.text.color}
                 onPress={() =>props.navigation.navigate('SignUp')}>
                    <Text style= {{color: '#FFFFFF'}}>No Account? Sign Up Now</Text>
                </TouchableOpacity>
            </View>
                
        </ImageBackground>
    )
}