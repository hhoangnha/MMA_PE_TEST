
import React from 'react'
import { BottomTab } from './BottomTab';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerShown: false,
      }}
      initialRouteName="BottomTab"
    >
      <Stack.Screen name="BottomTab" component={BottomTab} />
    </Stack.Navigator>
  );
}