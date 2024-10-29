import { StyleSheet, Text, useColorScheme } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence,
} from 'react-native-reanimated';
import { Colors } from '@/constants/Colors';

// COMPONENTE QUE SE OCUPA COMO UNA ANIMACIÓN DE SALUDO, DIVERTIDA AL INICIO DE CARGA DE LA APLICACIÓN

export function HelloWave() {
  const rotationAnimation = useSharedValue(0);
  const theme = useColorScheme() ?? 'light';

  rotationAnimation.value = withRepeat(
    withSequence(
      withTiming(25, { duration: 150 }),
      withTiming(0, { duration: 150 })
    ),
    4 // Ejecuta la animación 4 veces
  );

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotationAnimation.value}deg` }],
  }));

  return (
    <Animated.View style={animatedStyle}>
      <Text
        style={[
          styles.text,
          { color: theme === 'light' ? Colors.light.text : Colors.dark.text },
        ]}
      >
        👋
      </Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    lineHeight: 32,
    marginTop: -6,
  },
});
