import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  // Estilos para o Container Todo
  containerTodo: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  contentTodo: {
    paddingBottom: 20,
  },

  // Estilos para o Cabeçalho
  header: {
    width: '100%',
    height: 150,
    paddingVertical: 20,
    backgroundColor: '#ADCEB7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },

  // Estilos para o Rodapé
  footer: {
    width: '100%',
    height: 80,
    backgroundColor: '#ADCEB7',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 120,
    position: 'relative',
  },
  createTask: {
    width: 75,
    height: 75,
    backgroundColor: '#BAE0BD',
    borderRadius: 50,
    borderColor: '#65A17C',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -40,
    right: 30,
  },
  deleteTask: {
    width: 75,
    height: 75,
    backgroundColor: '#BAE0BD',
    borderRadius: 50,
    borderColor: '#65A17C',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -40,
    left: 40,
  },
  image: {
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Estilos dos Itens da Lista de Tarefas
  taskItem: {
    maxWidth: 320,
    width: '100%',
    padding: 15,
    borderColor: '#e0e0e0',
    borderWidth: 2,
    marginBottom: 10,
    borderRadius: 20,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  taskDescription: {
    fontSize: 14,
    color: '#666',
  },

  // Estilos para o Modal de Criação/Exclusão de Tarefa
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    fontSize: 16,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  warningText: {
    color: 'red',
    marginVertical: 10,
    fontSize: 14,
    fontWeight: '600',
  },

  // Estilos para o Container dos Itens da Tarefa
  taskItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectedTaskItem: {
    backgroundColor: '#EDEDED',
  },

  // Estilos para o Checkbox
  checkbox: {
    width: 25,
    height: 25,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    color: 'green',
  },
  unchecked: {
    color: 'transparent',
  },
  roundCheckbox: {},
  checkedCheckbox: {},
});
