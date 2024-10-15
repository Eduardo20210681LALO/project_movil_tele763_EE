import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function EstadisticasGrupal() {
    return (
        <View style={styles.container}>
        <Text style={styles.text}>Perfil Usuario</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // Ocupa toda la pantalla
        justifyContent: 'center', // Centra verticalmente
        alignItems: 'center', // Centra horizontalmente
        backgroundColor: '#fff', // Fondo blanco
    },
    text: {
        fontSize: 24, // Tamaño del texto
        fontWeight: 'bold', // Texto en negrita
    },
});
