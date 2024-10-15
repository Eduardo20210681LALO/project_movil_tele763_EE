// ARCHIVO DE INICIO COMO INDEX O HOME CARGA PRINCIPAL
/*
git init 

# 1. Agrega los archivos modificados
git add .

# 2. Haz el commit con un mensaje
git commit -m "Descripción de los cambios"

# 3. Sube los cambios a la rama 'main' en GitHub
git push origin main
*/

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a la Aplicación</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centra los elementos verticalmente
    alignItems: 'center',      // Centra los elementos horizontalmente
    padding: 20,
    backgroundColor: '#f0f0f0', // Fondo claro
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333',              // Color del texto
    textAlign: 'center',        // Alineación centrada del título
  },
  button: {
    backgroundColor: '#007bff', // Color azul para el botón
    paddingVertical: 15,        // Padding vertical
    paddingHorizontal: 40,      // Padding horizontal
    borderRadius: 10,           // Bordes redondeados
    marginVertical: 10,         // Espaciado entre los botones
    width: '80%',               // Ancho del botón
    alignItems: 'center',       // Centrar el contenido del botón
  },
  buttonText: {
    color: '#fff',              // Texto en blanco
    fontSize: 16,
    fontWeight: 'bold',
  },
});