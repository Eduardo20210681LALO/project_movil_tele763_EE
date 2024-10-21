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
    const noThemeRoutes = ['/Inicio/Login', '/Inicio/Registro', 'Inicio/VerificacionDUsuario', 'Inicio/ActualizacionDUsuario'];
    const isNoThemeRoute = noThemeRoutes.includes(pathname);

    // Aplica el ThemeProvider solo si no estamos en las rutas de login/registro
    const Content = (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(tabs)" />
            <Stack.Screen name="+not-found" />
            <Stack.Screen name="Inicio/Login" />
            <Stack.Screen name="Inicio/Registro" />
            <Stack.Screen name="Inicio/VerificacionDUsuario" />
            <Stack.Screen name="Inicio/ActualizacionDUsuario" />
            
            {/* Pantallas Iniciales dentro de la App Docentes */}
            <Stack.Screen name="Inicio/InicioDocente/HomeDocente" />
            <Stack.Screen name="Inicio/InicioDocente/Alumnos/CapturarCalificaciones" />
            <Stack.Screen name="Inicio/InicioDocente/Alumnos/VisualizarAlumnos" />
            <Stack.Screen name="Inicio/InicioDocente/Alumnos/VisualizarCalificaciones" />
            <Stack.Screen name="Inicio/InicioDocente/Estadisticas/EstadisticasGrupal" />
            <Stack.Screen name="Inicio/InicioDocente/Estadisticas/EstadisticasIndividual" />
            <Stack.Screen name="Inicio/InicioDocente/Usuario/PerfilUsuario" />
        </Stack>
    );
  
    // Solo aplica el ThemeProvider si no estás en rutas sin tema (login, registro)
    return isNoThemeRoute ? Content : (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            {Content}
        </ThemeProvider>
    );
}
