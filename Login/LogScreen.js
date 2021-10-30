import React, { useRef, useState } from 'react'

import {
  Text,
  Box,
  Button,
  Input,
} from 'native-base';
import  { StyleSheet } from 'react-native';

export default function  LogScreen({nextScreen}) {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const refLogin = useRef(null);
    const refPassword = useRef(null);

    return (
        <Box style={logScreenStyles.logScreen}>
            <Text style={{fontSize: "30px",fontWeight: "700", textAlign: "center", paddingBottom: "50px"}}>Login</Text>
            <Input style={logScreenStyles.Input} ref={refLogin} value={login} onChangeText={()=>setLogin(refLogin.current.Text)} placeholder="Login"/>
            <Input style={logScreenStyles.Input} ref={refPassword} value={password} onChangeText={()=>setPassword(refPassword.current.Text)} placeholder="Register"/>

            <Button style={logScreenStyles.button}>
                    <Text style={{fontSize: "large", color: "white", fontWeight: "700"}}>
                        Login
                    </Text>
            </Button>
            
            <Button style={logScreenStyles.button}>
                    <Text style={{fontSize: "large", color: "white", fontWeight: "700"}}>
                        Register
                    </Text>
            </Button>
        </Box>
    );
}

const logScreenStyles = StyleSheet.create({
    logScreen: {
        width: "70vw",
        height: "60%"
    },
    Input: {
        width: "100%",
        marginTop: "15px",
        textAlign: "center",
        backgroundColor: "#EEEEEE",
        borderRadius: "10px",
    },
    button: {
        marginTop: "15px",
        width: "100%",
        borderRadius: "10px",
        fontSize: "large",
    },
});