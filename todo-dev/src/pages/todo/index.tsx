import { useEffect, useState } from 'react';
import { styles } from './styles';
import {
  KeyboardAvoidingView,
  Modal,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Image,
} from 'react-native';
import CustomButton from '../../components/button/custom-button';
import binIcon from '../../assets/binIcon.png';
import addIcon from '../../assets/addIcon.png';
import logout from '../../assets/logout.png';
import CustomInput from '../../components/input/custom-input';
import { auth, firestore } from '../../../firebaseConfig';
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
} from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { LoginScreenNavigationProp } from '../../@types/navigation';

interface Task {
  id: string;
  title: string;
  description: string;
}

export default function Todo() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [newTask, setNewTask] = useState<Task>({
    id: '',
    title: '',
    description: '',
  });
  const [selectedTaskIds, setSelectedTaskIds] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const navigation = useNavigation<LoginScreenNavigationProp>();

  useEffect(() => {
    const userId = auth.currentUser?.uid; // Obtém o ID do usuário autenticado
    if (userId) {
      const unsubscribe = onSnapshot(
        collection(firestore, `users/${userId}/tasks`),
        snapshot => {
          const taskList = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          })) as Task[];
          setTasks(taskList);
        }
      );

      return () => unsubscribe();
    }
  }, []);

  const handleAddTask = async () => {
    const userId = auth.currentUser?.uid; // Obtém o ID do usuário autenticado
    if (userId && newTask.title && newTask.description) {
      await addDoc(collection(firestore, `users/${userId}/tasks`), {
        title: newTask.title,
        description: newTask.description,
      });
      setNewTask({ id: '', title: '', description: '' });
      setModalVisible(false);
    }
  };

  const handleDeleteTasks = async () => {
    const deletePromises = selectedTaskIds.map(id =>
      deleteDoc(doc(firestore, `users/${auth.currentUser?.uid}/tasks`, id))
    );
    await Promise.all(deletePromises);
    setSelectedTaskIds([]);
    setDeleteModalVisible(false);
  };

  const toggleTaskSelection = (taskId: string) => {
    setSelectedTaskIds(prevSelectedIds =>
      prevSelectedIds.includes(taskId)
        ? prevSelectedIds.filter(id => id !== taskId)
        : [...prevSelectedIds, taskId]
    );
  };

  const openDeleteModal = () => {
    if (selectedTaskIds.length > 0) {
      setDeleteModalVisible(true);
    } else {
      alert('Selecione uma ou mais tarefas para excluir.');
    }
  };

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigation.navigate('Login');
    } catch (error) {}
  };

  return (
    <KeyboardAvoidingView behavior="height" style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Bem Vinda(o) 👋😊.</Text>
        <View style={styles.containerTextHeader}>
          <TextInput
            style={styles.searchInput}
            placeholder="Pesquisar tarefa..."
            value={searchQuery}
            onChangeText={text => setSearchQuery(text)}
          />
          <CustomButton style={styles.logout} onPress={handleLogout}>
            <Image source={logout} />
          </CustomButton>
        </View>
      </View>
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={styles.mainContainer}>
          {filteredTasks.length == 0 ? (
            // Renderiza a mensagem caso não haja tarefas
            <Text style={styles.noTasksText}>Nenhuma tarefa no momento</Text>
          ) : (
            // Renderiza a lista de tarefas normalmente
            <ScrollView keyboardShouldPersistTaps="handled">
              {filteredTasks.map(task => (
                <View key={task.id} style={styles.taskItemContainer}>
                  <TouchableOpacity
                    style={[
                      styles.taskItem,
                      selectedTaskIds.includes(task.id) &&
                        styles.selectedTaskItem,
                    ]}
                    onLongPress={() => toggleTaskSelection(task.id)}
                  >
                    <Text style={styles.taskTitle}>{task.title}</Text>
                    <Text style={styles.taskDescription}>
                      {task.description}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.checkbox}
                    onPress={() => toggleTaskSelection(task.id)}
                  >
                    <View
                      style={[
                        styles.roundCheckbox,
                        selectedTaskIds.includes(task.id)
                          ? styles.checked
                          : styles.unchecked,
                      ]}
                    >
                      {selectedTaskIds.includes(task.id) && (
                        <Text style={styles.checked}>🔴</Text>
                      )}
                    </View>
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
          )}
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <CustomButton style={styles.deleteTask} onPress={openDeleteModal}>
          <Image style={styles.image} source={binIcon} />
        </CustomButton>
        <CustomButton
          style={styles.createTask}
          onPress={() => setModalVisible(true)}
        >
          <Image style={styles.image} source={addIcon} />
        </CustomButton>
      </View>
      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <KeyboardAvoidingView behavior="height" style={{ flex: 1 }}>
            <ScrollView
              contentContainerStyle={styles.scrollContainer}
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.backgroundModal}>
                <Text style={styles.modalTitle}>Nova Tarefa</Text>
                <CustomInput
                  label="Titulo:"
                  style={styles.input}
                  value={newTask.title}
                  onChangeText={text => setNewTask({ ...newTask, title: text })}
                />
                <CustomInput
                  label="Descrição:"
                  style={styles.inputDescription}
                  value={newTask.description}
                  multiline
                  numberOfLines={4}
                  onChangeText={text =>
                    setNewTask({ ...newTask, description: text })
                  }
                />
                <View style={styles.modalButtons}>
                  <CustomButton
                    style={styles.modalButtonCancel}
                    onPress={() => setModalVisible(false)}
                  >
                    <Text style={styles.textButton}>Cancelar</Text>
                  </CustomButton>
                  <CustomButton
                    style={styles.modalButtonCreate}
                    onPress={handleAddTask}
                  >
                    <Text style={styles.textButton}>Criar</Text>
                  </CustomButton>
                </View>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </Modal>
      <Modal
        visible={deleteModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setDeleteModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.backgroundModal}>
            <Text style={styles.modalTitleDelete}>Excluir Tarefas</Text>
            <Text style={styles.warningText}>
              Tem certeza que deseja excluir esta tarefa? Esta ação não poderá
              ser desfeita.
            </Text>
            <Text style={styles.warningText}>
              Após clicar em excluir suas tarefas serão completamente excluídas
              da sua lista.
            </Text>

            <View style={styles.modalButtons}>
              <CustomButton
                style={styles.modalButtonCreate}
                onPress={() => setDeleteModalVisible(false)}
              >
                <Text style={styles.textButton}>Cancelar</Text>
              </CustomButton>
              <CustomButton
                style={styles.modalButtonCancel}
                onPress={handleDeleteTasks}
              >
                <Text style={styles.textButton}>Excluir</Text>
              </CustomButton>
            </View>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
}
