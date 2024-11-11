import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    gap: 40,
  },
  imageLogin: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  loginText: {
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
    gap: 24,
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 10,
    paddingLeft: 18,
    paddingBottom: 10,
    textAlign: 'left',
    width: '100%',
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
    color: '#314D3A',
    fontWeight: '800',
    fontSize: 16,
  },
  buttonLogin: { fontWeight: '800', fontSize: 18 },
});
