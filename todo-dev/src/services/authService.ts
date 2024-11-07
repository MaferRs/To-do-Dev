import { auth } from '../firebaseConfig';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  UserCredential,
} from 'firebase/auth';

// Função para registrar o usuário
export const registerUser = async (
  email: string,
  password: string
): Promise<UserCredential | null> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log('Usuário cadastrado:', userCredential.user);
    return userCredential;
  } catch (error: any) {
    const errorMessage = error.message || 'Erro desconhecido';
    console.error('Erro ao cadastrar usuário:', errorMessage);
    return null;
  }
};

// Função para fazer login do usuário
export const loginUser = async (
  email: string,
  password: string
): Promise<UserCredential | null> => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log('Usuário logado:', userCredential.user);
    return userCredential;
  } catch (error: any) {
    const errorMessage = error.message || 'Erro desconhecido';
    console.error('Erro ao fazer login:', errorMessage);
    return null;
  }
};
