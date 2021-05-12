import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default  class Insta  extends  React.Component{
render(){
    return(

        <View style={styles.displayText}>
            <Text>Instagram</Text>
        </View>
    )
}
}
const styles=StyleSheet.create({
    displayText:{
      
        flex:1,
        fontSize:15,
        textDecorationLine:'underline',
        color:'maroon',
        fontStyle:'bold',
        fontSize:30,
        justifyContent:'center',
        alignItems:'center',
    
      

    },
})