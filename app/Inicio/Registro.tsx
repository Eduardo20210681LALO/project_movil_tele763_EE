import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { TextInput, Card, Text } from 'react-native-paper';
import { ThemedText } from '@/components/ThemedText';
import { useRouter } from 'expo-router';

export default function Registro() {
    const router = useRouter();

    const [nombre, setNombre] = useState('');
    const [apellidoPaterno, setApellidoPaterno] = useState('');
    const [apellidoMaterno, setApellidoMaterno] = useState('');
    const [usuario, setUsuario] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [contrasenia, setContrasenia] = useState('');
    const [confirmarContrasenia, setConfirmarContrasenia] = useState(''); // Confirmar contraseña

    const [mostrarContrasenia, setMostrarContrasenia] = useState(false);
    const [mostrarContraseniaConfirm, setMostrarContraseniaConfirm] = useState(false);
    const toggleMostrarContrasenia = () => {
        setMostrarContrasenia(!mostrarContrasenia);
    };
    const toggleMostrarContraseniaConfirm = () => {
        setMostrarContraseniaConfirm(!mostrarContraseniaConfirm);
    };

    const RegistrarUsuario = () => {
        console.log('registro se redirige a login')
        router.push('/Inicio/Login');
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: '#f0f0f0' }}>
            <View style={styles.container}>
                <Card>
                    <Card.Content>
                        {/* Verifica el componente <ThemedText> */}
                        <ThemedText type="title" style={styles.title}>Registro</ThemedText>
                        <ThemedText type="defaultSemiBold" style={styles.subtitle}>Ingrese los datos correspondientes</ThemedText>

                        {/* Nombre */}
                        <View style={styles.inputContainer}>
                            <TextInput
                                label="Nombre"
                                placeholder="Ingrese su nombre"
                                mode="outlined"
                                value={nombre}
                                onChangeText={setNombre}
                            />
                        </View>

                        {/* Verifica el funcionamiento correcto de cada <TextInput> */}
                        {/* Apellido Paterno */}
                        <View style={styles.inputContainer}>
                            <TextInput
                                label="Apellido Paterno"
                                placeholder="Ingrese su apellido paterno"
                                mode="outlined"
                                value={apellidoPaterno}
                                onChangeText={setApellidoPaterno}
                            />
                        </View>

                        {/* Apellido Materno */}
                        <View style={styles.inputContainer}>
                            <TextInput
                                label="Apellido Materno"
                                placeholder="Ingrese su apellido materno"
                                mode="outlined"
                                value={apellidoMaterno}
                                onChangeText={setApellidoMaterno}
                            />
                        </View>

                        {/* Usuario */}
                        <View style={styles.inputContainer}>
                            <TextInput
                                label="Usuario"
                                placeholder="Ingrese su usuario"
                                mode="outlined"
                                value={usuario}
                                onChangeText={setUsuario}
                            />
                        </View>

                        {/* Correo */}
                        <View style={styles.inputContainer}>
                            <TextInput
                                label="Correo Electrónico"
                                placeholder="Ingrese su correo electrónico"
                                mode="outlined"
                                value={email}
                                onChangeText={setEmail}
                            />
                        </View>

                        {/* Teléfono */}
                        <View style={styles.inputContainer}>
                            <TextInput
                                label="Teléfono"
                                placeholder="Ingrese su teléfono"
                                mode="outlined"
                                value={telefono}
                                onChangeText={setTelefono}
                                keyboardType="numeric"
                            />
                        </View>

                        {/* Contraseña */}
                        <View style={styles.inputContainer}>
                            <TextInput
                                label="Contraseña"
                                placeholder="Ingrese su contraseña"
                                mode="outlined"
                                secureTextEntry={!mostrarContrasenia}
                                value={contrasenia}
                                onChangeText={setContrasenia}
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

                        {/* Confirmar Contraseña */}
                        <View style={styles.inputContainer}>
                            <TextInput
                                label="Confirmar Contraseña"
                                placeholder="Repita su contraseña"
                                mode="outlined"
                                secureTextEntry={!mostrarContraseniaConfirm}
                                value={confirmarContrasenia}
                                onChangeText={setConfirmarContrasenia}
                                right={
                                    <TextInput.Icon
                                        icon={() => (
                                            <FontAwesomeIcon
                                                icon={mostrarContraseniaConfirm ? faEyeSlash : faEye}
                                                size={20}
                                                color="#666"
                                            />
                                        )}
                                        onPress={toggleMostrarContraseniaConfirm}
                                    />
                                }
                            />
                        </View>

                        <TouchableOpacity style={styles.RegisterButton} onPress={RegistrarUsuario}>
                            <Text style={styles.RegisterButtonText}>Registrarse</Text>
                        </TouchableOpacity>

                        {/* Texto de enlace */}
                        <View style={styles.centerText}>
                            <Text style={styles.text}>¿Ya tienes cuenta?</Text>
                            <TouchableOpacity onPress={() => router.push('/Inicio/Login')}>
                                <Text style={[styles.text, styles.link]}>Inicia Sesión</Text>
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
        marginTop: 30, // Ajusta este valor para bajar el formulario
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
        marginTop: -5,
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
    RegisterButton: {
        backgroundColor: '#800000',
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 20,
    },
    RegisterButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
