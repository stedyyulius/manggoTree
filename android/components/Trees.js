import React,{Component} from 'react'
import {connect,Provider} from 'react-redux'

import store from '../store/store.js'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  Image
} from 'react-native';

import {grow} from '../actions/index.js'

class Trees extends Component{
  static navigationOptions = {
    title: "Tree"
  }
  constructor(props){
    super(props)
    this.state={
      tree:{
        fruits:0,
        age:0,
        maxAge:10
      }
    }
  }
  render(){
    return(
      <Provider store={store}>
      <View style={styles.container}>
        <Text style={styles.instructions}> {this.props.tree}</Text>
        <Text style={styles.instructions}> {this.state.tree.fruits}</Text>
          {(this.state.tree.age < 3)
          ?<Image
            source ={{uri:"https://keithcraft.org/wp-content/uploads/sites/3/2014/10/new-seeds.jpg"}}
            style={{width:300,height:300,marginTop:20}}/>
          : (this.state.tree.age < 6)
          ? <Image
            source ={{uri:"https://previews.123rf.com/images/smit/smit0906/smit090600270/5055044-small-tree-isolated-on-white-Stock-Photo.jpg"}}
            style={{width:300,height:300,marginTop:20}}/>
          : (this.state.tree.age < 9)
          ? <Image
            source ={{uri:"https://vignette4.wikia.nocookie.net/mysingingmonsters/images/5/5e/Plant_Island_Medium_Tree.png/revision/latest?cb=20121204213743"}}
            style={{width:300,height:300,marginTop:20}}/>
          : (this.state.tree.age === 12)
          ? <Image
            source ={{uri:"http://previews.123rf.com/images/fleyeing/fleyeing1005/fleyeing100500013/6977749-Exotic-lone-adult-tree-on-an-Asian-hilltop-near-a-park--Stock-Photo.jpg"}}
            style={{width:300,height:300,marginTop:20}}/>
          }
        <Button
          onPress={()=>this.grow(this.state.tree)}
          title="Grow"
          color="#841584"
          accessibilityLabel=""
        />
        <Button
          onPress={()=>this.harvest()}
          title="Harvest"
          color="#841584"
          accessibilityLabel=""
        />
      </View>
      </Provider>
    )
  }

  grow(prevTree){
    const newTree ={
      age: prevTree.age + 1,
      fruits: prevTree.fruits + Math.floor(Math.random()* 5),
      maxAge: 10
    }
    this.setState({
      tree: newTree
    })
  }

  harvest(){

  }

  componentWillMount(){
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 50
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});

const mapStateToProps = (state) =>{
  return{
    tree: state.tree
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    grow: (prevTree) => dispatch(grow(prevTree))
  }
}

export default Trees
