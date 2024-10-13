import * as React from 'react';
import renderer from 'react-test-renderer';

import { ThemedText } from '../ThemedText';

it(`renders correctly`, () => {
  const tree = renderer.create(<ThemedText>Snapshot test!</ThemedText>).toJSON();

  expect(tree).toMatchSnapshot();
});


// ARCHIVO JEST PARA LA REALIZACION DE PRUEBAS UNITARIAS EN LA EJECUCIÓN DE COMPONENTS
// FUNCION PRINCIPAL ES ASEGURARSE DE LOS CAMBIOS INESPERADOS EN LA UI.
