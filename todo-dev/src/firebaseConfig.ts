// src/firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Configuração do Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCiIwrzXdjHyGlvbVq6dsBs5NxxzhEIbiU',
  authDomain: 'tododev-8554f.firebaseapp.com',
  projectId: 'tododev-8554f',
  storageBucket: 'tododev-8554f.firebasestorage.app',
  messagingSenderId: '124025422107',
  appId: '1:124025422107:web:302dc9f46b5105a39353be',
  measurementId: 'G-PB6V0T2B3N',
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa os serviços do Firebase
export const auth = getAuth(app);
export const firestore = getFirestore(app);
