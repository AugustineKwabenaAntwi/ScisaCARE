import React from 'react'
import { View,TouchableOpacity ,Image,Text,StyleSheet,Dimensions} from 'react-native'
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function WelcomeScreen() {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.imageContainer}>
            <Image resizeMode={'contain'} style = {styles.images} source={require("../assets/Images/welcome3.png")}/>
            </View>

            <View style={{flexDirection:"row"}}>
                <Text style= {styles.welcometext}>Welcome To </Text>
                <Text style= {styles.welcometext2}>ScisaCARE</Text>
            </View>

            <View style={{justifyContent:'center',alignItems:"center",marginVertical:20}}>
                <Text style= {styles.statementtext} numberOfLines={2}>Chat with the University's appointed counsellors while remaining anonymous</Text>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={{color:"white",fontWeight:"bold",fontSize:18,}}>NEXT</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        alignItems:"center",
        justifyContent:'center',
        marginHorizontal:25
    },
    imageContainer:{
        marginHorizontal:30
    },
    images:{
        width:400,
        height:400,
    },
    welcometext:{
        fontSize:28,
        fontWeight:"bold"
    },
    welcometext2:{
        color:"#AC0B1B",
        fontSize:28,
        fontWeight:"bold"
    },
    statementtext:{
        fontSize:15,
        color:"grey",
        textAlign:"center"
    },
    button:{
        borderRadius:10,
        backgroundColor:"#080769",
        paddingHorizontal:40,
        paddingVertical:10,
        marginTop:30

    }
})
