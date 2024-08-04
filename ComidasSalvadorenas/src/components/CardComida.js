// src/components/CardComida.js

import React from 'react';
import { Card } from 'react-native-elements';
import { View, Text, Image, StyleSheet } from 'react-native';

const CardComida = ({ comida }) => {
  return (
    <Card>
      <Card.Title>{comida.nombre}</Card.Title>
      <Card.Divider />
      <View style={styles.container}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{ uri: comida.imagen }}
        />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 150,
  },
  calorias: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default CardComida;
