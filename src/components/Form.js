import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity ,
  Alert,
  Image,
  Linking,
  Platform,
  ScrollView
} from 'react-native';
import Menu from '../pages/Menu';
import Logo from './Logo';

import {Actions} from 'react-native-router-flux';
import { SocialIcon } from 'react-native-elements';
import Icon from 'react-native-fontawesome';
import { loginWithFacebook, openURL } from '../helpers';
// var SafariView = require('react-native-safari-view');

export default class Form extends Component<{}> {

  constructor(props) {
    super(props);
    this.state = {
      email : '',
      password: '',
      apakahlogin : 'false',
      user : undefined
    };
  }


  // Set up Linking
  componentDidMount() {
    // Add event listener to handle OAuthLogin:// URLs
    Linking.addEventListener('url', this.handleOpenURL);
    // Launched from an external URL
    Linking.getInitialURL().then((url) => {
      if (url) {
        this.handleOpenURL({ url });
      }
    });
  };

  componentWillUnmount() {
    // Remove event listener
    Linking.removeEventListener('url', this.handleOpenURL);
  };

  handleOpenURL = ({ url }) => {
    // Extract stringified user string out of the URL
    const [, user_string] = url.match(/user=([^#]+)/);
    this.setState({
      // Decode the user string and parse it into JSON
      user: JSON.parse(decodeURI(user_string))
    });
    if (Platform.OS === 'ios') {
      // SafariView.dismiss();
    }
  };

  // Handle Login with Facebook button tap
  // loginWithFacebook = () => this.openURL('http://localhost:3000/auth/facebook');
  // Handle Login with Google button tap
  loginWithGoogle = () => this.openURL('http://localhost:3000/auth/google');

  // Open URL in a browser
  // openURL = (url) => {
  //   // Use SafariView on iOS
  //   if (Platform.OS === 'ios') {
  //     SafariView.show({
  //       url: url,
  //       fromBottom: true,
  //     });
  //   }
  //   // Or Linking.openURL on Android
  //   else {
  //     Linking.openURL(url);
  //   }
  // };


  handleInputChangeEmail = (value) => {
    this.setState({ email: value });
  };

  handleInputChangePassword = (value) => {
    this.setState({ password: value });
  };

  islogin = () => {
  fetch('http://cddcc4fd.ngrok.io/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      })
    })
    .then((response) => {
      console.log(response);
      if ((JSON.parse(response._bodyInit).success === true) && (JSON.parse(response._bodyInit).message !== 'You email or password incorrect!')) {
        Alert.alert(
          'Login Alert',
          'You are sucessfully login',
          [
            {text: 'OK', onPress: Actions.menu},
          ],
          { cancelable: false }
        )
      } else {
        Alert.alert(
          'Login Alert',
          'You are failed to login',
          [
            {text: 'Try Again', onPress: Actions.login},
          ],
          { cancelable: false }
        )
      }
    })
  }

  issignup = () => {
    fetch('http://cddcc4fd.ngrok.io/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: 'username',
        email: this.state.email,
        password: this.state.password,
      })
    })
    .then((response) => {
      console.log(response);
      if (JSON.parse(response._bodyInit).success) {
        Alert.alert(
          'Register Alert',
          'You are sucessfully register',
          [
            {text: 'OK', onPress: Actions.menu},
          ],
          { cancelable: false }
        )
      } else {
        Alert.alert(
          'Register Alert',
          'You are failed to register',
          [
            {text: 'Try Again', onPress: Actions.signup},
          ],
          { cancelable: false }
        )
      }
    })
  }

	render(){
    const { user } = this.state;
    console.log('landing here user', user);
		return(
      user === undefined ? (
        <View style={styles.container}>
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='brown' 
              placeholder="Email"
              placeholderTextColor = "brown"
              selectionColor="#fff"
              keyboardType="email-address"
              onSubmitEditing={()=> this.password.focus()}
              onChangeText={emailText => this.handleInputChangeEmail(emailText)}
              value={this.state.email}
              />
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='brown' 
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor = "brown"
              ref={(input) => this.password = input}
              onChangeText={passwordText => this.handleInputChangePassword(passwordText)}
              value={this.state.password}
              />
            {this.props.type === 'Login' ? (
              <View>
                <TouchableOpacity style={styles.button} onPress={Actions.menu}>
                  <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>    
                <TouchableOpacity 
                  style={styles.button} 
                  onPress={
                     loginWithFacebook
                  }>
                  <Text style={styles.buttonText}>Login With FB</Text>
                </TouchableOpacity>
                </View>
            ) : this.props.type === 'Signup' ? (
              <View>
                <TouchableOpacity style={styles.button} onPress={this.issignup}>
                  <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>    
                <TouchableOpacity style={styles.button} onPress={loginWithFacebook}>
                  <Text style={styles.buttonText}>Signup With FB</Text>
                </TouchableOpacity>
              </View>
            ) : this.props.type === 'Menu' ? (
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Menu</Text>
              </TouchableOpacity>    
            ) : <View />}           
  		</View>
      ) : (
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Text>You are successfully login</Text>
          <Text onPress={Actions.menu}>Click Here to menu</Text>
        </View>
      )       
		)
	}
}
const iconStyles = {
  borderRadius: 10,
  iconStyle: { paddingVertical: 5 },
};
const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
  },

  inputBox: {
    width:300,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'brown',
    marginVertical: 10
  },
  button: {
    width:300,
    backgroundColor:'#1c313a',
     borderRadius: 25,
      margin: 10,
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  },
  buttons: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 20,
    marginBottom: 30,
  },
  signupTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  signupText: {
  	color:'rgba(255,255,255,0.6)',
  	fontSize:16
  },
  signupButton: {
  	color:'#ffffff',
  	fontSize:16,
  	fontWeight:'500'
  }
  
});