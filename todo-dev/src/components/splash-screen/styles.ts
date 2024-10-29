import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerSplashScreen: {
    flex: 1,
    backgroundColor: '#ADCEB7',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
    paddingTop: 150,
  },
  containerRounded: {
    width: '70%',
    height: 450,
    backgroundColor: '#FFFFFF',
    borderRadius: 200,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    alignSelf: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  nameApp: {
    fontSize: 40,
    fontWeight: '800',
    color: '#314D3A',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#314D3A',
    textAlign: 'center',
    paddingBottom: 50,
  },
});
