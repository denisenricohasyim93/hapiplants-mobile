import SortableListView from 'react-native-sortable-listview'
import { 
  Container, 
  Header, 
  Item, 
  Input, 
  Icon, 
  Button, 
  Text, 
  Content, 
  Card, 
  CardItem, 
  Body,
  DeckSwiper,
  Thumbnail,
  Left
} from 'native-base';
let React = require('react')
import FAB from 'react-native-fab'
import FontAwesome, { Icons } from 'react-native-fontawesome';
let { View, TouchableHighlight, Image, StyleSheet, ScrollView, ActivityIndicator } = require('react-native')


  export default class YourPlant extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          pots : {},
          loading:true
        };
      }

    componentDidMount() {
        fetch("http://private-a54187-v1pothappiplants.apiary-mock.com/api/v1/pots", {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
        .then((response) => {
            console.log('landing here response', response);
            console.log('landing here json.parse response', JSON.parse(response._bodyInit));
            // this.state.pots = JSON.parse(response._bodyInit);
            this.setState({
                pots : JSON.parse(response._bodyInit),
                loading: false
            })
            console.log('landing here pots data', this.state.pots.data);
        })
    }

    render() {
      if (!this.state.loading) {
        let list = this.state.pots.data.map((innerArray, i) => {
            return (
                <View>
                    
                    <Text>ID                : {innerArray.id}</Text>
                    <Text>PLANT_LENGTH      : {innerArray.attributes.plant_length}</Text>
                    <Text>SOIL_SENSOR_VALUE : {innerArray.attributes.soil_sensor_value}</Text>
                    <Text>LAMP_STATUS       : {innerArray.attributes.lamp_status}</Text>
                </View>
            )
        })
        return (
            // <View>
            //     {list}
            // </View>
            <Container>
                <View>
                <DeckSwiper
                    dataSource={this.state.pots.data}
                    renderItem={(item) =>
                    <ScrollView>
                        <Card style={{ elevation: 3 }}>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwFogmoqorCL-fRpN5i74u5NgaddmgycTiKNHm_SSOnh-vAmjb5Q'}} />
                                    <Body>
                                    <Text>{item.id}</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody>
                                <Image style={{ height: 200, flex: 1 }} source={{uri: 'http://nswactbaptists.org.au/wp-content/uploads/sites/19/2015/06/BA-Website-Small-Plant.jpg'}} />
                            </CardItem>
                            <CardItem style={{margin: 0}}>
                                {/* <Icon name="heart" style={{ color: '#ED4A6A' }} /> */}
                                <Text>Plant Length      : {item.attributes.plant_length} CM</Text>
                            </CardItem>
                            
                            <CardItem style={{margin: 0}}>
                                {/* <Icon name="heart" style={{ color: '#ED4A6A' }} /> */}
                                { 
                                  item.attributes.soil_sensor_value < 1.326
                                    ? <Text>The Plant is Dry and Need Watering</Text>
                                    :  item.attributes.soil_sensor_value < 3.095
                                        ? <Text>The Plant is Humid</Text>
                                        : <Text>The Plant is Wet and Has Sufficient Water</Text> 
                                }
                                {/* <Text>SOIL_SENSOR_VALUE : {item.attributes.soil_sensor_value}</Text> */}
                            </CardItem>
                            <CardItem style={{margin: 0}}>
                                {/* <Icon name="heart" style={{ color: '#ED4A6A' }} /> */}
                                {/* <Text>LAMP_STATUS       : {item.attributes.lamp_status}</Text> */}
                                { 
                                  item.attributes.lamp_status === 0
                                    ? <Text>The Lamp is OFF</Text>
                                    :  <Text> The Lamp is ON</Text>
                                }
                            </CardItem>
                        </Card>
                    </ScrollView>
                    }
                />
                </View>
            </Container>
        )
      } else {
        return (
            <View style={[styles.container, styles.horizontal]}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        )
      }
    }
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    },
    content:{
      margin:10
    },
    card: {
      backgroundColor:'#ffffff',
      margin: 30
    },
    imageItem: {
      width:80,
      height:80,
      borderRadius:50
    },
    imageItemModal: {
      width:305,
      height:150,
      marginTop:10
    },
    textTitle: {
      fontSize: 12,
      fontWeight: 'bold', 
      marginBottom: 5,
      fontFamily:'Arial',
      color:'#202021',
      marginTop:10
    },
    textDescryption: {
      fontSize: 10,
      fontFamily:'Arial',
      color:'#767677'
    },
    textDescryptionModal: {
      fontSize: 12,
      fontFamily:'Arial',
      color:'#767677'
    },
    textDetails: {
      textAlign: 'right',
      color:'#33abf9',
      marginRight:10,
      fontSize:12,
      fontWeight: 'bold'
    },
    mainModal: {
      marginTop:10,
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent'
    },
    secondaryModal: {
      width: 350,
      height: 385,
      backgroundColor: 'white', 
      paddingLeft: 20,
      paddingRight:20,
      borderWidth: 2, 
      borderColor: '#33abf9',
    },
    secondaryModalAdd: {
      width: 350,
      height: 375,
      backgroundColor: 'white', 
      paddingLeft: 20,
      paddingRight:20,
      borderWidth: 2, 
      borderColor: '#33abf9',
    },
    bodyModal: {
      height: 320,
    },
    bodyModalAdd: {
      height: 300,
    },
    buttonClaim: {
      height:30,
      margin : 5,
      borderRadius: 20,
      backgroundColor:'#33abf9',
      marginVertical: 10,
      paddingVertical: 13
    },
    buttonExit: {
      height:30,
      margin : 5,
      borderRadius: 20,
      backgroundColor:'#33abf9',
      marginVertical: 10,
      paddingVertical: 13
    },
    buttonRow: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20
    }
  });