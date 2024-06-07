import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import globalStyle from '../styles/globalStyle';

const MenuScreen = () => {
  const data = [
    { id: '1', title: 'Crie Currículos', description: 'Com a inteligência artificial, crie currículos profissionais rapidamente.' },
    { id: '2', title: 'Destaque-se', description: 'Utilizamos um sistema avançado que analisa uma vasta quantidade de currículos de alta visibilidade, garantindo que o seu também atenda aos mais altos padrões de qualidade.' },
    { id: '3', name: 'Leticia Kutch', review: '“Criei meu currículo em poucos minutos! A facilidade é impressionante. Nunca fiz meu currículo de forma tão rápida como consegui fazer pelo app.”', rating: '5.0' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      {item.title ? (
        <>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardDescription}>{item.description}</Text>
        </>
      ) : (
        <View style={styles.reviewContainer}>
          <View style={styles.reviewAvatar} />
          <Text style={styles.reviewName}>{item.name}</Text>
          <Text style={styles.reviewText}>{item.review}</Text>
          <Text style={styles.reviewRating}>{item.rating} ★★★★★</Text>
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>Usuário</Text>
        <TouchableOpacity style={styles.avatar}></TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.contentContainer}
      />
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}><Text>Menu</Text></TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}><Text>Chats</Text></TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}><Text>Currículos</Text></TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}><Text>LinkedIn</Text></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  greeting: {
    ...globalStyle.text,
    fontSize: 24,
  },
  userName: {
    ...globalStyle.boldText,
    fontSize: 24,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#CCCCCC',
    marginLeft: 'auto',
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  cardTitle: {
    ...globalStyle.boldText,
    fontSize: 18,
    marginBottom: 10,
  },
  cardDescription: {
    ...globalStyle.text,
    fontSize: 16,
  },
  reviewContainer: {
    alignItems: 'center',
  },
  reviewAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#CCCCCC',
    marginBottom: 10,
  },
  reviewName: {
    ...globalStyle.boldText,
    fontSize: 16,
  },
  reviewText: {
    ...globalStyle.text,
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 10,
  },
  reviewRating: {
    ...globalStyle.text,
    fontSize: 14,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#CCCCCC',
  },
  footerButton: {
    ...globalStyle.text,
    textAlign: 'center',
  },
});

export default MenuScreen;