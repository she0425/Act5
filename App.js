import React from 'react';
import { View, Text } from 'react-native';
import RestApiExample from './RestApiEx';
import { styles } from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Northwest Samar State University - Activity 5</Text>
      
      {/* Renders the network REST API component */}
      <RestApiExample />
    </View>
  );
}