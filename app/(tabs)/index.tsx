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
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
     
      
      {/* Botón para ir al Login */}
      <Link href="/Inicio/Login" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ir a Login</Text>
        </TouchableOpacity>
      </Link>
      
      {/* Botón para ir al Registro */}
      <Link href="/Inicio/Registro" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ir a Registro</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});