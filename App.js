import React from 'react';
import {View, Text} from 'react-native';

export default function App() {
  return (
    <View>
      <Text>Todo App</Text>
      <Text>{process.env.REACT_APP_APIURI}</Text>
    </View>
  );
}
