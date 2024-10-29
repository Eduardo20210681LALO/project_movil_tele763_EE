import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Login from './app/Inicio/Login';

jest.mock('expo-router', () => ({
  // Mock de expo-router
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}));

jest.mock('@react-native-async-storage/async-storage', () => ({
  // Mock de AsyncStorage
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
}));

jest.mock('react-native-toast-message', () => ({
  // Mock de react-native-toast-message
  show: jest.fn(),
  Toast: () => null,
}));

jest.mock('react-native-paper', () => {
  // Mock de react-native-paper
  const React = require('react');
  const { View, TextInput, Text } = require('react-native');
  const Card = ({ children }) => <View>{children}</View>;
  Card.Content = ({ children }) => <View>{children}</View>;

  const MockTextInput = ({
    label,
    placeholder,
    value,
    onChangeText,
    right,
  }) => (
    <View>
      <Text>{label}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
      {right && right.icon && right.icon()}
    </View>
  );

  MockTextInput.Icon = () => <View />;

  return {
    TextInput: MockTextInput,
    Card,
    Text,
  };
});

// Mock de FontAwesomeIcon
jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: () => <></>,
}));

// EMPIEZAN LAS PRUEBAS EN
describe('Login renderizado', () => {
  it('debe renderizar correctamente los campos de entrada y el botón', () => {
    const { getByText, getByPlaceholderText } = render(<Login />);

    // Verificaciones de los textos de bienvenida y subtítulos
    expect(getByText('Inicio de Sesión')).toBeTruthy();
    expect(getByText('Por favor, inicie sesión para continuar')).toBeTruthy();

    // Verificación de los campos de entrada con placeholders específicos
    expect(getByPlaceholderText('Ingrese su nombre de usuario')).toBeTruthy();
    expect(getByPlaceholderText('Ingrese su correo electrónico')).toBeTruthy();
    expect(getByPlaceholderText('Ingrese su contraseña')).toBeTruthy();

    // Verificación del botón de iniciar sesión
    expect(getByText('Iniciar Sesión')).toBeTruthy();
  });

  it('debe mostrar un mensaje de advertencia cuando falta un campo', () => {
    const { getByText } = render(<Login />);

    // Simulación de click en el botón sin completar los campos
    const loginButton = getByText('Iniciar Sesión');
    fireEvent.press(loginButton);

    // Verificar que se muestre el Toast (mockeado)
    expect(require('react-native-toast-message').show).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'info',
        text1: 'Advertencia',
      })
    );
  });
});
