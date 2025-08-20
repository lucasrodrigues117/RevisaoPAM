import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaRegister from './src/screens/TelaRegister';
import TelaLogin from './src/screens/TelaLogin';
import TelaOP from './src/screens/TelaOP';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Register" component={TelaRegister} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={TelaLogin} options={{headerShown: false}}/>
        <Stack.Screen name="OutrasOpcoes" component={TelaOP} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

