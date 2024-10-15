import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, ScrollView, Animated } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { TextInput, Card, Text } from 'react-native-paper';
import { ThemedText } from '@/components/ThemedText';
import { SelectOptions } from '@/components/SelectOptions';
import { useRouter } from 'expo-router';

export default function login() {

    const router = useRouter();
    
    const [usuario, setUsuario] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mostrarContrasenia, setMostrarContrasenia] = useState(false);

    const [bloqueado, setBloqueado] = useState(false);
    const [tiempoRestante, setTiempoRestante] = useState(0);

    const toggleMostrarContrasenia = () => {
        setMostrarContrasenia(!mostrarContrasenia);
    };

    const handleLogin = () => {
        console.log('Se redirigira')
        router.push('/Inicio/ActualizacionContraseña');
    };

    const items = [
        { key: '1', value: 'Directivo' },
        { key: '2', value: 'Administrativo' },
        { key: '3', value: 'Docente' },
    ];


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

                        {/* Uso del componente SelectOptions */}
                        <SelectOptions
                            label="Tipo de usuario"
                            items={items}
                            selectedValue={usuario}
                            setSelected={setUsuario}
                        />

                        {/* Correo electrónico */}
                        <View style={styles.inputContainer}>
                            <TextInput
                                label="Correo Electrónico"
                                placeholder="Ingrese su correo electrónico"
                                mode="outlined"
                                value={email}
                                onChangeText={setEmail}
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
                            onPress={handleLogin}
                            >
                            <Text style={styles.loginButtonText}>
                                Iniciar Sesión
                            </Text>
                        </TouchableOpacity>

                        <View style={styles.centerText}>
                            <Text style={styles.text}>¿No tienes cuenta?</Text>
                            <TouchableOpacity onPress={() => router.push('/Inicio/Registro')}>
                                <Text style={[styles.text, styles.link]}>Regístrate</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.centerText}>
                            <Text style={styles.text}>¿Olvidaste tu contraseña?</Text>
                            <TouchableOpacity onPress={() => router.push('/Inicio/VerificaciónUsuarioActContraseña')}>
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
