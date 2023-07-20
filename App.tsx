import React from 'react';
import AppNavigator from './src/navigators/AppNavigator';
import {SafeAreaView, View} from 'react-native';

export const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <AppNavigator />
    </SafeAreaView>
  );
};
