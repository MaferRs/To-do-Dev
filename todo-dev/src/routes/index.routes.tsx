import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Register from '../pages/register';

const Stack = createStackNavigator(); // Definindo o Stack aqui

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ScreenName" component={Register()} />{' '}
      {/* Defina a tela */}
    </Stack.Navigator>
  );
}
