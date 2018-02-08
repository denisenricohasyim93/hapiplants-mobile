import React, { Component } from 'react';
import { TextField } from 'react-native-material-textfield';
import { View } from 'react-native';
import { Button, Text }from 'native-base';
import { Actions } from 'react-native-router-flux';
 
export default class ProfileSetting extends Component {
  state = {
    phone: '',
    firstName : '',
    lastName : ''
  };

  componentWillMount() {
      fetch('http://localhost/~a/belajarflight', {
      method: 'GET',
    })
    .then((response) => {
      console.log('landing here response express js', response);
      console.log('landing here response ', JSON.parse(response._bodyInit));
      this.setState({
        // Decode the user string and parse it into JSON
        firstName: (JSON.parse(response._bodyInit)[0].first_name),
        lastName: (JSON.parse(response._bodyInit)[0].last_name)
      });
      console.log('landing here name', this.state.firstName, ' ', this.state.lastName);
    })
  }
 
  render() {
    let { phone } = this.state;

    console.log('landing here profile setting');

    console.log()
 
    return (
      <View style={{margin: 20}}>
        <TextField
          label=''
          value={this.state.firstName}
          onChangeText={ (phone) => this.setState({ phone }) }
        />
        <TextField
          label=''
          value={this.state.lastName}
          onChangeText={ (phone) => this.setState({ phone }) }
        />
        <TextField
          label='Country'
          value={phone}
          onChangeText={ (phone) => this.setState({ phone }) }
        />
        <TextField
          label='City'
          value={phone}
          onChangeText={ (phone) => this.setState({ phone }) }
        />
        <TextField
          label='Community'
          value={phone}
          onChangeText={ (phone) => this.setState({ phone }) }
        />  
        <Button block dark onPress={Actions.login}>
            <Text>Logout</Text>
        </Button>     
      </View>
    );
  }
}