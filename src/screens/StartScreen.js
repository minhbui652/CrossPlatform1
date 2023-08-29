import { SafeAreaView, StyleSheet, Dimensions } from "react-native";
import { View, Text, Image, Pressable } from "react-native";

const windownWidth = Dimensions.get('window').width;
const windownHeight = Dimensions.get('window').height;

export const StartScreen = ( {navigation}) => {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
            <View style={styles.container}>
                <Image source={require('../../img/logo.png')} />
                <Text style={{ fontWeight: "bold", color: "#560cce", fontSize: 22 }}>Login Template</Text>
                <Text style={{ textAlign: "center", }}>The easiest way to start with your amazing application</Text>
                {/* 
                <View style={styles.ButtonStyle}><Button color="#560cce" title="Login" /></View>
                <View style={styles.ButtonStyle}><Button title="sign up" /></View>
                */}
                <Pressable style={styles.button} onPress={() =>{
                    navigation.navigate('LoginScreen');
                }}>
                    <Text style={styles.text}>LOGIN</Text>
                </Pressable>
                <Pressable style={[styles.button, { backgroundColor: "white", borderWidth: 0.2 }]} onPress = {() => {
                    navigation.navigate('RegisterScreen');
                }}>
                    <Text style={[styles.text, { color: "#560cce" }]}>SIGN UP</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: windownHeight * 0.4,
        marginLeft: "10%",
        marginRight: "10%",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    button: {
        width: windownWidth - 150,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: "#560cce",
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },

})
