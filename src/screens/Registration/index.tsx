import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

class Registration extends Component {

  constructor(props) {
    super(props);
    state = {
      firstName: '',
      phone: '',
      password: '',
    }
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed " + viewId);
  }

  render() {
    return (
      <ScrollView>
      <Text style={{fontSize:24,paddingLeft:10,paddingTop:10,color:'black'}}> SignUP</Text>

      <View style={styles.container}>


        <View style={styles.inputContainer}>
          <Text>Name</Text>
          <TextInput style={styles.inputs}
            //  placeholder="Phone Number"
            keyboardType="default"
            onChangeText={(Name) => this.setState({ Name })}
          />

        </View>

        <View style={styles.inputContainer}>
          <Text>Phone</Text>
          <TextInput style={styles.inputs}
            //  placeholder="Phone Number"
            keyboardType="phone-pad"
            onChangeText={(phone) => this.setState({ phone })}
          />

        </View>

        <View style={styles.inputContainer}>
          <Text>password</Text>
          <TextInput style={styles.inputs}
          
            //  placeholder="Phone Number"
            keyboardType="default"
            secureTextEntry={true}
              underlineColorAndroid='transparent'
            onChangeText={(password) => this.setState({ password })}
          />

        </View>

        <View style={styles.inputContainer}>
          <Text>Confirm password</Text>
          <TextInput style={styles.inputs}
            //  placeholder="Phone Number"
            keyboardType="default"
            secureTextEntry={true}
              underlineColorAndroid='transparent'
            onChangeText={(password) => this.setState({ password })}
          />

        </View>






        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={styles.loginText}>SignUp</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('login')}>
          <Text> Aleardy have an account? Sign in</Text>
        </TouchableHighlight>

        <TouchableHighlight  onPress={() => this.props.navigation.navigate('Login')}>
        <Text> by signing up you agree to our Terms $ Condition</Text>
      </TouchableHighlight>


      </View>
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:'45%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    borderBottomColor: '#B7C3C4',
    borderBottomWidth: 1,
    width:300,
    height:55,
    marginBottom:28,
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
 
  buttonContainer: {
    height:'18%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:'80%',
    borderRadius:8,
  },
  loginButton: {
    backgroundColor: "#F4CE64",
  },
  loginText: {
    color:'black',
  }
});
export default Registration;