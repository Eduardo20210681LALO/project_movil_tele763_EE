import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Registro from '../app/Inicio/Registro'; // Ajusta la ruta según tu estructura de carpetas

describe('Registro Component', () => {
test('renderiza el formulario de registro', () => {
    render(<Registro />);
    expect(screen.getByText(/Texto esperado/i)).toBeInTheDocument(); // Asegúrate de ajustar el texto esperado
});
});
