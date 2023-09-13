import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/screens/home';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';

const Stack = createNativeStackNavigator()

function App(): JSX.Element {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

export default App;
