import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return (
        <>
            <View style={styles.container}>

                <View style={styles.form}>
                    <Text style={{ textAlign: 'center', fontSize: 20 }}>Login</Text>
                    <Image style={styles.image} source={require('../assets/images/logo.png')} />
                    <Text style={styles.label}>Username</Text>
                    <TextInput style={styles.input} placeholder='Enter Your Username' />
                    <Text style={styles.label}>Password</Text>
                    <TextInput style={styles.input} placeholder='Enter Your Password' secureTextEntry />
                    <Button title="Login" onPress={() => { }} />
                </View>
            </View>
        </>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 20,
        backgroundColor: "#f5f5f5"
    },
    form: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        fontWeight: 'bold'
    },
    input: {
        height: 40,
        borderColor: "#ddd",
        borderWidth: 1,
        marginBottom: 15,
        padding: 10,
        borderRadius: 5,
    },
    image: {
        alignSelf: "center",
        margin: 30,
    }
});