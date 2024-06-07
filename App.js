import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Authenticator } from './src/context/Authenticator';
import Home from './src/screens/Home';
import Cadastro from './src/screens/Cadastro';
import Login from './src/screens/Login';
import ResetPassword from './src/screens/ResetPassword';
import Onboarding from './src/screens/Onboarding';
import MenuScreen from './src/screens/MenuScreen';
import Camera from './src/screens/Camera';
import Capturas from './src/screens/Capturas';


const Tab = createBottomTabNavigator();

function MyTab() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Cadastro" component={Cadastro} />
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="ResetPassword" component={ResetPassword} />
      <Tab.Screen name="Onboarding" component={Onboarding} />
      <Tab.Screen name="MenuScreen" component={MenuScreen} />
      <Tab.Screen name="Camera" component={Camera} />
      <Tab.Screen name="Capturas" component={Capturas} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Authenticator>
      <NavigationContainer>
        <MyTab />
      </NavigationContainer>
    </Authenticator>
  );
}