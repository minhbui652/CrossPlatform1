import { SafeAreaView, StyleSheet, Dimensions } from "react-native";
import { View, Text, Image, Pressable, TextInput } from "react-native";

const windownWidth = Dimensions.get('window').width;
const windownHeight = Dimensions.get('window').height;

export const RegisterScreen = ( {navigation}) => {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
            <View style={styles.container}>
                <Image source={require('../../img/logo.png')} />
                <Text style={{ fontWeight: "bold", color: "#560cce", fontSize: 22, marginTop: 20, marginBottom: 20 }}>Create Account</Text>
                <TextInput style={styles.input} placeholder="Name" />
                <TextInput style={styles.input} placeholder="Email" />
                <TextInput style={styles.input} placeholder="Password" />
                <Pressable style={styles.button} onPress={ () => {
                    navigation.navigate('LoginScreen');
                }}>
                    <Text style={styles.text}>Sign up</Text>
                </Pressable>
                <Text>Already have an account? <Text style={{ fontWeight: 'bold', color: "#560cce" }} onPress={ () => {
                    navigation.navigate('LoginScreen');
                }}>Login</Text></Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: windownHeight*0.5,
        marginLeft: "10%",
        marginRight: "10%",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    input: {
        width: windownWidth - 150,
        height: 50,
        marginTop: 22,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
    },
    button: {
        width: windownWidth - 150,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 32,
        marginBottom: 12,
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