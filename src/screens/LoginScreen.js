import { SafeAreaView, StyleSheet, Dimensions, ScrollView } from "react-native";
import { View, Text, Image, Pressable, TextInput } from "react-native";

const windownWidth = Dimensions.get('window').width;
const windownHeight = Dimensions.get('window').height;

export const LoginScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center'}}>

            <View style={styles.container} >

                <Image source={require('../../img/logo.png')} />
                <Text style={{ fontWeight: "bold", color: "#560cce", fontSize: 22, marginTop: 10 }}>Welcome back.</Text>
                <TextInput style={styles.input} placeholder="Email" />
                <TextInput style={styles.input} placeholder="Password" />
                <Text style={{ width: windownWidth - 150, textAlign: 'right', marginTop: 10 }}>Forgot your password?</Text>
                <Pressable style={styles.button}>
                    <Text style={styles.text}>LOGIN</Text>
                </Pressable>
                <Text>Don't have account? <Text style={{ fontWeight: 'bold', color: "#560cce" }} onPress={() => {
                    navigation.navigate('RegisterScreen');
                }}>Sign up</Text></Text>

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
        marginTop: 22,
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