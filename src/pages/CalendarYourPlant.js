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

// import LinearGradient from 'react-native-linear-gradient';
import { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from '../styles/SliderEntry.style';
import SliderEntry from '../components/SliderEntry';
import styles, { colors } from '../styles/index.style';
import { ENTRIES1, ENTRIES2 } from '../static/entries';
import Carousel from "react-native-carousel-slider";
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

const imgs = [
  "https://4.bp.blogspot.com/-IeClwva9nPA/WQqzR1MPnnI/AAAAAAAABDc/N-mu2U8rydsX8UI-zuZiatA4yAvxbBpCACLcB/s640/Free%2BDownload%2BGojek%2BLogo%2Bvector%2BCorelDraw%2B%2528cdr%2529%2BIllustrator%2B%2528ai%2529%2BEPS%2BPNG%2BSVG%2BPDF.png",
  "https://img00.deviantart.net/afd8/i/2013/148/d/2/pokemon_google_logo___installation_guide__by_albusonita-d66w5fq.png",
  "https://4.bp.blogspot.com/-IeClwva9nPA/WQqzR1MPnnI/AAAAAAAABDc/N-mu2U8rydsX8UI-zuZiatA4yAvxbBpCACLcB/s640/Free%2BDownload%2BGojek%2BLogo%2Bvector%2BCorelDraw%2B%2528cdr%2529%2BIllustrator%2B%2528ai%2529%2BEPS%2BPNG%2BSVG%2BPDF.png"
];


const SLIDER_1_FIRST_ITEM = 1;

import Logo from '../components/Logo';
import Form from '../components/Form';

import {Actions} from 'react-native-router-flux';

export default class CalendarYourPlant extends Component<{}> {

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
                <Calendar
                    // Specify style for calendar container element. Default = {}
                    style={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    height: 800,
                    width: 400
                    }}
                    // Specify theme properties to override specific styles for calendar parts. Default = {}
                    theme={{
                    backgroundColor: '#ffffff',
                    calendarBackground: '#ffffff',
                    textSectionTitleColor: '#b6c1cd',
                    selectedDayBackgroundColor: '#00adf5',
                    selectedDayTextColor: '#ffffff',
                    todayTextColor: '#00adf5',
                    dayTextColor: '#2d4150',
                    textDisabledColor: '#d9e1e8',
                    dotColor: '#00adf5',
                    selectedDotColor: '#ffffff',
                    arrowColor: 'orange',
                    monthTextColor: 'blue',
                    textDayFontSize: 16,
                    textMonthFontSize: 16,
                    textDayHeaderFontSize: 16
                    }}
                />
                </View>
            </ScrollView>
			)
	}
}

const styles2 = StyleSheet.create({
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
