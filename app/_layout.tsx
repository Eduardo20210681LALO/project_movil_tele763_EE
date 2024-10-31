import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, usePathname } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import { UserProvider } from './DrawerScreens/UserContext'; // Ajusta la ruta si es necesario
import { View, Text } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const pathname = usePathname();

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

  const noThemeRoutes = [
    '/Inicio/Login',
    '/Inicio/Registro',
    'Inicio/VerificacionDUsuario',
    'Inicio/ActualizacionDUsuario',
  ];
  const isNoThemeRoute = noThemeRoutes.includes(pathname);

  const Content = (
    <View style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="Inicio/Login" />
        <Stack.Screen name="Inicio/Registro" />
        <Stack.Screen name="Inicio/VerificacionDUsuario" />
        <Stack.Screen name="Inicio/ActualizacionDUsuario" />
        <Stack.Screen name="Inicio/DrawerNavigator" />
      </Stack>
    </View>
  );

  return (
    <UserProvider>
      {isNoThemeRoute ? (
        Content
      ) : (
        <View style={{ flex: 1, backgroundColor: colorScheme === 'dark' ? DarkTheme.colors.background : DefaultTheme.colors.background }}>
          {Content}
        </View>
      )}
    </UserProvider>
  );
}
