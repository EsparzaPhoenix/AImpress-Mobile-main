import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import globalStyle from '../styles/globalStyle';
import { db, auth } from '../config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Cadastro = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignUp = () => {
    if (password.length < 6) {
        setErrorMessage("Senha com mínimo de 6 caracteres.");
        setTimeout(() => {
            setErrorMessage('');
        }, 3000);
        return;
    }

    createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential.user);
                setSuccessMessage("Usuário criado com sucesso!");
                setTimeout(() => {
                    setSuccessMessage('');
                    navigation.navigate('Login');
                }, 3000);
            })
            .catch((error) => {
                console.log("Usuário não criado");
                Alert.alert(error.message);
            });
    };

  return (
    <View style={globalStyle.container}>
      <Text style={[globalStyle.header, globalStyle.centerText]}>Cadastro</Text>
      {errorMessage ? <Text style={globalStyle.error}>{errorMessage}</Text> : null}

      <TextInput
        placeholder="Email"
        placeholderTextColor="#888"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        style={globalStyle.input}
      />
      <TextInput
        placeholder="Senha"
        placeholderTextColor="#888"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={globalStyle.input}
      />
      <TouchableOpacity style={globalStyle.button} onPress={handleSignUp}>
        <Text style={globalStyle.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cadastro;
