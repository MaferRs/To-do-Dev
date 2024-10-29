import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import { styles } from './styles';

import imageRegister from '../../assets/register.png';
import CustomInput from '../../components/input/custom-input';
import CustomButton from '../../components/button/custom-button';

export default function Register() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [nameError, setNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState<
    string | null
  >(null);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string): boolean => {
    return password.length >= 6;
  };

  const validateName = (name: string): boolean => {
    return name.trim().length > 0;
  };

  const handleRegister = () => {
    let valid = true;

    // Validação do nome
    if (!validateName(name)) {
      setNameError('Por favor, insira seu nome.');
      valid = false;
    } else {
      setNameError(null);
    }

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

    // Validação de confirmação de senha
    if (password !== confirmPassword) {
      setConfirmPasswordError('As senhas não correspondem.');
      valid = false;
    } else {
      setConfirmPasswordError(null);
    }

    //  limpa os campos após efetuar cadastro
    if (valid) {
      Alert.alert('Sucesso', 'Conta criada com sucesso!');
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    }
  };

  return (
    <KeyboardAvoidingView behavior="height" style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.imageRegister}>
          <Image style={styles.image} source={imageRegister} />
          <Text style={styles.registerText}>Cadastre-se</Text>
        </View>
        <View style={styles.form}>
          <CustomInput value={name} onChangeText={setName} placeholder="Nome" />
          {nameError && <Text style={styles.errorText}>{nameError}</Text>}

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

          <CustomInput
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Confirmar senha"
            secureTextEntry
          />
          {confirmPasswordError && (
            <Text style={styles.errorText}>{confirmPasswordError}</Text>
          )}
        </View>

        <View>
          <CustomButton onPress={handleRegister}>Criar Conta</CustomButton>
        </View>

        <View>
          <Text style={styles.text}>Já tem uma conta? Faça login</Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
