import React,{Component} from 'react'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
  Modal
} from 'react-native';

class DeadTree extends Component {
  static navigationOptions = {
    title: "Dead tree"
  }
  constructor(props){
    super(props)
  }
  render(){
    return(
      <View>
        <Text>Your Tree Has Reached His Max Age,and dead</Text>
          <Image
            source ={{uri:"http://img05.deviantart.net/23aa/i/2013/069/e/5/dead_tree_04_by_gd08-d5xl4sv.png"}}
            style={{width:300,height:250,marginTop:20}}/>
      </View>
    )
  }
}

export default DeadTree
