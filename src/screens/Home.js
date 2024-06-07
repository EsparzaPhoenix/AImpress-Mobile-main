import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import globalStyle from '../styles/globalStyle';


const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={globalStyle.container}>
      <Text style={globalStyle.projectName}>AImpress</Text>
      <TouchableOpacity 
        style={globalStyle.button} 
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={globalStyle.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={globalStyle.button} 
        onPress={() => navigation.navigate('Cadastro')}
      >
        <Text style={globalStyle.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home;