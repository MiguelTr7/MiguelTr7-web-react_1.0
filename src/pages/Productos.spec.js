// src/pages/Productos.spec.js (CORREGIDO CON PRECISIÓN)
import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Productos from './Productos';
import productos from '../data/productos';

describe('Testing del componente Productos', () => {

    const mockOnAgregar = jasmine.createSpy('onAgregarSpy');

    beforeEach(() => {
        render(
            <MemoryRouter>
                <Productos onAgregar={mockOnAgregar} />
            </MemoryRouter>
        );
    });

    // Test 5 (Req 1: Renderizado de Lista) - ¡¡CORREGIDO!!
    it('Req 1: debe renderizar la cantidad correcta de productos de la lista', () => {
        
        // 1. Encontramos la sección que TIENE la lista de productos,
        //    usando el 'aria-label' que definiste en el HTML.
        const listaContenedor = screen.getByRole('region', { name: /Listado de productos/i });

        // 2. Usamos 'within' para buscar botones "Añadir" SOLAMENTE
        //    DENTRO de ese contenedor.
        const botonesAñadir = within(listaContenedor).getAllByText(/Añadir/i);
        
        // 3. Ahora sí, la cuenta debe ser 10, ignorando el 11º botón
        //    que está en otra parte de la página.
        expect(botonesAñadir.length).toBe(productos.length);
    });

    // Test 6 (Req 1: Renderizado de Lista) - (Este ya estaba bien)
    it('Req 1: debe renderizar los datos del primer producto (Martillo)', () => {
        
        const nombreProducto = screen.getByText('Martillo de acero');
        expect(nombreProducto).toBeTruthy();

        const cardContenedor = nombreProducto.closest('article');
        
        const precioEnCard = within(cardContenedor).getByText('$8.990');
        
        expect(precioEnCard).toBeTruthy();
    });
});