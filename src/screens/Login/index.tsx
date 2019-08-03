import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

class Login extends Component {
  constructor(props) {
    super(props);
    state = {
      firstName: "",
      phone: "",
      password: ""
    };
  }

  onClickListener = viewId => {
    Alert.alert("Alert", "Button pressed " + viewId);
  };

  render() {
    return (
      <View>
        <Text
          style={{
            fontSize: 24,
           paddingVertical:40,
           paddingLeft:20,
            color: "black"
          }}
        >
          Login
        </Text>
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Text>Phone</Text>
            <TextInput
              style={styles.inputs}
              //  placeholder="Phone Number"
              keyboardType="phone-pad"
              onChangeText={phone => this.setState({ phone })}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text>password</Text>
            <TextInput
              style={styles.inputs}
              keyboardType="default"
              secureTextEntry={true}
              underlineColorAndroid="transparent"
              onChangeText={password => this.setState({ password })}
            />
          </View>
          <TouchableHighlight
            style={[styles.buttonContainer, styles.loginButton]}
            onPress={() => this.onClickListener("login")}
          >
            <Text style={styles.loginText}>Log in</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.buttonContainer}
            onPress={() => this.props.navigation.navigate("registration")}
          >
            <Text> dont have an account? Sign Up</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate("forgetPass")}
          >
            <Text> Forgot Password ?</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: "45%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  inputContainer: {
    borderBottomColor: "#B7C3C4",
    borderBottomWidth: 1,
    width: 300,
    height: 55,
    marginBottom: 28
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1
  },

  buttonContainer: {
    height:50,
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
    color: "black"
  }
});
export default Login;
