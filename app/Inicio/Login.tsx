// Login.tsx
import React, { useState, useContext } from 'react';
import { View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { TextInput, Card, Text } from 'react-native-paper';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from '../DrawerScreens/UserContext';

export default function Login() {
  const { setUser } = useContext(UserContext);
  const router = useRouter();

  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mostrarContrasenia, setMostrarContrasenia] = useState(false);

  const toggleMostrarContrasenia = () =>
    setMostrarContrasenia(!mostrarContrasenia);

  const IniciarSesión = async () => {
    try {
      const response = await fetch(
        'http://192.168.1.146/TeleSecundaria763Movil/Inicio/login.php',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ usuario, email, password }),
        }
      );
  
      if (response.ok) {
        const data = await response.json();
        console.log('Respuesta del servidor:', data);
  
        if (data.success) {
          console.log('Ya entró a data.success');
  
          // Guarda los valores en AsyncStorage y luego imprime un mensaje de confirmación
          await AsyncStorage.setItem('user_id', data.id_usuario.toString());
          console.log('user_id almacenado en AsyncStorage:', data.id_usuario.toString());
  
          await AsyncStorage.setItem('auth_token', data.token);
          console.log('auth_token almacenado en AsyncStorage:', data.token);
  
          setUser({ id_usuario: data.id_usuario, token: data.token });
          router.push('/Inicio/DrawerNavigator');
        } else {
          console.log('Error de inicio de sesión:', data.messages);
        }
      } else {
        console.log('Error en la solicitud, intente nuevamente.');
      }
    } catch (error) {
      console.error('Error en el catch:', error);
    }
  };
  
  
  const Validacion = async () => {
    const usuarioRegex = /^[a-zA-Z0-9]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#\$%&])[A-Za-z\d#\$%&]+$/;
  
    if (!usuario) {
      console.log('Por favor, ingrese un nombre de usuario.');
      return;
    }
    if (!email) {
      console.log('Por favor, ingrese un correo electrónico.');
      return;
    }
    if (!password) {
      console.log('Por favor, ingrese una contraseña.');
      return;
    }
    if (!usuarioRegex.test(usuario)) {
      console.log('El nombre de usuario no es válido.');
      return;
    }
    if (!emailRegex.test(email)) {
      console.log('Por favor, ingrese un correo electrónico válido.');
      return;
    }
    if (!passwordRegex.test(password)) {
      console.log('La contraseña no es válida.');
      return;
    }
    
    // Si la validación pasa, llama a `IniciarSesión`
    await IniciarSesión();
  };
  

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, backgroundColor: '#f0f0f0' }}
    >
      <View style={styles.container}>
        <Card>
          <Card.Content>
            <Text style={styles.title}>Inicio de Sesión</Text>
            <Text style={styles.subtitle}>
              Por favor, inicie sesión para continuar
            </Text>

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

            <TouchableOpacity style={styles.loginButton} onPress={Validacion}>
              <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
            </TouchableOpacity>
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
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
  inputContainer: { marginBottom: 20 },
  loginButton: {
    backgroundColor: '#800000',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});
