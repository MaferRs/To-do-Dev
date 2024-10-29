import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/login';
// import Register from '../pages/register';
import { RootStackParamList } from '../@types/navigation';
import List from '../pages/list';
import Register from '../pages/register';

const Stack = createStackNavigator<RootStackParamList>();

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#ffff' },
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
