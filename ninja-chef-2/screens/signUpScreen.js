import * as React from "react"
import {Input, Button} from "galio-framework"
import {View, Image} from "react-native"
import * as firebase from "firebase/app"
import "firebase/auth";






class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            passWord: '',
            address: '',
            zipCode: ''
        }
    }
    
    newUser = ()=> {
        let email = this.state.email
        let password = this.state.passWord
        firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => this.props.navigation.navigate("Profile"))
            .catch(error => console.log(error))

    }
    render(){
        return(
            <View style={{alignItems: "center", justifyContent:"space-evenly"}}>
                <Image
                style={{}}
                source={require('../assets/PlateLogo.jpg')} />
                <Input
                    onChangeText={(email) => this.setState({email})} 
                    value={this.state.email}    
                    placeholder="email">
                </Input>
                <Input 
                    placeholder="password"
                    onChangeText={(passWord) => this.setState({passWord})}
                    value={this.state.passWord}
                    password>
                </Input>
                <Input placeholder="address"></Input>
                <Input placeholder="zip"></Input>
                <Button color="grey" onPress={this.newUser}>Submit</Button>
            </View>
        )
    }
}

export default SignUp