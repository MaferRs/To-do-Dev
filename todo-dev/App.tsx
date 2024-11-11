import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/login';
import SplashScreen from './src/components/splash-screen/splash-screen';
import { useState } from 'react';
import Register from './src/pages/register';
import Routes from './src/routes/routes';

export default function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  const handleSplashEnd = () => {
    setIsSplashVisible(false);
  };

  return (
    <NavigationContainer>
      {isSplashVisible ? (
        <SplashScreen onSplashEnd={handleSplashEnd} />
      ) : (
        <Routes />
      )}
    </NavigationContainer>
  );
}
