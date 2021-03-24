import * as React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Recieve from '../Screens/Recieve';
import Donate from '../Screens/Donate';
import WelcomeScreen from '../Screens/WelcomeScreen';

export const AppTabNavigator = createBottomTabNavigator({
   recieveItems : {screen:Recieve,
navigationOptions : {
    tabBarIcon : <Image source = {require('../assets/recieve.jpg')} style = {{width : 20, height :20}}/>
}},
  donateItems : {screens: Donate,
navigationOptions : {
    tabBarIcon : <Image source = {require('../assets/donate.png')} style = {{width : 20, height : 20}}/>
}}  

})
