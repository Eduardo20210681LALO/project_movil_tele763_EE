import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, ScrollView, Animated } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { TextInput, Card, Text } from 'react-native-paper';
import { ThemedText } from '@/components/ThemedText';
import { useRouter } from 'expo-router';

export default function VerificaciónUsuarioActContraseña() {
    const router = useRouter();
    
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');

    const handleLogin = () => {
      
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

                      
                        <TouchableOpacity
                            style={styles.loginButton}
                            onPress={handleLogin} // Mantén la acción del botón
                            >
                            <Text style={styles.loginButtonText}>
                                Iniciar Sesión
                            </Text>
                        </TouchableOpacity>


                        <View style={styles.centerText}>
                            <Text style={styles.text}>¿No tienes cuenta?</Text>
                            <TouchableOpacity>
                                <Text style={[styles.text, styles.link]}> Regístrate</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.centerText}>
                            <Text style={styles.text}>¿Olvidaste tu contraseña?</Text>
                            <TouchableOpacity>
                                <Text style={[styles.text, styles.link]}> Recuperar</Text>
                            </TouchableOpacity>
                        </View>

                    </Card.Content>
                </Card>
            </View>
        </ScrollView>
    )
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
