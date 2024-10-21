import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeDocente from './HomeDocente';
import CapturarCalificaciones from './Alumnos/CapturarCalificaciones';
import VisualizarAlumnos from './Alumnos/VisualizarAlumnos';
import VisualizarCalificaciones from './Alumnos/VisualizarCalificaciones';
import EstadisticasGrupal from './Estadisticas/EstadisticasGrupal';
import EstadisticasIndividual from './Estadisticas/EstadisticasIndividual';
import PerfilUsuario from './Usuario/PerfilUsuario';

// Creacion d Drawer Navigator
const Drawer = createDrawerNavigator();


export default function _layout() {
    return (
        <Drawer.Navigator initialRouteName="HomeDocente">
         
          <Drawer.Screen name="Inicio" component={HomeDocente} />
          
          <Drawer.Screen name="Capturar Calificaciones" component={CapturarCalificaciones} />
          <Drawer.Screen name="Visualizar Alumnos" component={VisualizarAlumnos} />
          <Drawer.Screen name="Visualizar Calificaciones" component={VisualizarCalificaciones} />
          
          <Drawer.Screen name="Estadísticas Grupales" component={EstadisticasGrupal} />
          <Drawer.Screen name="Estadísticas Individuales" component={EstadisticasIndividual} />
          
          <Drawer.Screen name="Perfil del Usuario" component={PerfilUsuario} />
        </Drawer.Navigator>
    );
}
