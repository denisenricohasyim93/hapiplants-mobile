import {StyleSheet, View, Text, ScrollView, TouchableHighlight} from 'react-native';
import React, {Component} from 'react';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';
import {Actions} from 'react-native-router-flux';
import {type} from '../components/Container';

export default class YourPlantDetailA extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log('landing here yourplantdetail type', type);
        return (
            <ScrollView style={{flex:1}}>
                <Text>Container A</Text>
                <IndicatorViewPager
                    style={{height:480, margin: 10}}
                    indicator={this._renderDotIndicator()}
                >
                    <View style={{backgroundColor:'lightgreen', borderColor: 'black', borderRadius: 10, borderWidth: 5, flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',}}>
                        <TouchableHighlight onPress={Actions.tanamana} >
                            <Text>Pot A</Text>
                        </TouchableHighlight >
                    </View>
                    <View style={{backgroundColor:'green', borderColor: 'black', borderRadius: 10, borderWidth: 5, flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',}}>
                        <TouchableHighlight onPress={Actions.tanamanb} >
                            <Text>Pot B</Text>
                        </TouchableHighlight >
                    </View>
                    <View style={{backgroundColor:'darkgreen', borderColor: 'black', borderRadius: 10, borderWidth: 5, flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',}}>
                        <TouchableHighlight onPress={Actions.tanamanc} >
                            <Text>Pot C</Text>
                        </TouchableHighlight >
                    </View>
                </IndicatorViewPager>
            </ScrollView>
        );
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