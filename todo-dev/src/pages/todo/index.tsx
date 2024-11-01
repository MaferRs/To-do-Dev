import { useState } from 'react';
import { styles } from './styles'; // Certifique-se de que você tenha o arquivo de estilos.
import {
  KeyboardAvoidingView,
  Modal,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Image,
  Platform,
} from 'react-native';
import CustomButton from '../../components/button/custom-button';

import binIcon from '../../assets/binIcon.png';
import addIcon from '../../assets/addIcon.png';
import CustomInput from '../../components/input/custom-input';

interface Task {
  id: number;
  title: string;
  description: string;
}

export default function Todo() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [newTask, setNewTask] = useState<Task>({
    id: 0,
    title: '',
    description: '',
  });
  const [selectedTaskIds, setSelectedTaskIds] = useState<number[]>([]);

  const handleAddTask = () => {
    if (newTask.title && newTask.description) {
      setTasks([...tasks, { ...newTask, id: Date.now() }]);
      setNewTask({ id: 0, title: '', description: '' });
      setModalVisible(false);
    }
  };

  const handleDeleteTasks = () => {
    setTasks(tasks.filter(task => !selectedTaskIds.includes(task.id)));
    setSelectedTaskIds([]);
    setDeleteModalVisible(false);
  };

  const toggleTaskSelection = (taskId: number) => {
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

  return (
    <KeyboardAvoidingView behavior="height" style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Bem Vinda, Ana F.</Text>
      </View>
      <ScrollView
        contentContainerStyle={styles.containerTodo}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.contentTodo}>
          {tasks.map(task => (
            <View key={task.id} style={styles.taskItemContainer}>
              <TouchableOpacity
                style={[
                  styles.taskItem,
                  selectedTaskIds.includes(task.id) && styles.selectedTaskItem,
                ]} // Estilo se estiver selecionado
                onLongPress={() => toggleTaskSelection(task.id)}
              >
                <Text style={styles.taskTitle}>{task.title}</Text>
                <Text style={styles.taskDescription}>{task.description}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.checkbox}
                onPress={() => toggleTaskSelection(task.id)} // Alterna a seleção ao clicar
              >
                <View
                  style={[
                    styles.roundCheckbox,
                    selectedTaskIds.includes(task.id)
                      ? styles.checked
                      : styles.unchecked, // Verifica se o checkbox está selecionado
                  ]}
                >
                  {selectedTaskIds.includes(task.id) && (
                    <Text style={styles.checked}>🔴</Text> // Exibe o checkmark se selecionado
                  )}
                </View>
              </TouchableOpacity>
            </View>
          ))}
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

      {/* Modal para Excluir Tarefa */}
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
      {/* Modal para Excluir Tarefa */}
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
