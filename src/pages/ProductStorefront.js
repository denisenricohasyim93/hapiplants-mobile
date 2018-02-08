import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity,
  ScrollView,
  Image,
  TouchableHighlight
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';
import * as Progress from 'react-native-progress';

import {Actions} from 'react-native-router-flux';

export default class ProductStorefront extends Component<{}> {

	signup() {
		Actions.signup()
	}

	render() {
        
        
        return(
            <ScrollView>
                <View style={styles.container}>
                    <View>
                        
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <TouchableHighlight onPress={Actions.yourplant}>
                                <View style={{
                                    width: 150, 
                                    height: 173, 
                                    backgroundColor: 'green', 
                                    borderColor: 'black', 
                                    borderWidth: 0,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <Image
                                    style={{width: 120, height: 100}}
                                    source={require('../images/Tomato_clipart.png')}
                                />
                                <Text>tomatoes</Text>
                                <Text>$1</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={Actions.plantationtutorial}>
                                <View style={{
                                        width: 120, 
                                        height: 173, 
                                        backgroundColor: 'green', 
                                        borderColor: 'black', 
                                        borderWidth: 0,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                    <Image
                                        style={{width: 150, height: 100}}
                                        source={require('../images/Tomato_clipart.png')}
                                    />
                                    <Text>tomatoes</Text>
                                    <Text>$1</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={Actions.productstorefront}>
                                <View style={{
                                        width: 150, 
                                        height: 170, 
                                        backgroundColor: 'green', 
                                        borderColor: 'black', 
                                        borderWidth: 0,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                    <Image
                                        style={{width: 120, height: 100}}
                                        source={require('../images/Tomato_clipart.png')}
                                    />
                                    <Text>tomatoes</Text>
                                    <Text>$1</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <TouchableHighlight onPress={Actions.communitysharing}>
                                <View style={{
                                    width: 150, 
                                    height: 170, 
                                    backgroundColor: 'green', 
                                    borderColor: 'black', 
                                    borderWidth: 0,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <Image
                                    style={{width: 120, height: 100}}
                                    source={require('../images/Tomato_clipart.png')}
                                />
                                <Text>tomatoes</Text>
                                <Text>$1</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={Actions.productstorefront}>
                                <View style={{
                                        width: 120, 
                                        height: 170, 
                                        backgroundColor: 'green', 
                                        borderColor: 'black', 
                                        borderWidth: 0,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                    <Image
                                        style={{width: 120, height: 100}}
                                        source={require('../images/Tomato_clipart.png')}
                                    />
                                    <Text>tomatoes</Text>
                                    <Text>$1</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={Actions.productstorefront}>
                                <View style={{
                                        width: 150, 
                                        height: 170, 
                                        backgroundColor: 'green', 
                                        borderColor: 'black', 
                                        borderWidth: 0,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                    <Image
                                        style={{width: 120, height: 100}}
                                        source={require('../images/Tomato_clipart.png')}
                                    />
                                    <Text>tomatoes</Text>
                                    <Text>$1</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>	
                <View style={{
                  backgroundColor: 'green',
                  flex: 1,
                  height: 200,
                  width: 400,
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                  <Text/>
                </View>
            </ScrollView>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#455a64',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
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
