import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './Screens/WelcomeScreen';
import AppTabNavigator from './Components/AppTabNavigator';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

export default class App extends React.Component {
  render(){
  return (
    <View style={styles.container}>
     <TabContainer/>
    </View>
  );
}
}
const SwitchNavigator = createSwitchNavigator({
  AppTabNavigator : {screen: AppTabNavigator},
  WelcomeScreen : {screen: WelcomeScreen},
  drawer : {screen :AppDrawerNavigation}

})
const TabContainer = createAppContainer(
  SwitchNavigator
)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
