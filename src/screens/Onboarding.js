import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import globalStyle from '../styles/globalStyle';

const Onboarding = () => {
  const navigation = useNavigation();

  return (
    <Swiper
      style={styles.wrapper}
      showsButtons={false}
      dotStyle={styles.dot}
      activeDotStyle={styles.activeDot}
      loop={false}  
    >
      <View style={styles.slide}>
        <Text style={styles.text}>Poste foto dos Reciclaveis e veja quem pode reciclar por você</Text>
        <TouchableOpacity style={styles.skipButton} onPress={() => navigation.navigate('MenuScreen')}>
          <Text style={styles.skipButtonText}>Pular</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.slide}>
        <Text style={styles.text}>Receba Pontos pela reciclagem</Text>
        <TouchableOpacity style={styles.skipButton} onPress={() => navigation.navigate('MenuScreen')}>
          <Text style={styles.skipButtonText}>Pular</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.slide}>
        <Text style={styles.text}>Gaste seus pontos em itens de nossa loja</Text>
        <TouchableOpacity style={styles.skipButton} onPress={() => navigation.navigate('MenuScreen')}>
          <Text style={styles.skipButtonText}>Pular</Text>
        </TouchableOpacity>
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  text: {
    ...globalStyle.text,
    ...globalStyle.boldText,
    textAlign: 'center',
    marginHorizontal: 40,
    fontSize: 24,
  },
  skipButton: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
  skipButtonText: {
    ...globalStyle.text,
    fontSize: 16,
  },
  dot: {
    ...globalStyle.indicatorDot,
  },
  activeDot: {
    ...globalStyle.indicatorDot,
    ...globalStyle.indicatorDotActive,
  },
});

export default Onboarding;
