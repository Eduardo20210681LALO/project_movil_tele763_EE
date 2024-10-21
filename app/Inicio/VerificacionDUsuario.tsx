import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function VerificacionDUsuario() {
    return (
        <View style={styles.container}>
        <Text style={styles.text}>Verificacion Usuario</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,              // Usar todo el espacio disponible
        justifyContent: 'center', // Centrar verticalmente
        alignItems: 'center',     // Centrar horizontalmente
        backgroundColor: '#f0f0f0',
    },
    text: {
        fontSize: 24,          // Tamaño del texto
        color: '#333',         // Color del texto
    },
});
