import { firestore } from '../../firebaseConfig';
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  DocumentData,
} from 'firebase/firestore';

// Função para adicionar uma tarefa
export const addTask = async (userId: string, task: string) => {
  try {
    const tasksCollection = collection(firestore, 'tasks');
    await addDoc(tasksCollection, {
      userId,
      task,
      completed: false,
      createdAt: new Date(),
    });
  } catch (error) {}
};

// Função para buscar as tarefas de um usuário
export const getUserTasks = async (userId: string): Promise<DocumentData[]> => {
  try {
    const tasksCollection = collection(firestore, 'tasks');
    const q = query(tasksCollection, where('userId', '==', userId));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => doc.data());
  } catch (error) {
    return [];
  }
};
