// ARCHIVO PRINCIPAL DE NAVEGACION DE LA APLICACION DE MANERA GENERAL

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, usePathname } from 'expo-router';  // Usar usePathname para obtener la ruta
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const pathname = usePathname(); // Obtener la ruta actual

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  // Rutas donde no quieres aplicar el ThemeProvider
  const noThemeRoutes = ['/Inicio/Login', '/Inicio/Registro'];
  const isNoThemeRoute = noThemeRoutes.includes(pathname);

  // Renderizar el contenido con o sin el ThemeProvider
  return isNoThemeRoute ? (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Todas las pantallas se deben definir como Stack.Screen */}
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="+not-found" />
      <Stack.Screen name="Inicio/Login" />
      <Stack.Screen name="Inicio/Registro" />
    </Stack>
  ) : (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="Inicio/Login" />
        <Stack.Screen name="Inicio/Registro" />
      </Stack>
    </ThemeProvider>
  );
}
