// DrawerScreens/HomeDocentes.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeDocentes() {
    const [datosUsuario, setDatosUsuario] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserData = async () => {
            const idUsuario = await AsyncStorage.getItem('idUsuario');
            if (idUsuario) {
                const data = { idUsuario };
                const url = 'http://localhost/TeleSecundaria763/UsuarioGeneral/datosUsuario.php';
                const options = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                };
                try {
                    console.log('Realizando fetch con los siguientes datos:', data);
                    const response = await fetch(url, options);
                    const result = await response.json();
                    if (result.success) {
                        const usuario = {
                            nombre: result.vch_nombre,
                            APAterno: result.vch_APaterno,
                            AMAterno: result.vch_AMaterno,
                            usuario: result.vch_usuario,
                            correo: result.vch_correo
                        };
                        setDatosUsuario(usuario);
                        console.log('los datos del usuario', usuario);
                    } else {
                        console.log('Error: ', result.error);
                    }
                } catch (error) {
                    console.log('Error al hacer la petición de datos:', error);
                }
            }
            setLoading(false);
        };
        fetchUserData();
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Inicio</Text>
            <View style={styles.card}>
                {loading ? (
                    <ActivityIndicator size="large" color="#800000" />
                ) : datosUsuario ? (
                    <>
                        <Text style={styles.welcomeTitle}>¡Bienvenido al Portal Virtual Telesecundaria 763!</Text>
                        <Text style={styles.welcomeMessage}>
                            Estamos encantados de verte nuevamente, <Text style={styles.boldText}>Docente</Text>.
                        </Text>
                        <Text style={styles.userInfo}>
                            <Text style={styles.boldText}>CORREO:</Text> {datosUsuario.correo}
                        </Text>
                        <Text style={styles.userInfo}>
                            <Text style={styles.boldText}>NOMBRE:</Text> {`${datosUsuario.nombre} ${datosUsuario.APAterno} ${datosUsuario.AMAterno}`}
                        </Text>
                        <Text style={styles.userInfo}>
                            <Text style={styles.boldText}>USUARIO:</Text> {datosUsuario.usuario}
                        </Text>
                        <Text style={styles.italicText}>
                            El futuro académico de nuestros estudiantes está en tus manos. ¡Gracias por contribuir a su éxito!
                        </Text>
                        <Text style={styles.boldText}>
                            OBJETIVO DEL SISTEMA: Este portal está diseñado para facilitar la administración de la información académica
                            de nuestros alumnos, permitiéndote realizar gestiones de manera rápida y eficiente. Juntos estamos construyendo un mejor futuro.
                        </Text>
                    </>
                ) : (
                    <Text style={styles.loadingText}>Cargando información del usuario...</Text>
                )}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#f0f0f0',
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
    },
    welcomeTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFD700',
        textAlign: 'center',
        marginBottom: 20,
    },
    welcomeMessage: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 10,
    },
    userInfo: {
        fontSize: 16,
        color: '#fff',
        marginBottom: 10,
    },
    boldText: {
        fontWeight: 'bold',
        color: '#FFD700',
    },
    italicText: {
        color: '#fff',
        fontSize: 16,
        fontStyle: 'italic',
        marginTop: 20,
        textAlign: 'center',
    },
    loadingText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
});
