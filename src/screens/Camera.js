import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, setDoc, doc } from 'firebase/firestore';
import { db } from '../config';
import { useAuth } from '../context/Authenticator';
import styles from '../styles/globalStyle';

const Camera = ({ navigation }) => {
    const { user } = useAuth();
    console.log('Usuário autenticado:', user);  
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);

    const pickImage = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
            alert('Desculpe, precisamos de permissão para acessar a câmera!');
            return;
        }
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            const uri = result.assets[0].uri;
            setImage(uri);
        }
    };

    const uploadImage = async (uri) => {
        if (!user) {
            throw new Error('Usuário não autenticado');
        }
        console.log('Fazendo upload da imagem para o usuário:', user.uid); 
        setUploading(true);
        const response = await fetch(uri);
        const blob = await response.blob();
        console.log('Blob da imagem:', blob);  

        const storage = getStorage();
        const storageRef = ref(storage, `images/${user.uid}/${Date.now()}`);
        console.log('Referência do storage:', storageRef); 

        try {
            await uploadBytes(storageRef, blob);
            const downloadURL = await getDownloadURL(storageRef);
            setUploading(false);
            console.log('URL de download:', downloadURL); 
            return downloadURL;
        } catch (error) {
            console.error('Erro ao fazer upload da imagem:', error); 
            setUploading(false);
            throw error;
        }
    };

    const handleSubmit = async () => {
        if (!titulo || !descricao || !image) {
            Alert.alert('Erro', 'Todos os campos são obrigatórios!');
            return;
        }

        try {
            const imageURL = await uploadImage(image);
            const docRef = await addDoc(collection(db, 'posts'), {
                titulo,
                descricao,
                imageURL,
                userId: user.uid,
                createdAt: new Date(),
            });

            await setDoc(doc(db, 'posts', docRef.id), { id: docRef.id }, { merge: true });

            Alert.alert('Sucesso', 'Post enviado com sucesso!');
            navigation.goBack();
        } catch (error) {
            console.error('Erro ao enviar post:', error);
            Alert.alert('Erro', 'Ocorreu um erro ao enviar o post.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={[styles.text, styles.boldText, styles.projectName]}>Novo Post</Text>
            <View style={styles.card}>
                <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
                    <Text style={[styles.text, styles.boldText]}>Titulo do Post</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Titulo"
                        value={titulo}
                        onChangeText={setTitulo}
                    />
                    <Text style={[styles.text, styles.boldText]}>Descrição</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Descrição"
                        value={descricao}
                        onChangeText={setDescricao}
                    />
                    <TouchableOpacity style={styles.button} onPress={pickImage}>
                        <Text style={styles.buttonText}>Tirar Foto</Text>
                    </TouchableOpacity>
                    {image && (
                        <Image
                            source={{ uri: image }}
                            style={{ width: 100, height: 100, marginTop: 10, alignSelf: 'center', borderRadius: 6 }}
                        />
                    )}
                    <TouchableOpacity style={styles.button} onPress={handleSubmit} disabled={uploading}>
                        <Text style={styles.buttonText}>{uploading ? 'Enviando...' : 'Enviar Post'}</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    );
};

export default Camera;
