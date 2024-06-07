import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import logoImage from '../../assets/images/ReciclaKiLogo.png';
import globalStyle from '../styles/globalStyle';


const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={globalStyle.container}>
      <Image source={logoImage} style={{ width: 204, height: 237 }} />
      <Text style={globalStyle.projectName}>ReciclaKi</Text>
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