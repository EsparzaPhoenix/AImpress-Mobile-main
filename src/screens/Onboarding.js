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
        <Text style={styles.text}>Crie um currículo profissional de maneira rápida e fácil</Text>
        <TouchableOpacity style={styles.skipButton} onPress={() => navigation.navigate('MenuScreen')}>
          <Text style={styles.skipButtonText}>Pular</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.slide}>
        <Text style={styles.text}>Compartilhe suas informações ou conecte-se ao LinkedIn</Text>
        <TouchableOpacity style={styles.skipButton} onPress={() => navigation.navigate('MenuScreen')}>
          <Text style={styles.skipButtonText}>Pular</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.slide}>
        <Text style={styles.text}>Revise e ajuste seu currículo conforme desejar</Text>
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
