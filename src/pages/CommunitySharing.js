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
  Body
} from 'native-base';
let React = require('react')
import FAB from 'react-native-fab'
import FontAwesome, { Icons } from 'react-native-fontawesome';
let { View, TouchableHighlight, Image, StyleSheet, ScrollView } = require('react-native')

let data = {
  hello: { 
    image : 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    text: 'world',
    description: 'lorem ipsum dolor sit amet' },
  abc: { 
    image : 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    text: 'world',
    description: 'lorem ipsum dolor sit amet' },
  def: { 
    image : 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    text: 'world',
    description: 'lorem ipsum dolor sit amet' },
  ghi: { 
    image : 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    text: 'world',
    description: 'lorem ipsum dolor sit amet' },
  jkl: { 
    image : 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    text: 'world',
    description: 'lorem ipsum dolor sit amet' },
  lmn: { 
    image : 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    text: 'world',
    description: 'lorem ipsum dolor sit amet' },
  opq: { 
    image : 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    text: 'world',
    description: 'lorem ipsum dolor sit amet' },
}

let order = Object.keys(data) //Array of keys

class RowComponent extends React.Component {
  render() {
    return (
      <TouchableHighlight
        underlayColor={'#eee'}
        style={{
          paddingHorizontal: 10,
          backgroundColor: '#F8F8F8',
          borderBottomWidth: 1,
          borderColor: '#eee',
        }}
        {...this.props.sortHandlers}
      >
        <Card flexDirection='row'>
            <View style={{flex: 1}}>
              <Image
                style={styles.imageItem}
                source={{uri: this.props.data.image}} />
            </View>
            <View style={{flex: 3, flexDirection: 'column'}}>
              <Text style={styles.textTitle}>
                {this.props.data.text}
              </Text>
              <Text style={styles.textDescryption}>
                {this.props.data.description}
              </Text>
              <TouchableHighlight onPress={() => {
                  this.setModalVisible(!this.state.modalVisible)
                }}>
                <Text style={styles.textDetails}>
                  Detail
                </Text>
              </TouchableHighlight>
            </View>
          </Card>
      </TouchableHighlight>
    )
  }
}

export default class CommunitySharing extends React.Component {
  render() {
    return (
      <ScrollView style={{height: 600}}>
        <SortableListView
          style={{ flex: 1 }}
          data={data}
          order={order}
          onRowMoved={e => {
            order.splice(e.to, 0, order.splice(e.from, 1)[0])
            this.forceUpdate()
          }}
          renderRow={row => <RowComponent data={row} />}
        />
        <FAB 
          buttonColor="red" 
          iconTextColor="#FFFFFF" 
          onClickAction={() => {console.log("FAB pressed")}} 
          visible={true} 
          iconTextComponent={<FontAwesome>{Icons.plus}</FontAwesome>} 
          />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
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