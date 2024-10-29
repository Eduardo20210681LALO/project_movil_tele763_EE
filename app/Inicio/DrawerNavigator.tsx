// DrawerNavigator.tsx
import React, { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Importar las pantallas
import HomeDocentes from '../DrawerScreens/HomeDocentes';
import CapturarCalificaciones from '../DrawerScreens/Alumnos/CapturarCalificaciones';
import VisualizarAlumnos from '../DrawerScreens/Alumnos/VisualizarAlumnos';
import VisualizarCalificaciones from '../DrawerScreens/Alumnos/VisualizarCalificaciones';
import EstadisticasGrupal from '../DrawerScreens/Estadisticas/EstadisticasGrupal';
import EstadisticasIndividual from '../DrawerScreens/Estadisticas/EstadisticasIndividual';
import PerfilUsuario from '../DrawerScreens/Usuario/PerfilUsuario';

import CustomDrawerContent from '../Inicio/CustomDrawerContent';

import { UserContext } from '../DrawerScreens/UserContext';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  const { user } = useContext(UserContext); // Acceder al contexto del usuario

  return (
    <Drawer.Navigator
      initialRouteName="HomeDocentes"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="HomeDocentes" component={HomeDocentes} />
      <Drawer.Screen
        name="Capturar Calificaciones"
        component={CapturarCalificaciones}
      />
      <Drawer.Screen name="Visualizar Alumnos" component={VisualizarAlumnos} />
      <Drawer.Screen
        name="Visualizar Calificaciones"
        component={VisualizarCalificaciones}
      />
      <Drawer.Screen
        name="Estadísticas Grupales"
        component={EstadisticasGrupal}
      />
      <Drawer.Screen
        name="Estadísticas Individuales"
        component={EstadisticasIndividual}
      />
      <Drawer.Screen name="Perfil de Usuario" component={PerfilUsuario} />
    </Drawer.Navigator>
  );
}
