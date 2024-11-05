import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  contentTodo: {
    padding: 20,
  },
  mainContainer: {
    flex: 1, // Ocupa toda a tela
    padding: 20,
  },
  searchInput: {
    width: 320,
    height: 45,
    borderRadius: 10,
    backgroundColor: '#EDEDED',
    paddingLeft: 20,
    marginLeft: 20,
    marginTop: 10,
    fontSize: 16,
  },
  // Estilos para o Cabeçalho
  header: {
    width: '100%',
    height: 150,
    paddingVertical: 20,
    backgroundColor: '#ADCEB7',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingTop: 40,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    paddingLeft: 20,
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
    height: 65,
    padding: 10,
    width: '100%',
    borderColor: '#e0e0e0',
    borderWidth: 2,
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

  //Modal

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },

  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundModal: {
    width: 350,
    height: 430,
    justifyContent: 'center',
    gap: 10,
    backgroundColor: '#ADCEB7',
    borderRadius: 20,
    padding: 30,
  },
  modalTitle: {
    fontSize: 32,
    fontWeight: '800',
    marginBottom: 15,
    color: '#314D3A',
  },
  input: {
    backgroundColor: '#FFFFFF80',
    padding: 10,
    marginVertical: 10,
    borderRadius: 20,
  },
  inputDescription: {
    backgroundColor: '#FFFFFF80',
    padding: 10,
    borderRadius: 20,
    fontSize: 16,
    height: 100,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  modalButtonCancel: {
    width: 120,
    height: 38,
    backgroundColor: '#DC0104',
    color: '#000',
    fontWeight: '800',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  modalButtonCreate: {
    width: 120,
    height: 38,
    backgroundColor: '#65A17C',

    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  textButton: { color: '#000', fontWeight: '800', fontSize: 16 },

  modalTitleDelete: {
    fontSize: 32,
    fontWeight: '800',
    marginBottom: 15,
    color: '#314D3A',
    textAlign: 'center',
  },
  warningText: {
    color: '#000',
    fontSize: 18,
    fontWeight: '700',
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
