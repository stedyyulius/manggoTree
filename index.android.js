/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {connect,Provider} from 'react-redux'

import {StackNavigator} from 'react-navigation'

import store from './android/store/store.js'
import Trees from './android/components/Trees.js'
import DeadTree from './android/components/DeadTree.js'
import {getName} from './android/actions/index.js'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button
} from 'react-native';

export default class livecodings extends Component {
  constructor(props){
    super(props)
    this.state={
      name:"",
      tree:""
    }
  }
  static navigationOptions = {
    title: "Welcome"
  }
  render() {
    return (
      <Provider store={store}>
      <View style={styles.container}>
        <Text style={styles.instructions}>
          Your Name
        </Text>
        <TextInput
          ref="name"
          onChangeText={(name) => this.setState({name})}
        />
        <Text style={styles.instructions}>
          TREE NAME
        </Text>
        <TextInput style={styles.welcome}
          ref="tree"
          onChangeText={(tree) => this.setState({tree})}
        />
        <Button
          onPress={()=>this.login()}
          title="Login"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </Provider>
    );
  }

login(){
  this.props.navigation.navigate("Trees", {name: this.state.name,tree:this.state.tree,store:store})
}

}

const mapStateToProps = (state) =>{

}

const mapDispatchToProps = ()=>{
  return{
  getName: (name) => dispatch(getName(name))
  }
}

const App = StackNavigator({
  Welcome: {screen:livecodings},
  Trees: { screen: Trees },
  DeadTree: {screen: DeadTree}
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});

AppRegistry.registerComponent('livecodings', () => App);
