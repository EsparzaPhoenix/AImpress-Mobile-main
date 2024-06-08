import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, ActivityIndicator } from 'react-native';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../config';
import { useAuth } from '../context/Authenticator';
import styles from '../styles/globalStyle';

const Capturas = () => {
    const { user } = useAuth();
    const [loading, setLoading] = useState(true);
    const [capturas, setCapturas] = useState([]);

    useEffect(() => {
        const fetchCapturas = async () => {
            try {
                const q = query(collection(db, 'posts'), where('userId', '==', user.uid));
                const querySnapshot = await getDocs(q);
                const capturasData = querySnapshot.docs.map(doc => doc.data());
                setCapturas(capturasData);
                setLoading(false);
            } catch (error) {
                console.error('Erro ao buscar capturas:', error);
                setLoading(false);
            }
        };

        if (user) {
            fetchCapturas();
        }
    }, [user]);

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#4CAF50" />
                <Text style={[styles.text, styles.centerText]}>Carregando...</Text>
            </View>
        );
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={[styles.text, styles.boldText, styles.projectName]}>Minhas Capturas</Text>
            {capturas.length > 0 ? (
                capturas.map((captura, index) => (
                    <View key={index} style={styles.card}>
                        <Image source={{ uri: captura.imageURL }} style={{ width: 300, height: 200, borderRadius: 8 }} />
                        <Text style={[styles.text, styles.centerText]}>{captura.titulo}</Text>
                        <Text style={[styles.text, styles.centerText, { color: 'gray' }]}>{captura.descricao}</Text>
                    </View>
                ))
            ) : (
                <Text style={[styles.text, styles.centerText]}>Nenhuma captura encontrada.</Text>
            )}
        </ScrollView>
    );
};

export default Capturas;
