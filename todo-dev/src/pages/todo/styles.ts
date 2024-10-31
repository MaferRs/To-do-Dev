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
    paddingVertical: 20,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },

  // Estilos dos Itens da Lista de Tarefas
  taskItem: {
    padding: 15,
    backgroundColor: '#e0e0e0',
    marginBottom: 10,
    borderRadius: 5,
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
    backgroundColor: '#e0e0e0',
  },

  // Estilos para o Checkbox
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    color: 'green',
    width: 20,
    height: 20,
  },
  unchecked: {
    color: 'transparent',
  },
  roundCheckbox: {},
  checkedCheckbox: {},
});
