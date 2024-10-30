import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerTodo: {
    flex: 1,
  },
  contentTodo: {},
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContentContainer: {
    flexGrow: 1,
    padding: 20,
  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
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
    backgroundColor: '#ADCEB7',
  },
});
