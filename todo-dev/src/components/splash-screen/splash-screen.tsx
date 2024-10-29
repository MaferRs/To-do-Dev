import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import inicialImage from '../../assets/inicial.png';

interface Props {
  onSplashEnd: () => void;
}

export default function SplashScreen({ onSplashEnd }: Props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onSplashEnd();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onSplashEnd]);

  return (
    <View style={styles.containerSplashScreen}>
      <View style={styles.containerRounded}>
        <Image source={inicialImage} style={styles.logo} />
        <Text style={styles.nameApp}>To Do Dev</Text>
      </View>
      <Text style={styles.text}>Feito com amor ❤️ por Maria Fernanda</Text>
    </View>
  );
}
