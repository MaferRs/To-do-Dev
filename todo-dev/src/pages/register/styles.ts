import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 40,
    height: '100%',
  },
  imageRegister: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerText: {
    color: '#314D3A',
    fontSize: 40,
    fontWeight: '800',
  },
  image: { width: 200, height: 200 },
  form: { width: '100%', gap: 10 },
  errorText: { color: 'red', fontSize: 12, paddingLeft: 18 },
  text: { fontWeight: '600', fontSize: 16 },
});
