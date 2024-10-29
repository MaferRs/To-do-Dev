import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import imageLogin from '../../assets/login.png';
import CustomInput from '../../components/input/custom-input';
import CustomButton from '../../components/button/custom-button';
import { LoginScreenNavigationProp } from '../../@types/navigation';
import { styles } from './styles';

export default function Login() {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string): boolean => {
    return password.length >= 6;
  };

  const handleLogin = () => {
    let valid = true;

    // Validação de e-mail
    if (!validateEmail(email)) {
      setEmailError('Por favor, insira um e-mail válido.');
      valid = false;
    } else {
      setEmailError(null);
    }

    // Validação de password
    if (!validatePassword(password)) {
      setPasswordError('A password deve ter pelo menos 6 caracteres.');
      valid = false;
    } else {
      setPasswordError(null);
    }

    // Se ambos os campos são válidos, efetua o login e limpa os campos
    if (valid) {
      Alert.alert('Sucesso', 'Login efetuado');
      setEmail('');
      setPassword('');
    }
  };

  const handleRegisterNavigate = () => {
    navigation.navigate('Register'); // Navegar para a tela de registro
  };

  return (
    <KeyboardAvoidingView behavior="height" style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
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
          {emailError && <Text style={styles.errorText}>{emailError}</Text>}
          <CustomInput
            value={password}
            onChangeText={setPassword}
            placeholder="Senha"
            secureTextEntry
          />
          {passwordError && (
            <Text style={styles.errorText}>{passwordError}</Text>
          )}
        </View>
        <View>
          <CustomButton onPress={handleLogin}>Entrar</CustomButton>
        </View>
        <View style={styles.containerText}>
          <Text style={styles.text}>Não tem uma conta?</Text>
          <TouchableOpacity onPress={handleRegisterNavigate}>
            <Text style={styles.buttonNavigate}> Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
