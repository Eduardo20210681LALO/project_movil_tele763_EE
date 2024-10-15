import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, ScrollView, Animated } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { TextInput, Card, Text } from 'react-native-paper';
import { ThemedText } from '@/components/ThemedText';
import { useRouter } from 'expo-router';

export default function ActualizacionContraseña() {
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
