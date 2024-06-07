import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { auth } from '../config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import globalStyle from '../styles/globalStyle';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                setSuccessMessage("Login realizado com sucesso!");
                setTimeout(() => {
                    setSuccessMessage('');
                    navigation.navigate('Onboarding'); 
                }, 3000);
            })
            .catch((error) => {
                console.log("Erro ao fazer login");
                setErrorMessage("Erro ao fazer login: " + error.message);
                setTimeout(() => {
                    setErrorMessage('');
                }, 3000);
            });
    };

    return (
        <View style={[globalStyle.container, globalStyle.loginContainer]}>
            <Text style={[globalStyle.header, globalStyle.centerText]}>Login</Text>

            {successMessage ? (
                <Text style={globalStyle.success}>{successMessage}</Text>
            ) : null}

            {errorMessage ? (
                <Text style={globalStyle.error}>{errorMessage}</Text>
            ) : null}

            <TextInput
                style={globalStyle.input}
                placeholder="Email"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
                placeholderTextColor="#888"
            />
            <TextInput
                style={globalStyle.input}
                placeholder="Senha"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                placeholderTextColor="#888"
            />
            <TouchableOpacity style={globalStyle.button} onPress={handleLogin}>
                <Text style={globalStyle.buttonText}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                <Text style={globalStyle.link}>Não tem uma conta? Cadastre-se</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
                <Text style={globalStyle.link}>Esqueceu a sua senha?</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Login;