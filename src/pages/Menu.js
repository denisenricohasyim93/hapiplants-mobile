import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity,
  ScrollView,
  Image,
  TouchableHighlight,
  Dimensions
} from 'react-native';


import { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from '../styles/SliderEntry.style';
import SliderEntry from '../components/SliderEntry';
import styles, { colors } from '../styles/index.style';
import { ENTRIES1, ENTRIES2 } from '../static/entries';
import Carousel from "react-native-carousel-slider";

const imgs = [
  "data:image/png;base64,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",
  "http://blog.visme.co/wp-content/uploads/2015/07/YouTube.png",
  "http://s3.amazonaws.com/hydroflask/media/media-library-files/logos/2017/hydro-flask/jpg/Hydro-Flask-Logo-Primary-Lockup-Black-600x200.jpg"
];


const SLIDER_1_FIRST_ITEM = 1;

import Logo from '../components/Logo';
import Form from '../components/Form';

import {Actions} from 'react-native-router-flux';
var {height, width} = Dimensions.get('window');

export default class Menu extends Component<{}> {

    constructor(props) {
        super(props);
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
            slider1Ref: null
        };
      }

      beforeChange(from, to) {
        console.log("beforeChange--->", from, to);
      }
    
      afterChange(current) {
        console.log("afterChange--->", current);
      }
    
      onPress(event, index) {
        console.log(event, index);
      }
    
      _renderItem ({item, index}) {
        return (
            <SliderEntry
              data={item}
              even={(index + 1) % 2 === 0}
            />
        );
    }

    _renderItemWithParallax ({item, index}, parallaxProps) {
        return (
            <SliderEntry
              data={item}
              even={(index + 1) % 2 === 0}
              parallax={true}
              parallaxProps={parallaxProps}
            />
        );
    }

    get example1 () {
        const { slider1ActiveSlide, slider1Ref } = this.state;

        return (
            <View style={styles.exampleContainer}>
                <Carousel
                  ref={(c) => { if (!this.state.slider1Ref) { this.setState({ slider1Ref: c }); } }}
                  data={ENTRIES1}
                  renderItem={this._renderItemWithParallax}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                  hasParallaxImages={true}
                  firstItem={SLIDER_1_FIRST_ITEM}
                  inactiveSlideScale={0.94}
                  inactiveSlideOpacity={0.7}
                  enableMomentum={false}
                  containerCustomStyle={styles.slider}
                  contentContainerCustomStyle={styles.sliderContentContainer}
                  loop={true}
                  loopClonesPerSide={2}
                  autoplay={true}
                  autoplayDelay={500}
                  autoplayInterval={3000}
                  onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
                />
                <Pagination
                  dotsLength={ENTRIES1.length}
                  activeDotIndex={slider1ActiveSlide}
                  containerStyle={styles.paginationContainer}
                  dotColor={'rgba(255, 255, 255, 0.92)'}
                  dotStyle={styles.paginationDot}
                  inactiveDotColor={colors.black}
                  inactiveDotOpacity={0.4}
                  inactiveDotScale={0.6}
                  carouselRef={slider1Ref}
                  tappableDots={!!slider1Ref}
                />
            </View>
        );
    }

    get example2 () {
        return (
            <View style={styles.exampleContainer}>
                <Text style={styles.title}>Example 2</Text>
                <Text style={styles.subtitle}>Momentum | Left-aligned</Text>
                <Carousel
                  data={ENTRIES2}
                  renderItem={this._renderItem}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                  inactiveSlideScale={1}
                  inactiveSlideOpacity={1}
                  enableMomentum={true}
                  activeSlideAlignment={'start'}
                  containerCustomStyle={styles.slider}
                  contentContainerCustomStyle={styles.sliderContentContainer}
                  removeClippedSubviews={false}
                />
            </View>
        );
    }

    // get gradient () {
    //     return (
    //         <LinearGradient
    //           colors={[colors.background1, colors.background2]}
    //           start={{ x: 1, y: 0 }}
    //           end={{ x: 0, y: 1 }}
    //           style={styles.gradient}
    //         />
    //     );
    // }

	signup() {
		Actions.signup()
	}

	render() {
        
        
        return(
            <ScrollView>
                <View style={styles2.container}>
                    <View>
                        
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <TouchableHighlight onPress={Actions.yourplant}>
                                <View style={{
                                    width: width/2, 
                                    height: height/4, 
                                    backgroundColor: 'white', 
                                    borderColor: 'brown', 
                                    borderWidth: 2,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <Image
                                    style={{width: 100, height: 100}}
                                    source={require('../images/yourplant.png')}
                                />
                                <Text>Your Plant</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={Actions.plantationtutorial}>
                                <View style={{
                                        width: width/2, 
                                        height: height/4, 
                                        backgroundColor: 'white', 
                                        borderColor: 'brown', 
                                        borderWidth: 2,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                    <Image
                                        style={{width: 100, height: 100}}
                                        source={require('../images/plantationtutorial.png')}
                                    />
                                    <Text>Plantation Tutorial</Text>
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
                                    width: width/2, 
                                    height: height/4, 
                                    backgroundColor: 'white', 
                                    borderColor: 'brown', 
                                    borderWidth: 2,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <Image
                                    style={{width: 100, height: 100}}
                                    source={require('../images/communitysharing.png')}
                                />
                                <Text>Community Sharing</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={Actions.productstorefront}>
                                <View style={{
                                        width: width/2, 
                                        height: height/4, 
                                        backgroundColor: 'white', 
                                        borderColor: 'brown', 
                                        borderWidth: 2,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                    <Image
                                        style={{width: 100, height: 100}}
                                        source={require('../images/productstorefront.png')}
                                    />
                                    <Text>Product Storefront</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                            <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <TouchableHighlight onPress={Actions.toolsmarketplace}>
                                <View style={{
                                    width: width/2, 
                                    height: height/4, 
                                    backgroundColor: 'white', 
                                    borderColor: 'brown', 
                                    borderWidth: 2,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <Image
                                    style={{width: 100, height: 100}}
                                    source={require('../images/toolsmarketplace.png')}
                                />
                                <Text>Tools Marketplace</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={Actions.profilesetting}>
                                <View style={{
                                        width: width/2, 
                                        height: height/4, 
                                        backgroundColor: 'white', 
                                        borderColor: 'brown', 
                                        borderWidth: 2,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                    <Image
                                        style={{width: 100, height: 100}}
                                        source={require('../images/profilesetting.png')}
                                    />
                                    <Text>Profile Setting</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>	
                <View>
                <Carousel
                    dataSource={imgs}
                    autoPlay={true}
                    initialSlide={0}
                    dots={false}
                    beforeChange={(from, to) => this.beforeChange(from, to)}
                    afterChange={current => this.afterChange(current)}
                    dotsClass={{ backgroundColor: "blue" }}
                    dotActiveStyle={{ backgroundColor: "red" }}
                    onPress={(event, index) => this.onPress(event, index)}
                    height={height/7.5}
                />
                </View>
            </ScrollView>
			)
	}
}

const styles2 = StyleSheet.create({
  container : {
    backgroundColor:'white',
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
