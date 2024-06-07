import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import globalStyle from '../styles/globalStyle';

const MenuScreen = () => {
  const Navigation = useNavigation();

  const data = [
    { id: '1', title: 'Recicle', description: 'Crie posts sobre seus itens reciclados.' },
    { id: '2', title: 'Destaque-se', description: 'Ganhe pontos e aumente seu streak de dias reciclados. Quanto mais pontos, mais alto você estará na leaderboard.' },
    { id: '3', name: 'Leticia Kutch', review: '“Criei minha conta por recomendação de uma amiga. Muito legal e viciante.”', rating: '5.0' },
  ];


  const renderItem = ({ item }) => (
    <View style={globalStyle.card}>
      {item.title ? (
        <>
          <Text style={[globalStyle.boldText, { fontSize: 18, marginBottom: 10 }]}>{item.title}</Text>
          <Text style={[globalStyle.text, { fontSize: 16 }]}>{item.description}</Text>
        </>
      ) : (
        <View style={{ alignItems: 'center' }}>
          <View style={[{ width: 50, height: 50, borderRadius: 25, backgroundColor: '#CCCCCC', marginBottom: 10 }]} />
          <Text style={[globalStyle.boldText, { fontSize: 16 }]}>{item.name}</Text>
          <Text style={[globalStyle.text, { fontSize: 14, textAlign: 'center', marginVertical: 10 }]}>{item.review}</Text>
          <Text style={[globalStyle.text, { fontSize: 14 }]}>{item.rating} ★★★★★</Text>
        </View>
      )}
    </View>
  );

  return (
    <View style={globalStyle.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 20 }}>
        <Text style={[globalStyle.text, { fontSize: 24 }]}>Olá,</Text>
        <Text style={[globalStyle.boldText, { fontSize: 24 }]}>Usuário</Text>
        <TouchableOpacity style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: '#CCCCCC', marginLeft: 'auto' }}></TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 20 }}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10, borderTopWidth: 1, borderTopColor: '#CCCCCC' }}>
        <TouchableOpacity style={{ marginHorizontal: 5 }}><Text style={globalStyle.text}>Menu</Text></TouchableOpacity>
        <TouchableOpacity style={{ marginHorizontal: 5 }}><Text style={globalStyle.text}>Chats</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => Navigation.navigate('Camera')} style={{ marginHorizontal: 5 }}><Text style={globalStyle.text}>Novo Post</Text></TouchableOpacity>
        <TouchableOpacity style={{ marginHorizontal: 5 }}><Text style={globalStyle.text}>Leaderboard</Text></TouchableOpacity>
        <TouchableOpacity style={{ marginHorizontal: 5 }}><Text style={globalStyle.text}>Loja De Pontos</Text></TouchableOpacity>
      </View>
    </View>
  );
};

export default MenuScreen;
