import { Tabs } from 'expo-router';
import React from 'react';
import { usePathname } from 'expo-router';

export default function TabLayout() {
  // Obtener la ruta actual
  const pathname = usePathname();

  return (
    <Tabs
      screenOptions={{
        // Ocultar el header en todas las pantallas
        headerShown: false,
        // Mostrar u ocultar el TabBar según la pantalla
        tabBarStyle: pathname === '/index' ? { display: 'none' } : {},
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          // Ocultar la Tab Bar para index
          tabBarStyle: { display: 'none' }, // Se oculta en esta pantalla
        }}
      />
    </Tabs>
  );
}
