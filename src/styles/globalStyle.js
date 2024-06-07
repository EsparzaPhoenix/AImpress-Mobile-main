import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  // Global styles
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
  },
  boldText: {
    fontWeight: 'bold',
  },
  centerText: {
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    width: width * 0.8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    width: width * 0.8,
    backgroundColor: '#FFF',
    color: '#000',
  },
  card: {
    backgroundColor: '#F5F5F5',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  cardText: {
    fontSize: 16,
  },
  link: {
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
  projectName: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#000000',
  },
  // Specific screen styles
  onboardingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  onboardingText: {
    fontSize: 20,
    marginVertical: 10,
  },
  indicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  indicatorDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#D3D3D3',
    marginHorizontal: 5,
  },
  indicatorDotActive: {
    backgroundColor: '#007BFF',
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  socialButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  socialButton: {
    padding: 15,
    borderRadius: 8,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleButton: {
    backgroundColor: '#DB4437',
  },
  facebookButton: {
    backgroundColor: '#3B5998',
  },
  linkedinButton: {
    backgroundColor: '#0077B5',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    marginVertical: 10,
    padding: 15,
    width: width * 0.8,
  },
  passwordIcon: {
    marginLeft: 10,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width * 0.8,
    marginVertical: 10,
  },
  // Additional specific screen styles
  menuContainer: {
    flex: 1,
    padding: 20,
  },
  chatContainer: {
    flex: 1,
    padding: 10,
  },
  chatBubble: {
    padding: 15,
    borderRadius: 20,
    marginVertical: 5,
  },
  chatBubbleUser: {
    backgroundColor: '#E7F3FF',
    alignSelf: 'flex-end',
  },
  chatBubbleSystem: {
    backgroundColor: '#F1F1F1',
    alignSelf: 'flex-start',
  },
  chatInputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#DDD',
  },
  chatInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    padding: 10,
    marginRight: 10,
  },
  chatSendButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  historyContainer: {
    flex: 1,
    padding: 20,
  },
  historyCard: {
    backgroundColor: '#F5F5F5',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  historyCardText: {
    fontSize: 16,
  },
  moreLink: {
    color: '#007BFF',
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginTop: 10,
  },
});
