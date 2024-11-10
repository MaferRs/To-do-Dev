import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './src/components/splash-screen/splash-screen';
import { useState } from 'react';
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
