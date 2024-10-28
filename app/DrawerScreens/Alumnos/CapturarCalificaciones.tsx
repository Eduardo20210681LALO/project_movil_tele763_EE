import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CapturarCalificaciones() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Capturar Calificaciones</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});