import React,{Component} from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import {setBankName} from '../redux/actions/detailsActions';
import PropTypes from 'prop-types';

class Page3 extends Component {
  
 render(){
  console.log(this.props.data.detailsReducer.bank)
    return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}>
          <Text>Welcome to Page3</Text>
          <Text>{this.props.data.detailsReducer.bank}</Text>
          <Text>{this.props.data.nameReducer.name}</Text>
        </View>
      )
 }
  
}

const mapStateToProps=state=>{
    return{ 
        data:state,
    }
}

export default connect(mapStateToProps,{setBankName})(Page3)
