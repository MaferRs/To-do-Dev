import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/login';
import SplashScreen from './src/components/splash-screen/splash-screen';
import { useState } from 'react';
import Register from './src/pages/register';

export default function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  const handleSplashEnd = () => {
    setIsSplashVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" />
      {isSplashVisible ? (
        <SplashScreen onSplashEnd={handleSplashEnd} />
      ) : (
        <Login />
      )} */}

      <Register />
    </View>
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
