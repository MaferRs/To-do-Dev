import React, { useState } from 'react';
import { View, Image, Text, TextInput } from 'react-native';
import { styles } from './styles';

import imageLogin from '../../assets/login.png';
import CustomInput from '../../components/input/custom-input';
import CustomButton from '../../components/button/custom-button';

export default function Login() {
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Senha:', senha);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageLogin}>
        <Image style={styles.image} source={imageLogin} />
        <Text style={styles.loginText}>Login</Text>
      </View>
      <View style={styles.form}>
        <CustomInput
          value={email}
          onChangeText={setEmail}
          placeholder="E-mail"
        />
        <CustomInput
          value={senha}
          onChangeText={setSenha}
          placeholder="Senha"
          secureTextEntry
        />
      </View>
      <View>
        <CustomButton>Entrar</CustomButton>
      </View>
      <View>
        <Text>Não tem uma conta? Cadastre-se</Text>
      </View>
    </View>
  );
}
