import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import imageLogin from '../../assets/login.png';
import CustomInput from '../../components/input/custom-input';
import CustomButton from '../../components/button/custom-button';
import { LoginScreenNavigationProp } from '../../@types/navigation';
import { styles } from './styles';

// Importação do Firebase
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

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

  const handleLogin = async () => {
    let valid = true;

    // Validação de e-mail
    if (!validateEmail(email)) {
      setEmailError('Por favor, insira um e-mail válido.');
      valid = false;
    } else {
      setEmailError(null);
    }

    // Validação de senha
    if (!validatePassword(password)) {
      setPasswordError('A senha deve ter pelo menos 6 caracteres.');
      valid = false;
    } else {
      setPasswordError(null);
    }

    // Se ambos os campos são válidos, tenta efetuar o login
    if (valid) {
      try {
        // Autenticação com Firebase
        await signInWithEmailAndPassword(auth, email, password);
        Alert.alert('Sucesso', 'Login efetuado');

        // Navega para a tela de To-do após o login bem-sucedido
        navigation.navigate('Todo');

        // Limpa os campos
        setEmail('');
        setPassword('');
      } catch (error: any) {
        console.error('Erro ao fazer login:', error);

        // Exibe uma mensagem de erro
        Alert.alert(
          'Erro',
          'Falha ao efetuar login. Verifique suas credenciais.'
        );
      }
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
          <CustomButton onPress={handleLogin}>
            <Text style={styles.buttonLogin}>Entrar</Text>
          </CustomButton>
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
