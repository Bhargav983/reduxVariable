import React,{Component,useState,useEffect} from 'react';
import { Text, View,TouchableOpacity } from 'react-native';
import { connect ,useDispatch,useSelector} from 'react-redux';
import {setBankName} from '../redux/actions/detailsActions';
import { setAgentName } from '../redux/actions/detailsActions';
import PropTypes from 'prop-types';
// class Page2 extends Component {
  const Page2 = ({navigation,route}) => {
    const dispatch=useDispatch()
    const [bk,setBk]=useState("");
    const bank=useSelector(state=>state.detailsReducer.bank)
    const name=useSelector(state=>state.nameReducer.name)
    useEffect(
      ()=>{
       // dispatch(setBankName("Great Man"));
        // setBk(useSelector(state=>state.bank))
      },[]
    )
    return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}>
          <Text>Welcome to Page2</Text>
          <Text>Hello,bnk {bank}</Text>
          <Text>Hello,{name}</Text>
          <TouchableOpacity>
            <Text style = {{ borderWidth: 1,padding: 5,borderColor: 'black'}} onPress={()=>{console.log("Pressed");dispatch(setBankName({bank:"Dad"}));dispatch(setAgentName({name:"Mom"}));}}>
               Button
            </Text>
         </TouchableOpacity>

          <TouchableOpacity>
            <Text style = {{ borderWidth: 1,padding: 5,borderColor: 'black'}} onPress={()=>{navigation.navigate('Page3')}}>
               Button
            </Text>
         </TouchableOpacity>
        </View>
      )
 }
  


const mapStateToProps=state=>{
    return{ 
        data:state,
    }
}

export default connect(mapStateToProps,{setBankName,setAgentName})(Page2)
