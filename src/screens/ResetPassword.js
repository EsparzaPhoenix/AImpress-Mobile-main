import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { auth } from '../config';
import { sendPasswordResetEmail } from 'firebase/auth';
import globalStyle from '../styles/globalStyle';

const PasswordReset = () => {
    const [email, setEmail] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                setSuccessMessage('Email enviado!');
                setEmail('');
            })
            .catch((error) => {
                setErrorMessage('Erro ao enviar email: ' + error.message);
            });
    };

    return (
        <View style={[globalStyle.container, globalStyle.loginContainer]}>
            <Text style={[globalStyle.boldText, globalStyle.centerText, { fontSize: 24, marginBottom: 20 }]}>Redefinir Senha</Text>

            {successMessage ? (
                <Text style={[globalStyle.text, { color: 'green', marginBottom: 10 }]}>{successMessage}</Text>
            ) : null}

            {errorMessage ? (
                <Text style={[globalStyle.text, { color: 'red', marginBottom: 10 }]}>{errorMessage}</Text>
            ) : null}

            <TextInput
                style={globalStyle.input}
                placeholder="Email"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
                placeholderTextColor="#888"
            />

            <TouchableOpacity style={globalStyle.button} onPress={handleResetPassword}>
                <Text style={globalStyle.buttonText}>Enviar Email de mudança de Senha</Text>
            </TouchableOpacity>
        </View>
    );
};

export default PasswordReset;