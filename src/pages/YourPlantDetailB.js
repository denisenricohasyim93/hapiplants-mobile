// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   StatusBar ,
//   TouchableOpacity,
//   ScrollView,
//   TouchableHighlight,
//   FlatList,
//   Dimensions,
//   Image
// } from 'react-native';
// import {Card, Subtitle, Caption} from '@shoutem/ui';

// import Logo from '../components/Logo';
// import Form from '../components/Form';
// import * as Progress from 'react-native-progress';

// import {Actions} from 'react-native-router-flux';
// import FAB from 'react-native-fab';
// import FontAwesome, { Icons } from 'react-native-fontawesome';


// export const ENTRIES1 = [
//     {
//         title: 'Beautiful and dramatic Antelope Canyon',
//         subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
//         illustration: 'http://i.imgur.com/UYiroysl.jpg'
//     },
//     {
//         title: 'Earlier this morning, NYC',
//         subtitle: 'Lorem ipsum dolor sit amet',
//         illustration: 'http://i.imgur.com/UPrs1EWl.jpg'
//     },
//     {
//         title: 'White Pocket Sunset',
//         subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
//         illustration: 'http://i.imgur.com/MABUbpDl.jpg'
//     },
//     {
//         title: 'Acrocorinth, Greece',
//         subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
//         illustration: 'http://i.imgur.com/KZsmUi2l.jpg'
//     },
//     {
//         title: 'The lone tree, majestic landscape of New Zealand',
//         subtitle: 'Lorem ipsum dolor sit amet',
//         illustration: 'http://i.imgur.com/2nCt3Sbl.jpg'
//     },
//     {
//         title: 'Middle Earth, Germany',
//         subtitle: 'Lorem ipsum dolor sit amet',
//         illustration: 'http://i.imgur.com/lceHsT6l.jpg'
//     }
// ];

// export const ENTRIES2 = [
//     {
//         title: 'Favourites landscapes',
//         subtitle: 'Lorem ipsum dolor sit amet',
//         illustration: 'http://i.imgur.com/SsJmZ9jl.jpg'
//     },
//     {
//         title: 'Favourites landscapes',
//         subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
//         illustration: 'http://i.imgur.com/5tj6S7Ol.jpg'
//     },
//     {
//         title: 'Favourites landscapes',
//         subtitle: 'Lorem ipsum dolor sit amet et nuncat',
//         illustration: 'http://i.imgur.com/pmSqIFZl.jpg'
//     },
//     {
//         title: 'Favourites landscapes',
//         subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
//         illustration: 'http://i.imgur.com/cA8zoGel.jpg'
//     },
//     {
//         title: 'Favourites landscapes',
//         subtitle: 'Lorem ipsum dolor sit amet',
//         illustration: 'http://i.imgur.com/pewusMzl.jpg'
//     },
//     {
//         title: 'Favourites landscapes',
//         subtitle: 'Lorem ipsum dolor sit amet et nuncat',
//         illustration: 'http://i.imgur.com/l49aYS3l.jpg'
//     }
// ];

// export default class YourPlant extends Component<{}> {

//     constructor(props) {
//         super(props);
//         this.state = {
//           pots : [],
//         };
//       }


// 	signup() {
// 		Actions.signup()
// 	}

// 	render() {
//         fetch("http://cfcdd2f9.ngrok.io//api/pot", {
//             method: "GET",
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//             },
//         })
//         .then((response) => {
//             console.log('landing here response', JSON.parse(response._bodyInit));
//             // this.state.pots = JSON.parse(response._bodyInit);
//             this.setState({
//                 pots : JSON.parse(response._bodyInit)
//             })
//             console.log('landing here pots', this.state.pots);
//         })
        
//         console.log('landing here return', this.state.pots);
//         return(
//             <View style={{backgroundColor: 'green'}}>
//             <ScrollView style={{backgroundColor: 'green'}}>
//                 <View style={{margin: 5, borderColor: 'darkbrown', borderWidth: 5, borderRadius: 15}}>
//                     <Text style={{color: 'white', textAlign: 'center'}}>Container A</Text>
//                     <View>
//                         <View
//                             style={{
//                                 flex: 0,
//                                 flexDirection: 'row',
//                                 justifyContent: 'space-between',
//                               }}
//                         >
//                             <FontAwesome>{Icons.chevronLeft}</FontAwesome>
//                             <Text style={{color: 'white', textAlign: 'center'}}>-----Pot A-----</Text>
//                             <FontAwesome>{Icons.chevronRight}</FontAwesome>
//                         </View>
//                     <ScrollView
//                     horizontal={true}
//                     >
//                     <Card style={{margin: 5, borderColor: 'brown', borderWidth: 5}}>
//                         <Image
//                         style={{
//                             width: 150,
//                             height: 150,
//                             resizeMode: Image.resizeMode.contain,
//                         }}
//                         source={{
//                             uri:
//                             'http://moziru.com/images/vegetable-clipart-single-vegetable-4.jpg' }}
//                         />
//                         <View styleName="content">
//                             <Subtitle>Plant Status : Humid</Subtitle>
//                             <Subtitle>Lamp Status  : On</Subtitle>
//                             <Caption onPress={Actions.calendaryourplant}>The Plant Has Sufficient Water</Caption></View>
//                     </Card>
//                     <Card style={{margin: 5, borderColor: 'brown', borderWidth: 5}}>
//                         <Image
//                         style={{
//                             width: 150,
//                             height: 150,
//                             resizeMode: Image.resizeMode.contain,
//                         }}
//                         source={{
//                             uri:
//                             'http://moziru.com/images/carrot-clipart-17.jpg' }}
//                         />
//                         <View styleName="content">
//                             <Subtitle>Plant Status : Humid</Subtitle>
//                             <Subtitle>Lamp Status  : On</Subtitle>
//                             <Caption onPress={Actions.calendaryourplant}>The Plant Needs Water</Caption></View>
//                     </Card>
//                     <Card style={{margin: 5, borderColor: 'brown', borderWidth: 5}}>
//                         <Image
//                         style={{
//                             width: 150,
//                             height: 150,
//                             resizeMode: Image.resizeMode.contain,
//                         }}
//                         source={{
//                             uri:
//                             'data:image/jpeg;base64,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' }}
//                         />
//                         <View styleName="content">
//                             <Subtitle>Plant Status : Humid</Subtitle>
//                             <Subtitle>Lamp Status  : On</Subtitle>
//                             <Caption onPress={Actions.calendaryourplant}>The Plant Needs Water</Caption></View>
//                     </Card>
//                     <Card style={{margin: 5, borderColor: 'brown', borderWidth: 5}}>
//                         <Image
//                         style={{
//                             width: 150,
//                             height: 150,
//                             resizeMode: Image.resizeMode.contain,
//                         }}
//                         source={{
//                             uri:
//                             'data:image/jpeg;base64,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' }}
//                         />
//                         <View styleName="content">
//                             <Subtitle>Plant Status : Humid</Subtitle>
//                             <Subtitle>Lamp Status  : On</Subtitle>
//                             <Caption onPress={Actions.calendaryourplant}>The Plant Needs Water</Caption></View>
//                     </Card>
//                     <Card style={{margin: 5, borderColor: 'brown', borderWidth: 5}}>
//                         <Image
//                         style={{
//                             width: 150,
//                             height: 150,
//                             resizeMode: Image.resizeMode.contain,
//                         }}
//                         source={{
//                             uri:
//                             'data:image/jpeg;base64,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' }}
//                         />
//                         <View styleName="content">
//                             <Subtitle>Plant Status : Humid</Subtitle>
//                             <Subtitle>Lamp Status  : On</Subtitle>
//                             <Caption onPress={Actions.calendaryourplant}>The Plant Needs Water</Caption></View>
//                     </Card>
//                     </ScrollView>
//                 </View>
//                 <View
//                             style={{
//                                 flex: 0,
//                                 flexDirection: 'row',
//                                 justifyContent: 'space-between',
//                               }}
//                         >
//                             <FontAwesome>{Icons.chevronLeft}</FontAwesome>
//                             <Text style={{color: 'white', textAlign: 'center'}}>-----Pot B-----</Text>
//                             <FontAwesome>{Icons.chevronRight}</FontAwesome>
//                         </View>
//                 <View>
//                     <ScrollView
//                     horizontal={true}
//                     >
//                     <Card style={{margin: 5, borderColor: 'brown', borderWidth: 5}}>
//                     <Image
//                     style={{
//                         width: 150,
//                         height: 150,
//                         resizeMode: Image.resizeMode.contain,
//                     }}
//                     source={{
//                         uri:
//                         'http://moziru.com/images/orange-fruit-clipart-single-fruit-1.png' }}
//                     />
//                     <View styleName="content">
//                         <Subtitle>Plant Status : Humid</Subtitle>
//                         <Subtitle>Lamp Status  : On</Subtitle>
//                         <Caption onPress={Actions.calendaryourplant}>The Plant Has Sufficient Water</Caption></View>
//                 </Card>
//                 <Card style={{margin: 5, borderColor: 'brown', borderWidth: 5}}>
//                     <Image
//                     style={{
//                         width: 150,
//                         height: 150,
//                         resizeMode: Image.resizeMode.contain,
//                     }}
//                     source={{
//                         uri:
//                         'https://www.culinaryschools.org/clipart/fruit/apple-clipart.gif' }}
//                     />
//                     <View styleName="content">
//                         <Subtitle>Plant Status : Humid</Subtitle>
//                         <Subtitle>Lamp Status  : On</Subtitle>
//                         <Caption onPress={Actions.calendaryourplant}>The Plant Needs Water</Caption></View>
//                 </Card>
//                 <Card style={{margin: 5, borderColor: 'brown', borderWidth: 5}}>
//                     <Image
//                     style={{
//                         width: 150,
//                         height: 150,
//                         resizeMode: Image.resizeMode.contain,
//                     }}
//                     source={{
//                         uri:
//                         'http://moziru.com/images/fruit-clipart-2.jpg' }}
//                     />
//                     <View styleName="content">
//                         <Subtitle>Plant Status : Humid</Subtitle>
//                         <Subtitle>Lamp Status  : On</Subtitle>
//                         <Caption onPress={Actions.calendaryourplant}>The Plant Needs Water</Caption></View>
//                 </Card>
//                 <Card style={{margin: 5, borderColor: 'brown', borderWidth: 5}}>
//                     <Image
//                     style={{
//                         width: 150,
//                         height: 150,
//                         resizeMode: Image.resizeMode.contain,
//                     }}
//                     source={{
//                         uri: 'http://clipground.com/images/a-single-piece-of-fruit-clipart-14.jpg'}}
//                     />
//                     <View styleName="content">
//                         <Subtitle>Plant Status : Humid</Subtitle>
//                         <Subtitle>Lamp Status  : On</Subtitle>
//                         <Caption onPress={Actions.calendaryourplant}>The Plant Needs Water</Caption></View>
//                 </Card>
//                 <Card style={{margin: 5, borderColor: 'brown', borderWidth: 5}}>
//                     <Image
//                     style={{
//                         width: 150,
//                         height: 150,
//                         resizeMode: Image.resizeMode.contain,
//                     }}
//                     source={{
//                         uri: 'data:image/png;base64,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'}}                    />
//                     <View styleName="content">
//                         <Subtitle>Plant Status : Humid</Subtitle>
//                         <Subtitle>Lamp Status  : On</Subtitle>
//                         <Caption onPress={Actions.calendaryourplant}>The Plant Needs Water</Caption></View>
//                 </Card>
//                     </ScrollView>
//                 </View>
//                 <View
//                             style={{
//                                 flex: 0,
//                                 flexDirection: 'row',
//                                 justifyContent: 'space-between',
//                               }}
//                         >
//                             <FontAwesome>{Icons.chevronLeft}</FontAwesome>
//                             <Text style={{color: 'white', textAlign: 'center'}}>-----Pot C-----</Text>
//                             <FontAwesome>{Icons.chevronRight}</FontAwesome>
//                         </View>
//                 <View>
//                     <ScrollView
//                     horizontal={true}
//                     >
//                     <Card style={{margin: 5, borderColor: 'brown', borderWidth: 5}}>
//                     <Image
//                     style={{
//                         width: 150,
//                         height: 150,
//                         resizeMode: Image.resizeMode.contain,
//                     }}
//                     source={{
//                         uri:
//                         'http://analisadaily.com/assets/image/news/big/2015/06/jenis-umbi-umbian-yang-baik-untuk-kesehatan-part-1-147007-1.jpg' }}
//                     />
//                     <View styleName="content">
//                         <Subtitle>Plant Status : Humid</Subtitle>
//                         <Subtitle>Lamp Status  : On</Subtitle>
//                         <Caption onPress={Actions.calendaryourplant}>The Plant Has Sufficient Water</Caption></View>
//                 </Card>
//                 <Card style={{margin: 5, borderColor: 'brown', borderWidth: 5}}>
//                     <Image
//                     style={{
//                         width: 150,
//                         height: 150,
//                         resizeMode: Image.resizeMode.contain,
//                     }}
//                     source={{
//                         uri:
//                         'http://analisadaily.com/assets/image/news/big/2015/06/jenis-umbi-umbian-yang-baik-untuk-kesehatan-part-2-147012-1.jpg' }}
//                     />
//                     <View styleName="content">
//                         <Subtitle>Plant Status : Humid</Subtitle>
//                         <Subtitle>Lamp Status  : On</Subtitle>
//                         <Caption onPress={Actions.calendaryourplant}>The Plant Needs Water</Caption></View>
//                 </Card>
//                 <Card style={{margin: 5, borderColor: 'brown', borderWidth: 5}}>
//                     <Image
//                     style={{
//                         width: 150,
//                         height: 150,
//                         resizeMode: Image.resizeMode.contain,
//                     }}
//                     source={{
//                         uri:
//                         'data:image/jpeg;base64,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'}}                    />
//                     <View styleName="content">
//                         <Subtitle>Plant Status : Humid</Subtitle>
//                         <Subtitle>Lamp Status  : On</Subtitle>
//                         <Caption onPress={Actions.calendaryourplant}>The Plant Needs Water</Caption></View>
//                 </Card>
//                 <Card style={{margin: 5, borderColor: 'brown', borderWidth: 5}}>
//                     <Image
//                     style={{
//                         width: 150,
//                         height: 150,
//                         resizeMode: Image.resizeMode.contain,
//                     }}
//                     source={{
//                         uri:
//                         'data:image/jpeg;base64,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' }}
//                     />
//                     <View styleName="content">
//                         <Subtitle>Plant Status : Humid</Subtitle>
//                         <Subtitle>Lamp Status  : On</Subtitle>
//                         <Caption onPress={Actions.calendaryourplant}>The Plant Needs Water</Caption></View>
//                 </Card>
//                 <Card style={{margin: 5, borderColor: 'brown', borderWidth: 5}}>
//                     <Image
//                     style={{
//                         width: 150,
//                         height: 150,
//                         resizeMode: Image.resizeMode.contain,
//                     }}
//                     source={{
//                         uri:
//                         'https://cdn.pixabay.com/photo/2015/03/02/21/06/roots-656563_960_720.jpg'}} />
//                     <View styleName="content">
//                         <Subtitle>Plant Status : Humid</Subtitle>
//                         <Subtitle>Lamp Status  : On</Subtitle>
//                         <Caption onPress={Actions.calendaryourplant}>The Plant Needs Water</Caption></View>
//                 </Card>
//                     </ScrollView>
//                 </View>
                
//                 </View>
//             </ScrollView>
//             <FAB 
//             buttonColor="red" 
//             iconTextColor="#FFFFFF" 
//             onClickAction={() => {console.log("FAB pressed")}} 
//             visible={true} 
//             iconTextComponent={<FontAwesome>{Icons.plus}</FontAwesome>} 
//         />
//         </View>
// 			)
// 	}
// }

// const styles = StyleSheet.create({
//   container : {
//     backgroundColor:'#455a64',
//     flex: 1,
//     alignItems:'center',
//     justifyContent :'center'
//   },
//   signupTextCont : {
//   	flexGrow: 1,
//     alignItems:'flex-end',
//     justifyContent :'center',
//     paddingVertical:16,
//     flexDirection:'row'
//   },
//   signupText: {
//   	color:'rgba(255,255,255,0.6)',
//   	fontSize:16
//   },
//   signupButton: {
//   	color:'#ffffff',
//   	fontSize:16,
//   	fontWeight:'500'
//   }
// });

import {StyleSheet, View, Text, ScrollView, TouchableHighlight} from 'react-native';
import React, {Component} from 'react';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';
import {Actions} from 'react-native-router-flux';
import {type} from '../components/Container';

export default class YourPlantDetailB extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log('landing here yourplantdetail type', type);
        return (
            <ScrollView style={{flex:1}}>
                <Text>Container B</Text>
                <IndicatorViewPager
                    style={{height:480, margin: 10}}
                    indicator={this._renderDotIndicator()}
                >
                    <View style={{backgroundColor:'lightgreen', borderColor: 'black', borderRadius: 10, borderWidth: 5, flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',}}>
                        <TouchableHighlight onPress={Actions.yourplantdetail} >
                            <Text>Pot A</Text>
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