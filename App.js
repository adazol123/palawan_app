import { StatusBar } from 'expo-status-bar';
import { Button, Image, Pressable, Text, TextInput, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import GettingStarted from './screens/GettingStarted';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name='getting_started' component={GettingStarted} options={{ headerShown: false, animation: 'slide_from_right' }} />
        <Stack.Screen name='login' component={LoginScreen} options={{
          headerTintColor: 'white',
          headerTitleStyle: { color: '#49B477', fontSize: 0 },
          animation: 'slide_from_right',
          headerStyle: { backgroundColor: '#49B477' },
          headerShadowVisible: false,
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


