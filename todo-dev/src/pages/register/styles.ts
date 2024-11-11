import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    gap: 30,
  },
  imageRegister: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  registerText: {
    color: '#314D3A',
    fontSize: 40,
    fontWeight: '800',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  form: {
    width: '100%',
    maxWidth: 400,
    gap: 10,
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    paddingLeft: 18,
    textAlign: 'left',
    width: '100%',
    marginBottom: 10,
  },
  containerText: { alignItems: 'center' },
  text: {
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  buttonNavigate: {
    textDecorationLine: 'underline',
    fontWeight: '800',
    fontSize: 16,
  },
  buttonRegister: { fontWeight: '800', fontSize: 18 },
});
