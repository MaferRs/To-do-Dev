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
import imageRegister from '../../assets/register.png';
import CustomInput from '../../components/input/custom-input';
import CustomButton from '../../components/button/custom-button';
import { RegisterScreenNavigationProp } from '../../@types/navigation';
import { styles } from './styles';

// Importação do Firebase
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

export default function Register() {
  const navigation = useNavigation<RegisterScreenNavigationProp>();

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

  const handleRegister = async () => {
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

    // Se todos os campos são válidos, cria uma nova conta com Firebase
    if (valid) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;

        // Atualiza o perfil do usuário com o nome fornecido
        await updateProfile(user, { displayName: name });

        Alert.alert('Sucesso', 'Conta criada com sucesso!');
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');

        // Navega para a tela de login após o registro bem-sucedido
        navigation.navigate('Login');
      } catch (error: any) {
        Alert.alert(
          'Erro',
          'Falha ao criar conta. Verifique suas informações.'
        );
      }
    }
  };

  // Função para navegar para a tela de login
  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <KeyboardAvoidingView
      behavior="height"
      style={{ flex: 1 }}
      keyboardVerticalOffset={100}
    >
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
          <CustomButton onPress={handleRegister}>
            <Text style={styles.buttonRegister}>Criar Conta</Text>
          </CustomButton>
        </View>

        <View style={styles.containerText}>
          <Text style={styles.text}>Já tem uma conta?</Text>
          <TouchableOpacity onPress={navigateToLogin}>
            <Text style={styles.buttonNavigate}> Faça login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
