import {StyleSheet, View, Text, ScrollView, TouchableHighlight, Image} from 'react-native';
import React, {Component} from 'react';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';
import {Actions} from 'react-native-router-flux';

export var type = '';
export default class Container extends Component {
    constructor(props) {
        super(props);
        type = this.props.type
        console.log('landing here container type', type);
    }
    render() {
        if (this.props.type === 'A') {
            return (
            <View style={{backgroundColor:'green', borderColor: 'black', borderRadius: 10, borderWidth: 5, flex: 0,
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',}}>
                            <Image
                        style={{
                            width: 250,
                            height: 300,
                            resizeMode: Image.resizeMode.contain,
                            borderColor: 'black',
                            borderRadius: 10,
                            borderWidth: 5,
                            marginTop: 40
                        }}
                        source={require('../images/containera.png')}
                        />
                            <TouchableHighlight onPress={Actions.yourplantdetaila}  >
                                <Text>Container A</Text>
                            </TouchableHighlight >
            </View> 
            );
        } else if (this.props.type === 'B') {
            return (
                <View style={{backgroundColor:'green', borderColor: 'black', borderRadius: 10, borderWidth: 5, flex: 0,
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',}}>
                            <Image
                        style={{
                            width: 250,
                            height: 250,
                            resizeMode: Image.resizeMode.contain,
                            borderColor: 'black',
                            borderRadius: 10,
                            borderWidth: 5,
                            marginTop: 40
                        }}
                        source={require('../images/containerb.png')}
                        />
                            <TouchableHighlight onPress={Actions.yourplantdetailb}  >
                                <Text>Container B</Text>
                            </TouchableHighlight >
                </View> 
            )
        } else if (this.props.type === 'C') {
            return (
                <View style={{backgroundColor:'green', borderColor: 'black', borderRadius: 10, borderWidth: 5, flex: 0,
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',}}>
                                <Image
                        style={{
                            width: 200,
                            height: 320,
                            resizeMode: Image.resizeMode.contain,
                            borderColor: 'black',
                            borderRadius: 10,
                            borderWidth: 5,
                            marginTop: 40
                        }}
                        source={require('../images/containerc.png')}
                        />
                            <TouchableHighlight onPress={Actions.yourplantdetailc}  >
                                <Text>Container C</Text>
                            </TouchableHighlight >
                </View> 
            )
        }
    }

    _renderTitleIndicator() {
        return <PagerTitleIndicator titles={['one', 'two', 'three']} />;
    }

    _renderDotIndicator() {
        return <PagerDotIndicator pageCount={3} />;
    }
    
    _renderTabIndicator() {
        let tabs = [{
                text: 'Home',
                // iconSource: require('../imgs/ic_tab_home_normal.png'),
                // selectedIconSource: require('../imgs/ic_tab_home_click.png')
            },{
                text: 'Message',
                // iconSource: require('../imgs/ic_tab_task_normal.png'),
                // selectedIconSource: require('../imgs/ic_tab_task_click.png')
            },{
                text: 'Profile',
                // iconSource: require('../imgs/ic_tab_my_normal.png'),
                // selectedIconSource: require('../imgs/ic_tab_my_click.png')
        }];
        return <PagerTabIndicator tabs={tabs} />;
    }

}