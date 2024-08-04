// App.js

import React from 'react';
import { ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import CardComida from './src/components/CardComida';
import comidas from './src/data';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {comidas.map((comida, index) => (
          <CardComida key={index} comida={comida} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
