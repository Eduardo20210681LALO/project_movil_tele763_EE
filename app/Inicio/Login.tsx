import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, ScrollView, Animated } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { TextInput, Card, Text } from 'react-native-paper';
import { ThemedText } from '@/components/ThemedText';
import { useRouter } from 'expo-router';
import { ToastAndroid } from 'react-native';

import Toast from 'react-native-toast-message';

export default function Login() {
    const router = useRouter();

    const [usuario, setUsuario] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [mostrarContrasenia, setMostrarContrasenia] = useState(false); // para la funcion de mostrar contraseña

    const toggleMostrarContrasenia = () => {
        setMostrarContrasenia(!mostrarContrasenia); // funcion de mostrar contraseña
    };

    const IniciarSesión = async () => {
        try {
            const response = await fetch('http://192.168.1.146/TeleSecundaria763Movil/Inicio/login.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    usuario: usuario,
                    email: email,
                    password: password,
                }),
            });
    
            if (response.ok) {
                const data = await response.json();
                if (data.success) {
                    
                    console.log("Inicio de sesión exitoso");




                } else {
                    console.log("Error de inicio de sesión:", data.messages);
                }
            } else {
                console.log('Error en la solicitud, intente nuevamente.');
                console.error('Error en la solicitud:', response.status);
            }
        } catch (error) {
            console.error('Error en el catch:', error);
            console.log('Error en el servidor, intente más tarde.');
        }
    };
    

    const Validacion = async () => {
        const usuarioRegex = /^[a-zA-Z0-9]+$/;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#\$%&])[A-Za-z\d#\$%&]+$/;

        if (!usuario) {
            Toast.show({
                type: 'info', text1: 'Advertencia', text2: 'Por favor, ingrese un nombre de usuario.',
                position: 'bottom', bottomOffset: 350, visibilityTime: 3000,
            });
            return;
        }
        if (!email) {
            Toast.show({
                type: 'info', text1: 'Advertencia', text2: 'Por favor, ingrese un correo electrónico.',
                position: 'bottom', bottomOffset: 350, visibilityTime: 3000,
            });
            return;
        }
        if (!password) {
            Toast.show({
                type: 'info', text1: 'Advertencia', text2: 'Por favor, ingrese una contraseña.',
                position: 'bottom', bottomOffset: 350, visibilityTime: 3000,
            });
            return;
        }
        if (!usuarioRegex.test(usuario)) {
            Toast.show({
                type: 'info', text1: 'Advertencia', text2: 'El nombre de usuario no valido',
                position: 'bottom', bottomOffset: 350, visibilityTime: 3000,
            });
            return;
        }
        if (!emailRegex.test(email)) {
            Toast.show({
                type: 'info', text1: 'Advertencia', text2: 'Por favor, ingrese un correo electrónico válido.',
                position: 'bottom', bottomOffset: 350, visibilityTime: 3000,
            });
            return;
        }
        if (!passwordRegex.test(password)) {
            Toast.show({
                type: 'info', text1: 'Advertencia', text2: 'La contraseña no valida',
                position: 'bottom', bottomOffset: 350, visibilityTime: 3000,
            });
            return;
        }
        await IniciarSesión();
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: '#f0f0f0' }}>
            <View style={styles.container}>
                <Card>
                    <Card.Content>
                        <ThemedText type="title" style={styles.title}>
                            Inicio de Sesión
                        </ThemedText>

                        <ThemedText type="defaultSemiBold" style={styles.subtitle}>
                            Por favor, inicie sesión para continuar
                        </ThemedText>
                  
                        {/* Usuario */}
                        <View style={styles.inputContainer}>
                            <TextInput
                                label="Usuario"
                                placeholder="Ingrese su nombre de usuario"
                                mode="outlined"
                                value={usuario}
                                onChangeText={setUsuario}
                                keyboardType="default"
                            />
                        </View>

                        {/* Correo electrónico */}
                        <View style={styles.inputContainer}>
                            <TextInput
                                label="Correo Electrónico"
                                placeholder="Ingrese su correo electrónico"
                                mode="outlined"
                                value={email}
                                onChangeText={setEmail}
                                keyboardType="email-address"
                            />
                        </View>

                        {/* Contraseña */}
                        <View style={styles.inputContainer}>
                            <TextInput
                                label="Contraseña"
                                placeholder="Ingrese su contraseña"
                                mode="outlined"
                                secureTextEntry={!mostrarContrasenia}
                                value={password}
                                onChangeText={setPassword}
                                right={
                                <TextInput.Icon
                                    icon={() => (
                                    <FontAwesomeIcon
                                        icon={mostrarContrasenia ? faEyeSlash : faEye}
                                        size={20}
                                        color="#666"
                                    />
                                    )}
                                    onPress={toggleMostrarContrasenia}
                                />
                                }
                            />
                        </View>

                        <TouchableOpacity
                                style={styles.loginButton}
                                onPress={Validacion}
                            >
                            <Text style={styles.loginButtonText}>
                                Iniciar Sesión
                            </Text>
                            <Toast />
                        </TouchableOpacity>

                        <View style={styles.centerText}>
                            <Text style={styles.text}>¿No tienes cuenta?</Text>
                            <TouchableOpacity onPress={() => router.push('/Inicio/Registro')}>
                                <Text style={[styles.text, styles.link]}>Regístrate</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.centerText}>
                            <Text style={styles.text}>¿Olvidaste tu contraseña?</Text>
                            <TouchableOpacity onPress={() => router.push('/Inicio/VerificacionDUsuario')}>
                                <Text style={[styles.text, styles.link]}>Actualizala</Text>
                            </TouchableOpacity>
                        </View>

                    </Card.Content>
                </Card>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#333',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginBottom: 30,
    },
    inputContainer: {
        marginBottom: 20,
    },
    loginButton: {
        backgroundColor: '#800000',
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 20,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    centerText: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    text: {
        fontSize: 15,
        color: '#666',
    },
    link: {
        color: '#0066cc',
        fontWeight: 'bold',
        marginLeft: 5,
    },
});
