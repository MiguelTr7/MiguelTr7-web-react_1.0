// src/pages/Productos.spec.js (CORREGIDO)
import React from 'react';
// ¡¡ IMPORTAMOS 'within' !!
import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Productos from './Productos';
import productos from '../data/productos';

describe('Testing del componente Productos', () => {

    // Creamos una "función espía" para la prop onAgregar
    const mockOnAgregar = jasmine.createSpy('onAgregarSpy');

    beforeEach(() => {
        // Pasamos el espía como prop
        render(
            <MemoryRouter>
                <Productos onAgregar={mockOnAgregar} />
            </MemoryRouter>
        );
    });

    // Test 5 (Req 1: Renderizado de Lista)
    it('Req 1: debe renderizar la cantidad correcta de productos de la lista', () => {
        // Buscamos todos los botones "Añadir"
        const botonesAñadir = screen.getAllByText('Añadir');
        expect(botonesAñadir.length).toBe(productos.length);
    });

    // Test 6 (Req 1: Renderizado de Lista) - ¡¡CORREGIDO!!
    it('Req 1: debe renderizar los datos del primer producto (Martillo)', () => {
        // 1. Encontramos el nombre del producto
        const nombreProducto = screen.getByText('Martillo de acero');
        expect(nombreProducto).toBeTruthy();

        // 2. Encontramos el "contenedor" (la <article>) más cercano a ese nombre
        // El componente Productos.jsx usa <article> para cada card
        const cardContenedor = nombreProducto.closest('article');
        
        // 3. Usamos 'within' para buscar SOLAMENTE dentro de ese contenedor
        const precioEnCard = within(cardContenedor).getByText('$8.990');
        
        // 4. Verificamos que el precio exista DENTRO de la card del martillo
        expect(precioEnCard).toBeTruthy();
    });
});