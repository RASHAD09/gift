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
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';


 class ForgetPass extends Component {

  constructor(props) {
    super(props);
    state = {
      phone   : '',
      password: '',
    }
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  render() {
    return (
      <ScrollView>
      <View style={styles.container}> 

      <View style={styles.fors}>
      <Image  style={styles.imagescreen}
       source={require('../../assets/icons/BarTabs/ForgotPassword.png')}
       
       />
      <Text style={{color:'black',fontSize:24}}>Forgot Password?</Text>
      </View>
      
      <View style={styles.inputContainer}>
                <Text>Phone</Text>
      <TextInput style={styles.inputs}
          //  placeholder="Phone Number"
          keyboardType="phone-pad"
          onChangeText={(phone) => this.setState({phone})} 
          />
      
    </View>
        
        
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}>
          <Text style={styles.loginText}>Reset Pasword</Text>
        </TouchableHighlight>

      <View style={styles.container}>

                    </View>
      </View>
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fors:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:"35%",
    paddingBottom:'10%'
    },
  inputContainer: {
      borderBottomColor: '#B7C3C4',
      borderBottomWidth: 1,
      width:300,
      height:55,
      marginBottom:65,
  },
  inputs:{
      height:45,
      borderBottomColor:'#B7C3C4',
  },

  buttonContainer: {
    height:'13%',
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
    color: 'black',
  },
  imagescreen:{

    justifyContent:'center',
    alignItems:'center', 
    padding:25,
    width:102,
    height:110,
  }
  
});


export default ForgetPass;
