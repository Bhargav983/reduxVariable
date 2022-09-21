// import React,{useEffect} from 'react';
// import { Text, View } from 'react-native';
// import { connect } from 'react-redux';
// import {setBankName} from '../redux/actions/detailsActions';
// import PropTypes from 'prop-types';

// import detailsReducer from "./redux/reducers/detailsReducer";
// const store = createStore(detailsReducer);
// const Page2 = ({navigation,route}) => {
//   useEffect(
//     ()=>{
//       const state=store.setBankName()
//     }
//   )
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center"
//       }}>
//       <Text>Welcome to Page2</Text>
//       <Text>{store}</Text>
//     </View>
//   )
// }

// const mapStateToProps=(state)=>{
//     return{ 
//         bank:state,
//     }
// }

// export default connect(mapStateToProps,{setBankName})(Page2)
