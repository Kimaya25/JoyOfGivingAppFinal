import * as React from 'react';
import {createAppStackNavigator} from 'react-navigation-stack';
import UserDetailsScreen from '../Screens/UserDetailsScreen';
import Donate from '../Screens/Donate';

export const AppStackNavigator = createAppStackNavigator({
   DonateList : {
       screen : Donate,
       navigationOptions : {
           headerShown : false
       }
   },
   UserDetails : {
       screen : UserDetailsScreen,
       navigationOptions : {
           headerShown : false
       }
       
   }
},
   {
    initialRouteName: 'DonateList'
}
);
   

