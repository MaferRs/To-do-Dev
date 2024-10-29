import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/login';
import SplashScreen from './src/components/splash-screen/splash-screen';
import { useState } from 'react';
import Register from './src/pages/register';
import './gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/index.routes';

export default function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  const handleSplashEnd = () => {
    setIsSplashVisible(false);
  };

  return (
    <NavigationContainer>
      {isSplashVisible ? (
        // Exibindo o SplashScreen enquanto isSplashVisible for verdadeiro
        <SplashScreen onSplashEnd={handleSplashEnd} />
      ) : (
        // Exibindo as rotas depois do fim do SplashScreen
        <Routes />
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
