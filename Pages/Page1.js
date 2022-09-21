import React,{Component} from 'react';
import { Text, View ,TextInput,StyleSheet,TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import detailsReducer from '../redux/reducers/detailsReducer';
import {setBankName} from '../redux/actions/detailsActions';
import { setAgentName } from '../redux/actions/detailsActions';
import PropTypes from 'prop-types';

class Page1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          bank: "sbi"
        };
        this.onChangeBank = this.onChangeBank.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
      }
      
  onChangeBank(text) {
// this.props.setBankName(text);
// dispatch(setBankName("Hello"));
this.props.setBankName({bank:text});
  console.log(this.props.data)
  }
  onChangeName(text) {
  console.log(text)
    this.props.setAgentName({name:text});
      }

    render(){
      console.log(this.props.data)

        return (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
              }}>
              <Text>Bank: {this.props.data.bank}</Text>
              <Text>Agent: {this.props.data.name}</Text>
              <TextInput          
            style={{width: 140, height: 40, borderWidth: 1}}
            onChangeText={(text)=>this.onChangeBank(text)}
           />
           <TextInput          
            style={{width: 140, height: 40, borderWidth: 1}}
            onChangeText={(text)=>this.onChangeName(text)}
           />
           <TouchableOpacity>
            <Text style = {styles.button} onPress={()=>{this.props.navigation.navigate('Page2')}}>
               Send to store
            </Text>
         </TouchableOpacity>
            </View>
          )
    }
  
}
const mapStateToProps=state=>{
    return{ 
        data:state,
    }
}

export default connect(mapStateToProps,{setBankName,setAgentName})(Page1)


const styles = StyleSheet.create ({
    container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
    },
    button: {
       borderWidth: 1,
       padding: 5,
       borderColor: 'black',
       color:'red',
       margin:5
    }
 })