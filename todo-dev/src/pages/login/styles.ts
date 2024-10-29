import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: 40,
    height: '100%',
    paddingVertical: 60,
  },
  imageLogin: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    color: '#314D3A',
    fontSize: 40,
    fontWeight: '800',
  },
  image: { width: 200, height: 200 },
  form: { width: '100%', gap: 24 },
  errorText: { color: 'red', fontSize: 10, paddingLeft: 18, paddingBottom: 10 },
  text: { fontWeight: '600', fontSize: 16 },
});
