// DrawerScreens/HomeDocentes.tsx
import React from 'react';
import { View, TextInput, StyleSheet, ScrollView } from 'react-native';

export default function HomeDocentes() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput style={styles.title}>Hola, Mundo</TextInput>
      <View style={styles.card}>
        <TextInput style={styles.message}>
          ¡Bienvenido al ejemplo de "Hola, Mundo" en React Native!
        </TextInput>
        <TextInput style={styles.subMessage}>
          Este es un ejemplo simplificado que solo muestra texto en pantalla.
        </TextInput>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
    alignItems: 'center', // Centra el contenido horizontalmente
    justifyContent: 'center', // Centra el contenido verticalmente
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#800000',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#800000',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    marginBottom: 20,
    alignItems: 'center',
  },
  message: {
    fontSize: 20,
    color: '#FFD700',
    textAlign: 'center',
    marginBottom: 10,
  },
  subMessage: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
});
