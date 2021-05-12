
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer}from 'react-navigation';
import {createBottomTabNavigator} from  'react-navigation-tabs';
import Fb from './screens/fb';
import Insta from './screens/in';
import { Header } from 'react-native-elements';
import {SafeAreaProvider}from 'react-native-safe-area-context'


export default class App extends React.Component{
  render(){
    return (
      <SafeAreaProvider>
      <View style={styles.container}>
         <Header
          backgroundColor={'#d370d3'}
          centerComponent={{
            text: 'BUZZ APP',
            style: { color: 'white', 
            fontSize: 30,
            width:400,alignItems:'center',
            justifyContent:'center',
            alignSelf:'center',alignContent:'center',paddingLeft:30},
          }}
        />
        <AppContainer/>
     
      </View>
      </SafeAreaProvider>
        );
  }
 

}
const TabNavigator=createBottomTabNavigator({
  Facebook:{screen:Fb},
  Insta:{screen:Insta},
})
const AppContainer=createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
