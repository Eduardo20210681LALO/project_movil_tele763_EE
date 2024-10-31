import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default function VerificacionDUsuario() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.text}>Verificacion Usuario</TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Usar todo el espacio disponible
    justifyContent: 'center', // Centrar verticalmente
    alignItems: 'center', // Centrar horizontalmente
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 24, // Tamaño del texto
    color: '#333', // Color del texto
  },
});
