import { StyleSheet, View, TextInput, Text } from 'react-native';

export default function HelloWorldScreen() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Escribe algo..." />
      <Text style={styles.text}>Hola Mundo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: '80%',
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});
