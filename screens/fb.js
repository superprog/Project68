import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default  class Fb  extends  React.Component{
render(){
    return(

        <View style={styles.displayText}>
            <Text >Facebook</Text>
        </View>
    )
}
}
const styles=StyleSheet.create({
    displayText:{
      
     
        fontSize:15,
        textDecorationLine:'underline',
        color:'navy',
        fontStyle:'bold',
        fontSize:20,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        width:200 ,
        height:100,
    
      

    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})