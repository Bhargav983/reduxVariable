import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';


import {createStore,combineReducers} from 'redux';
import {Provider} from 'react-redux';
import detailsReducer from "./redux/reducers/detailsReducer";
import nameReducer from './redux/reducers/nameReducer';
const rootReducer = combineReducers({
  detailsReducer,
  nameReducer,
  });
const store = createStore(rootReducer);

const Stack = createStackNavigator();
const MyStack = () => {
   return (
    <Provider store={store}>

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Page1" component={Page1} />
          <Stack.Screen name="Page2" component={Page2} />
          <Stack.Screen name="Page3" component={Page3} />
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
   );
};
export default MyStack;