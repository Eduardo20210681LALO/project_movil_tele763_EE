import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Text } from 'react-native-paper';

type CustomInputProps = {
  label: string; // Etiqueta del campo
  placeholder: string; // Placeholder para la entrada
  value: string; // Valor actual del input
  onChangeText: (text: string) => void; // Función para actualizar el valor
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad'; // Tipo de teclado (para diferentes tipos de entrada)
  secureTextEntry?: boolean; // Si es una entrada de contraseña
  multiline?: boolean; // Si permite múltiples líneas de texto
};

export const LabelPrincipal = ({
  label,
  placeholder,
  value,
  onChangeText,
  keyboardType = 'default', // "default" permite cualquier entrada
  secureTextEntry = false, // Por defecto no será una entrada de contraseña
  multiline = false, // Por defecto será de una sola línea
}: CustomInputProps) => {
  return (
    <View style={styles.inputContainer}>
      <Text>{label}</Text>
      <TextInput
        mode="outlined"
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText} // Permite cualquier texto ingresado
        keyboardType={keyboardType} // Permite elegir el tipo de teclado
        secureTextEntry={secureTextEntry}
        multiline={multiline}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    fontSize: 16,
    backgroundColor: '#fff', // Fondo blanco para el input
  },
});
